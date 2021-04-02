<template>
<div v-if="resultsData && resultsData.length" class="results">
  <VdrMenu />
  <div class="results-container">
    <div class="steps-menu-title">Your previous answers</div>
    <VdrStepMenu
        :rowDirection="true"
        :passedSteps="passedSteps"
        @goBack="goBackToSteps"
    />
    <div class="results-list">
      <div v-for="(resultItem, index) in resultsData" :key="index" class="results-item">
        <div class="main-info">
          <div class="main-info-img">
            <div class="result-badge">
              <div class="text">
                <div>#{{ resultItem.ranking}}</div>
                <div>{{ calcPercentage(resultItem.score) }}%</div>
              </div>
              <img src="../../assets/results/bedg.png" alt="">
            </div>
            <VueSlickCarousel :arrows="false" :draggable="false" :dots="true">
              <img
                  v-for="(picture, index) in resultItem.pictures"
                  :key="index"
                  v-img="{src: picture.urls.large}"
                  :src="picture.urls.thumbnail"
                  alt=""
              >
            </VueSlickCarousel>
          </div>
          <div class="main-info-text">
            <div class="title">{{ resultItem.title }}</div>
            <div class="subtitle">{{ resultItem.subtitle }}</div>
            <p>{{ resultItem.text}}</p>
            <div class="main-attributes">
              <div v-for="(attribute, index) in  resultItem['main_attributes']" :key="index" class="main-attributes-item">
                <img :src="require(`@/assets/results/attributes/${attribute.icon}.svg`)" alt=""/>
                <div class="name">{{ attribute.name }}</div>
              </div>
            </div>
            <div @click="toggleResultDetails" class="see-details-btn">Voir les détails</div>
          </div>
        </div>
        <div class="result-details">
          <div class="shadow-box">
            <div class="header">
              <div class="title"> Détails du score de {{calcPercentage(resultItem.score)}}% et de vos {{ resultItem.criteria }} critères</div>
              <img @click="toggleShadowBox" src="../../assets/results/arrowUp.svg" alt="">
            </div>
            <div class="shadow-box-container">
              <div class="details-items-container">
                <div class="details-items-part">
                  <div v-for="(score, index) in resultItem.scores.filter((s,i) => i%2 === 0)" :key="index"  class="details-item">
                    <VdrSlider :definedValue="calcPercentage(score.value)">
                      <template v-slot:maxSliderTemplate>
                        <div style="margin-left: 25px; min-width: 195px; font-family: 'Inter', serif; font-size: 12px">
                          {{score.desc}}
                        </div>
                      </template>
                    </VdrSlider>
                  </div>
                </div>
                <div class="details-items-part">
                  <div v-for="(score, index) in resultItem.scores.filter((s,i) => i%2 !== 0)" :key="index" class="details-item">
                    <VdrSlider :definedValue="calcPercentage(score.value)">
                      <template v-slot:maxSliderTemplate>
                        <div style="margin-left: 25px; min-width: 195px; font-family: 'Inter', serif; font-size: 12px">
                          {{score.desc}}
                        </div>
                      </template>
                    </VdrSlider>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="shadow-box">
            <div class="header">
              <div class="title">{{resultItem.cities.length}} communes idéales pour vous !</div>
              <img @click="toggleShadowBox" src="../../assets/results/arrowUp.svg" alt="">
            </div>
            <div class="shadow-box-container">
              <div class="communes-container">
                <div class="table">
                  <table>
                    <tr class="header-row">
                      <th>Ville</th>
                      <th>Score</th>
                      <th>Prix au m2 moyen</th>
                      <th>Habitant</th>
                    </tr>
                    <tr v-for="(city, index) in resultItem.cities" :key="index">
                      <td>{{ city.name }}</td>
                      <td>{{ city.score }}</td>
                      <td>{{ city.price }}€/m2</td>
                      <td>{{ numberWithSpaces(city.population) }}</td>
                    </tr>
                  </table>
                </div>
                <div class="map">
                  <img src="../../assets/results/map.png" alt="">
                </div>
              </div>
            </div>

          </div>
          <div class="shadow-box">
            <div class="header">
              <div class="title">{{ resultItem.properties_count }} biens disponibles à l’achat dans cette région</div>
              <img @click="toggleShadowBox" src="../../assets/results/arrowUp.svg" alt="">
            </div>
            <div class="shadow-box-container">
              <div class="purchases">
                <div v-for="(property, index) in resultItem.properties" :key="index" class="purchase-box">
                  <img :src="property.picture" alt="">
                  <div class="img-main-info">
                    <div class="name">{{ property.type }} | {{ property.city }} </div>
                    <div class="price">{{numberWithSpaces(property.price)}} €</div>
                  </div>
                  <div class="img-details">{{ property.room }} Pièces  •  {{ property.chamber }} Chambres  •  {{numberWithSpaces(property.size)}} m2</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <div class="footer-content">
      <div class="subscribe">
        <div class="title">Souscrivez à notre newsletter</div>
        <div class="email-input">
          <input placeholder="Adresse e-mail" type="text">
          <div class="subscribe-btn">S’inscrire</div>
        </div>
      </div>
      <div class="lines-rapid">
        <div class="title">Liens rapides</div>
        <div class="line">
          <div class="acr">CGU</div>
          <div class="text">Conditions de remboursement</div>
        </div>
        <div class="line">
          <div class="acr">CGV</div>
          <div class="text">Nous contracter</div>
        </div>
      </div>
    </div>
    <div class="sign">© 2021, Ville de Reve</div>
  </div>
