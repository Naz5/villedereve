<template>
  <div class="steps-form-wrapper">
    <div v-if="currentScreenData" class="steps-form">
      <VdrMenu />
      <div class="steps-form-container">
        <div class="steps-form-icons">
          <VdrStepMenu
              :currentStep="steps[currentStepIndex]"
              :passedSteps="passedSteps"
              @goBack="goBack"
          />
        </div>
        <div class="steps-form-content">
          <div class="question-box">
            <div class="girl-photo">
              <img src="../../assets/girl-photo.svg" alt="girl-photo">
            </div>
            <div class="info">
              <div class="name">Anaitis</div>
              <div class="question">{{ this.currentScreenData.title }}</div>
            </div>
          </div>
          <div class="question-item">
            <div class="question-inputs">
              <transition name="fade">
              <component
                  :is="steps[currentStepIndex].component"
                  v-bind="{stepData: currentScreenData, passedStepData: currentPassedStep}"
                  @nextStep="nextStep"
              />
              </transition>
            </div>
            <div v-if="currentStepIndex !== steps.length-1" @click="nextStep()" class="question-next-btn nex-btn">
              <div>
                <img src="../../assets/right-arrow.svg" alt="right-arrow">
                <div>Passer</div>
              </div>
            </div>
          </div>
          <div class="flex-wrapper">
            <div v-if="currentScreenData.why" class="why-box">
              <div class="why-icon">
                <img src="../../assets/why-icon.svg" alt="why-icon">
                <div class="why-icon-text">Mais pourquoi ?</div>
              </div>
              <div class="why-text">{{this.currentScreenData.why}}</div>
            </div>
            <div v-if="!lastStep" @click="nextStep()" class="question-next-btn mob-nex-btn">
              <div>
                <img src="../../assets/right-arrow.svg" alt="right-arrow">
                <div>Passer</div>
              </div>
            </div>
          </div>
          <div v-if="passedSteps.length > 1 &&  !(firstStep || lastStep)" class="mob-prev-answers">
            <div class="title">Your previous answers</div>
            <VdrStepMenu
                :rowDirection="true"
                :currentStep="steps[currentStepIndex]"
                :passedSteps="passedSteps"
                @goBack="goBack"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mob-background-img"></div>
  </div>
</template>

<script>
import VdrMenu from "@/components/menu/VdrMenu";

import StepOne from "@/components/stepsForm/StepOne";
import StepTwo from "@/components/stepsForm/StepTwo";
import StepThree from "@/components/stepsForm/StepThree";
import StepFour from "@/components/stepsForm/StepFour";
import StepFive from "@/components/stepsForm/StepFive";
import StepSix from "@/components/stepsForm/StepSix";
import StepSeven from "@/components/stepsForm/StepSeven";
 import StepEight from "@/components/stepsForm/StepEight";
import StepNine from "@/components/stepsForm/StepNine";
import StepTen from "@/components/stepsForm/StepTen";

import Screens from '../../jsons/screens.json';
import VdrStepMenu from "@/components/stepsForm/stepMenu/VdrStepMenu.vue";
import {EventBus} from "@/EventBus";

