<template>
<div class="steps-form">
  <VdrMenu />
  <div class="steps-form-container">
    <div class="steps-form-icons"></div>
    <div class="steps-form-content">
      <div class="question-box">
        <div class="girl-photo">
          <img src="../../assets/girl-photo.svg" alt="girl-photo">
        </div>
        <div class="info">
          <div class="name">Anaitis</div>
          <div class="question">Très bien ! Vous souhaitez une nouvelle résidence principale...</div>
        </div>
      </div>
      <div class="question-item">
        <div class="question-inputs">
          <StepOne/>
        </div>
        <div class="question-next-btn nex-btn">
          <div>
            <img src="../../assets/right-arrow.svg" alt="right-arrow">
          <div>Passer</div>
          </div>
        </div>
      </div>
      <div class="flex-wrapper">
        <div class="why-box">
          <div class="why-icon">
            <img src="../../assets/why-icon.svg" alt="why-icon">
            <div class="why-icon-text">Mais pourquoi ?</div>
          </div>
          <div class="why-text">Nous vous posons cette question afin de déterminer l'importance du temps de trajet pour
            vous rendre dans votre résidence secondaire.
          </div>
        </div>
        <div class="question-next-btn mob-nex-btn">
          <div>
            <img src="../../assets/right-arrow.svg" alt="right-arrow">
            <div>Passer</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import VdrMenu from "@/components/menu/VdrMenu";

import StepOne from "@/components/stepsForm/StepOne";

export default {
name: "StepsForm",
components: {
  VdrMenu,
  StepOne
}
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.steps-form-container{
  height: calc(100vh - 90px);
  margin-top: 90px;
  width: 100%;
  padding: 15px 214px 15px 15px;
  box-sizing: border-box;
  background-image: url("../../assets/background_steps.svg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  display: flex;
  .steps-form-icons{
    width: 110px;
  }
  .steps-form-content{
    width: 100%;
    padding: 60px 15px;
    .question-box{
      display: flex;
      .girl-photo{
        margin-right: 35px;
      }
      .info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        .name{
          font-family: 'Josefin', serif;
          font-size: 18px;
          color: $dark-blue-gray-color;
          margin-bottom: 5px;
        }
        .question{
          font-family: 'Inter', serif;
          font-size: 16px;
          color: $dark-blue-gray-color;
        }
      }
    }
    .question-item{
      margin-left: 115px;
      display: flex;
      .nex-btn{
        div{
          margin-left: 10px;
        }
      }
      .question-next-btn{
        display: flex;
        align-items: flex-end;
        margin-left: 20px;
        font-family: 'Inter', serif;
        font-size: 12px;
        color: $dark-blue-gray-color;
        cursor: pointer;
        img{
          margin-bottom: 5px;
        }
      }
      .question-inputs{
        width: 100%;
        //height: 100%;
      }
    }
    .flex-wrapper{
      display: flex;
      .why-box{
        display: none;
        width: 80%;
        margin: 25px auto;
        .why-icon{
          display: flex;
          align-items: center;
          min-width: 120px;
          margin-right: 10px;
          img{
            margin-right: 10px;
          }
          .why-icon-text{
            font-family: 'Josefin', serif;
            font-size: 14px;
            min-width: 83px;
            color: $dark-blue-gray-color;
          }
        }
        .why-text{
          font-family: 'Inter', serif;
          font-size: 12px;
          color: $dark-blue-gray-color;
        }
      }
      .mob-nex-btn{
        display: none;
      }
    }

  }
}

@media screen and (max-width: 750px) {
  .steps-form-container{
    background-image: url("../../assets/mob_background_steps.svg");
    background-size: 100% 52%;
    padding: 15px 10px;
    .steps-form-icons{
      display: none;
    }
    .steps-form-content{
      padding: 0;
      .question-box{
        display: flex;
        margin-bottom: 20px;
        .girl-photo{
          img{
            width: 83px;
            height: 83px;
          }
        }
        .info{
          .name{
            font-size: 16px;
          }
          .question{
            font-size: 12px;
          }
        }
      }
      .question-item{
        margin-left: 0;
        .nex-btn{
          display: none;
        }
        .question-inputs{
          width: 100%;
        }
      }
      .flex-wrapper{
        align-items: center;
        justify-content: flex-end;
        .why-box{
          .why-icon{
            .why-icon-text{
              font-size: 12px;
            }
          }
          .why-text{
            font-size: 8px;
          }
        }
        .mob-nex-btn{
          display: block;
        }
        .question-next-btn{
          font-size: 10px;
          img{
            width: 38px;
            height: 38px;
          }
        }
      }


    }
  }
}
</style>