</div>
</template>

<script>
import Results from "@/jsons/results.json"
import VdrMenu from "@/components/menu/VdrMenu";
import VdrStepMenu from "@/components/stepsForm/stepMenu/VdrStepMenu.vue";
import VdrSlider from "@/components/slider/VdrSlider";
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
name: "Results",
  components:   {
    VdrMenu,
    VdrStepMenu,
    VdrSlider,
    VueSlickCarousel
  },
  props: ["passedSteps"],
  data: function ()  {
    return {
      resultsData: null
    }
    },
  methods: {
    toggleShadowBox: function (e){
     const shadowBoxContainer = e.target.closest('.shadow-box').querySelector('.shadow-box-container');
     const arrow = e.target;
      shadowBoxContainer.style.display = shadowBoxContainer.style.display === 'none' ? 'block' : 'none';
      arrow.style.transform = arrow.style.transform === 'rotate(180deg)' ? 'initial' : 'rotate(180deg)';
    },
    toggleResultDetails: function (e){
     const resultDetails = e.target.closest('.results-item').querySelector('.result-details');
     if(resultDetails.style.display === 'block'){
       resultDetails.style.display = 'none';
       e.target.innerText = 'Voir les détails';
       return
     }

      resultDetails.style.display = 'block';
      e.target.innerText = 'Masquer les détails';
    },
    goBackToSteps: function (stepId){
    const dataFromResults =  {stepId, passedSteps: this.passedSteps}
      this.$router.push({ name: 'steps', params:{ dataFromResults: dataFromResults}})
    },
    calcPercentage: function (val){
        return val*100
    },
    numberWithSpaces: function(val) {
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
  },
  mounted(){
    this.resultsData = Results.results;
    // if you need first result to be opened by default
    this.$nextTick(() => {
      document.querySelector('.results-item .see-details-btn').innerText = 'Masquer les détails';
      document.querySelector('.result-details').style.display = 'block';
    })
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

::v-deep .slick-dots li button:before{
  font-size: 14px !important;
}

.results-container{
  color: $dark-blue-gray-color;
  min-height: calc(100vh - 90px);
  margin-top: 90px;
  width: 100%;
  padding: 15px 70px;
  box-sizing: border-box;
  .steps-menu-title{
    display: none;
    font-size: 16px;
    font-family: 'Josefin', serif;
    text-align: center;
  }
  .results-list{
    .results-item{
      display: flex;
      flex-direction: column;
      align-items: center;
      .main-info{
        display: flex;
        margin-bottom: 20px;
        .main-info-img{
          .result-badge{
            position: absolute;
            z-index: 1;
            margin-top: 34px;
            margin-left: -38px;
            .text{
              text-align: center;
              position: absolute;
              color: white;
              font-family: 'Josefin', serif;
              font-size: 18px;
              left: 23px;
              top: 22px;
            }
          }
          width: 500px;
          margin-right: 40px;
          margin-bottom: 40px;
        }
        .main-info-text{
          .title {
            font-family: 'Josefin', serif;
            font-size: 52px;
            margin-bottom: 20px;
          }
          .subtitle{
            font-family: 'Josefin', serif;
            font-size: 18px;
          }
          p{
            font-family: 'Inter', serif;
            font-size: 16px;
            max-width: 500px;
          }
          .main-attributes{
            display: flex;
            .main-attributes-item{
              height: 60px;
              display: flex;
              justify-content: space-between;
              flex-direction: column;
              margin-right: 16px;
              img{
                width: 40px;
                height: 40px;
              }
              .name{
                text-align: center;
                font-family: 'Inter', serif;
                font-size: 12px;
              }
            }
          }
          .see-details-btn{
            cursor: pointer;
            width: 190px;
            height: 45px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            background-color: $coral-color;
            font-family: 'Josefin', serif;
            border-radius: 25px;
            margin: 15px auto;
          }
        }
      }
      .result-details{
        display: none;
      }
      .shadow-box{
        padding: 20px;
        box-shadow: 0 0 12px 3px rgba(174, 174, 174, 0.15);
        margin-bottom: 50px;
        .header{
          display: flex;
          margin: 20px 0;
          justify-content: space-between;
          .title{
            font-family: 'Josefin', serif;
            font-size: 36px;
          }
          img{
            cursor: pointer;
            margin-left: 10px;
            width: 40px;
            height: 40px;
          }
        }
      }
      .details-items-container{
        display: flex;
        justify-content: space-between;
        .details-items-part{
          width: 45%;
          .details-item{
            margin-bottom: 20px;
          }
        }
      }
      .communes-container{
        display: flex;
        .table{
          width: 100%;
          font-family: 'Inter', serif;
          font-size: 12px;
          table{
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed;
             th,td{
              padding: 8px 10px !important;
            }
            tr:nth-child(2){
              td:first-child{
                border-top-left-radius:10px;
                border-bottom-left-radius:10px;
              }
              td:last-child{
                border-top-right-radius:10px;
                border-bottom-right-radius:10px;
              }
              td{
                background-color: rgba(242, 117, 99, 0.4);;
              }
            }

            td{
              padding-top: 10px;
              max-width: 100px;
            }
            th{
              text-align: left;
            }
          }
        }
        .map{
          width: 830px;
          display: flex;
          margin-left: 80px;
          justify-content: left;
        }
      }
      .purchases{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        .purchase-box{
          margin-right: 75px;
          margin-bottom: 15px;
        .img-main-info{
          display: flex;
          justify-content: space-between;
          margin: 5px 0;
          font-family: 'Josefin', serif;
          .name{
            font-size: 14px;
          }
          .price{
            font-size: 18px;
          }
        }
          .img-details{
            font-family: 'Inter', serif;
            font-size: 12px;
          }
        }
      }
    }
  }
}

.footer{
  height: 490px;
  background-color: $dark-blue-gray-color;
  color: white;
  .footer-content{
    height: 90%;
    display: flex;
    .title{
      font-family: 'Josefin', serif;
      font-size: 36px;
      margin: 30px 0;
    }
    .subscribe{
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .email-input{
        display: flex;
        align-items: center;
        input{
          height: 45px;
          width: 400px;
          background: #F4F4F4;
          border: 1px solid #DDDDDD;
          box-sizing: border-box;
          box-shadow: inset 2px 2px 10px rgba(64, 64, 64, 0.25);
          border-radius: 30px;
          outline: none;
          padding-left: 30px;
        }
        input::placeholder {
          color: rgba(45, 71, 112, 0.6);
          font-family: 'Inter', serif;
          font-size: 18px;
        }
        .subscribe-btn{
          width: 177px;
          height: 47px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Josefin', serif;
          background: #F27563;
          border-radius: 30px;
          margin-left: -35px;
        }
      }
    }
    .lines-rapid{
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .line{
        display: flex;
        font-size: 18px;
        font-family: 'Inter', serif;
        margin-bottom: 10px;
        .acr{
          margin-right: 10px;
        }
      }
    }
  }
  .sign{
    font-family: 'Inter', serif;
    font-size: 18px;
    text-align: center;
  }
}

@media screen and (max-width: 1000px) {

  .results-container{

    .results-list{
      .results-item{

        .details-items-container{
          flex-direction: column;
          .details-items-part{
            width: 100% !important;
          }
        }
        .purchases{
          .purchase-box{
            margin-right: 50px;
          }
        }
      }
    }
  }

  .footer{
    .footer-content{
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

}

@media screen and (max-width: 900px) {
  .results-container{
    min-height: auto;
    padding: 15px 10px;
    .results-list{
      .results-item{
        .main-info{
      flex-direction: column-reverse;
          align-items: center;
          .main-info-img{
            margin-right: 0;
          }
          .main-info-text{
            .title{
              font-size: 38px;
            }
            .subtitle{
              font-size: 16px;
            }
            p{
              font-size: 14px;
            }
            .main-attributes{
              display: flex;
              justify-content: center;
              margin-bottom: 35px;
            }
          }
        }
        .shadow-box{
          .header{
            .title{
              font-size: 24px;
            }
          }
        }
        .communes-container{
          flex-direction: column;
          .map{
            width: auto;
            justify-content: center;
            margin: 0;
          }
      }
    }
    .title{
      display: block;
    }
  }
}
}

@media screen  and (max-width: 600px) {
  .results{
    .results-container{
      .results-list{
        .results-item{
          .main-info{
            .main-info-img{
              width: 380px;
            }
          }
        }
      }
    }
    .footer{
      .footer-content{
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .title{
          font-size: 27px;
        }
        .email-input{
          input{
            width: 200px;
          }
          input::placeholder {
            font-size: 12px;
          }
          .subscribe-btn{
            width: 140px;
            font-size: 12px;
          }
        }
        .lines-rapid{
          .line{
            font-size: 16px;
          }
        }
      }
      .sign{
        font-size: 16px;
      }
    }
  }
}

@media screen and (max-width: 400px) {
  .results-container{

    .results-list{
      .results-item{
        .main-info{
          .main-info-img{
            .result-badge{
              margin-top: 13px;
              margin-left: -29px;
              .text{
                left: 20px;
                top: 22px;
                font-size: 13px;
              }
              img{
                width: 63px;
              }
            }
            width: 250px !important ;
          }
        }
        .purchases{
          .purchase-box{
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>