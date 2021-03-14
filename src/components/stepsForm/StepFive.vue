<template>
<div class="step-five">
  <div class="edu-container">
    <div :class="{ouiIsActive: selectedValues.length}" class="yes-box">
      <img src="../../assets/stepFive/multiple-users-silhouette.svg" alt="">
      <div>Oui</div>
    </div>
    <div v-if="stepValues.length" class="inputs-box">
      <div
          v-for="(stepValue, index) in stepValues"
          :key="index"
          @click="toggleItem(stepValue)"
          :class="{selectedItem: isItemSelected(stepValue)}"
          class="edu-box"

      >
        <img :src="require(`@/assets/stepFive/${stepValue.id}.svg`)" alt="edu">
        <div class="edu-name">{{ stepValue.text }}</div>
      </div>
    </div>
  </div>
  <div @click="validateStep">
    <VdrValidateBtn class="validate-btn"/>
  </div>
</div>
</template>

<script>

import VdrValidateBtn from "@/components/validateBtn/VdrValidateBtn";
import {cutWords} from "@/helpers";
export default {
name: "StepFive",
  components: {
    VdrValidateBtn
  },
  props: {
    stepData: {
      type: Object,
      default: null
    },
  passedStepData: {
    type: Object,
    default: null
  }
  },
  data: function ()  {
    return {
      selectedValues: []
    }
  },
  methods: {
    validateStep: function(){
      const data = {
        apiValue: this.selectedValues,
        shortTitle: this.stepData['short_title'],
        shortValue: this.selectedValues.length ? cutWords(this.selectedValues, 2):
            null
      }

      this.$emit('nextStep', this.selectedValues.length ?
          this.stepData['next_screen'] :
          'screen_residence_principale',
          data)
    },
    toggleItem: function(val){
     const valueSelectedIndex = this.selectedValues.findIndex(selVal => selVal.id === val.id );
     if(valueSelectedIndex >= 0 ){
       this.selectedValues.splice(valueSelectedIndex, 1);
       return
     }
      this.selectedValues.push(val);
    },
    isItemSelected: function (val){
      return this.selectedValues.findIndex(selVal => selVal.id === val.id) >= 0
    }
  },
  computed: {
    stepValues: function (){
      return this.stepData ? this.stepData.inputs : [];
    }
  },
  mounted() {
    this.selectedValues = this.passedStepData ? this.passedStepData.data.apiValue?? [] : [];
  }
}

</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.step-five{
  .edu-container{
    display: flex;
    align-items: center;
    .inputs-box{
      width: 100%;
      justify-content: center;
      margin-left: 40px;
      display: flex;
      flex-wrap: wrap;
      .edu-box{
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 150px;
        padding: 8px;
        margin-right: 10px;
        margin-bottom: 10px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12);
        background-color: #ffffff;
        font-size: 16px;
        font-family: 'Inter', serif;
        color: $dark-blue-gray-color;
        text-align: center;
        .edu-name, img{
          opacity: 0.6;
        }
        &:hover{
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.25);
          .edu-name, img{
            opacity: 1;
          }
        }

        img{
          width: 60px;
          height: 60px;
          margin-bottom: 10px;
        }
      }
      .selectedItem{
        .edu-name, img{
          opacity: 1;
        }
      }
    }
    .yes-box{
      opacity: 0.6;
      font-size: 18px;
      color: $dark-blue-gray-color;
      text-align: center;
      font-family: 'Josefin', serif;

    }
    .ouiIsActive{
      opacity: 1;
    }
  }
  .validate-btn{
    margin: 20px auto;
  }
}

@media screen and (max-width: 470px) {
  .step-five{
    .edu-container {
      display: block;

      .inputs-box {
        margin: 15px 0 0 0;
      }
    }
  }
}
</style>