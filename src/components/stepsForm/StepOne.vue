<template>
<div v-if="stepValues" class="step-one">
  <div
      v-for="(stepValue, index) in stepValues"
      :key="index"
      @click="selectItem(stepValue)"
      :class="{selectedItem: isItemSelected(stepValue)}"
      class="residence-card">
    <img :src="require(`@/assets/stepOne/${stepValue.value}.svg`)" alt="cottage">
    <div class="residence-name">{{ stepValue.text }}</div>
  </div>
</div>
</template>

<script>

import {truncateWithDots} from "@/helpers";

export default {
name: "StepOne",
props: {
    stepData: {
      type: Object,
      default: null
    }
  },
  data: function ()  {
    return {
      selectedValue: null
    }
  },
  methods: {
  selectItem(val){
    this.selectedValue = val;
    const data = {
      apiValue: this.selectedValue,
      shortTitle: this.stepData['short_title'],
      shortValue: val ? truncateWithDots(val.text, 15) : null
    }

    this.$emit('nextStep', this.selectedValue['next_screen'], data)
  },
    isItemSelected: function (val){
      return this.selectedValue ? this.selectedValue.value === val.value : false
    }
  },
  computed: {
  stepValues: function (){
    return this.stepData ? this.stepData.inputs[0].values : null;
  }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.step-one{
  display: flex;
  justify-content: center;
  .residence-card{
    cursor: pointer;
    margin-right: 15px;
    height: 260px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12);
    background-color: #ffffff;
    .residence-name, img{
      opacity: 0.6;
    }
    &:hover{
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.25);
      .residence-name, img{
        opacity: 1;
      }
    }
    .residence-name{
      margin-top: 20px;
      font-family: 'Inter', serif;
      font-size: 16px;
      color: $dark-blue-gray-color;
      text-align: center;
    }
  }
  .selectedItem{
    .residence-name, img{
      opacity: 1;
    }
  }
}

@media screen and (max-width: 830px) {
  .step-one{
    flex-wrap: wrap;
    .residence-card{
      width: 215px;
      height: 145px;
      padding: 10px;
      margin-bottom: 15px;
      img{
        width: 55px;
        height: 55px;
      }
      .residence-name{
        font-size: 13px;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .step-one{
    .residence-card{
      width: 153px;
      height: 121px;
            img{
              width: 35px;
              height: 35px;
            }
            .residence-name{
              font-size: 9px;
            }
    }
  }
}
</style>