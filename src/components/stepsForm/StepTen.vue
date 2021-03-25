<template>
<div class="step-ten">
  <div class="inputs-box">
    <div
        v-for="(stepValue, index) in stepValues"
        :key="index"
        @click="toggleItem(stepValue)"
        :class="{selectedItem: isItemSelected(stepValue)}"
        class="extra-filter">
      <img :src="require(`@/assets/stepTen/${stepValue.id}.svg`)" alt="">
      <div class="filter-name">{{ stepValue.text }}</div>
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
name: "StepTen",
components:{
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


      this.$emit('nextStep', 'results',
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

.step-ten{
  .inputs-box{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .extra-filter{
      cursor: pointer;
      width: 202px;
      height: 85px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      margin-right: 10px;
      margin-bottom: 10px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12);
      background-color: #ffffff;
      color: $dark-blue-gray-color;
      font-family: 'Inter', serif;
      font-size: 12px;

      .filter-name, img{
        opacity: 0.6;
      }

      &:hover{
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.25);
        .filter-name, img{
          opacity: 1;
        }
      }
      }

    .selectedItem{
      .filter-name, img{
        opacity: 1;
      }
    }

      img{
        width: 45px;
        height: 45px;
        margin-right: 10px;
      }
    }
  .validate-btn{
    margin: 20px auto 0 auto;
  }
}
</style>