export default {


name: "StepsForm",
components:   {
  VdrMenu,
  StepOne,
   StepTwo,
   StepThree,
  StepFour,
  StepFive,
  StepSix,
 StepSeven,
  StepEight,
  StepNine,
  StepTen,
  VdrStepMenu
},
  data: function ()  {
    return {
      currentStepIndex: 0,
      passedSteps: [],
      steps: [
        {
          id: 'accueil',
          component: StepOne
        },
        {
          id: 'screen_distance',
          component: StepTwo
        },
        {
          id: 'screen_code_postal',
          component: StepThree
        },
        {
          id: 'screen_residence_principale',
          component: StepFour
        },
        {
          id: 'screen_kids',
          component: StepFive
        },
        {
          id: 'screen_terrain',
          component: StepSix
        },
        {
          id: 'screen_densite',
          component: StepSeven
        },
        {
          id: 'screen_meteo',
          component: StepEight
        },
        {
          id: 'screen_preferences',
          component: StepNine
        },
        {
          id: 'screen_filtre',
          component: StepTen
        }
      ],
      currentScreenData: null,
      isCurrentStepSkipped: false
    }

  },
  methods: {
    goBack(backStepId) {
      this.currentStepIndex = this.getStepIndexById(backStepId);
    },
    nextStep(nextStepId = null, data = null)  {

      let alreadyPassedStepIndex = this.passedSteps
          .findIndex(step => step.id === this.steps[this.currentStepIndex].id);

      const skippedData = {
        apiValue: null,
        shortTitle: this.currentScreenData['short_title'],
        shortValue: null
      }

      if(alreadyPassedStepIndex >= 0){
        this.passedSteps[alreadyPassedStepIndex].data = data ?? skippedData;
        this.passedSteps = this.passedSteps.slice(0, this.currentStepIndex  +1)
      } else {
        this.passedSteps.push(this.getPassedStep(data ?? skippedData))

      }

      if(nextStepId === 'results'){
        this.$router.push({ name: 'results', params: {passedSteps: this.passedSteps}})
        return
      }

      const nextStepIndex = nextStepId ? this.getStepIndexById(nextStepId) : this.currentStepIndex+1;

      if(nextStepIndex && nextStepIndex <= this.steps.length-1){
        this.currentStepIndex = nextStepIndex;
      }

    },
    getScreenData(){
      this.currentScreenData = Object.values(Screens)
          .find(screen => this.steps[this.currentStepIndex].id === screen.id);
    },
    getPassedStep(data) {
     let passedStep = this.steps[this.currentStepIndex];
     passedStep.data = data;
     return passedStep
    },

    getStepIndexById(stepId){
       return this.steps.findIndex(step => step.id === stepId);
    }
  },
  watch: {
    currentStepIndex: function () {
      this.getScreenData()
    }
  },
  computed: {
  currentPassedStep: function (){
    return this.passedSteps.find(passedStep => passedStep.id === this.steps[this.currentStepIndex].id) ?? null
  },
    firstStep: function (){
      return this.currentStepIndex === 0
    },
  lastStep: function (){
    return this.currentStepIndex === this.steps.length-1
  }
  },
  mounted() {
  EventBus.$on('goBackToStep', (data) => {
    this.goBack(data.stepId);
    this.passedSteps = data.passedSteps
  })
    this.getScreenData()
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

//.fade-enter-active, .fade-leave-active {
//  transition-property: opacity;
//  transition-duration: .35s;
//}
//
//.fade-enter, .fade-leave-active {
//  opacity: 0
//}

.steps-form-container{
  min-height: calc(100vh - 90px);
  margin-top: 90px;
  width: 100%;
  padding: 15px 190px 15px 70px;
  box-sizing: border-box;
  background-image: url("../../assets/background_steps.png");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  display: flex;
  .steps-form-icons{
    width: 115px;
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
        align-items: center;
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
        display: flex;
        align-items: center;
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

    .mob-prev-answers{
      display: none;
      width: 100%;
      .title{
        font-size: 16px;
        color: $dark-blue-gray-color;
        font-family: 'Josefin', serif;
       text-align: center;

      }
    }

  }
}

@media screen and (max-width: 1200px) {
  .steps-form-container{
    padding-right: 90px;
  }
}

@media screen and (max-width: 1000px) {
  .steps-form-container{
    padding-right: 15px;
  }
}

@media screen and (max-width: 830px) {
  .steps-form-wrapper{
    .steps-form-container{
      background-image: none;
      min-height: auto;
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
        .mob-prev-answers{
          display: block;
        }

      }
    }
    .mob-background-img{
      background-image: url("../../assets/mob_background_steps.svg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: bottom;
      height: 580px;
      width: 100%;
    }
  }

}

@media screen and (max-width: 500px) {
  .mob-background-img{
    height: 396px !important;
}
}
</style>