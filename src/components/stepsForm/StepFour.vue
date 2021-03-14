<template>
<div v-if="stepValues.length" class="step-four">
  <div
      v-for="(stepValue, index) in stepValues"
      :key="index"
      @click="selectItem(stepValue)"
      :class="{selectedItem: isItemSelected(stepValue)}"
      class="distance-card">
    <img :src="require(`@/assets/stepFour/${stepValue.value}.svg`)" alt="maps-and-flags">
    <div class="distance-name">{{stepValue.text}}</div>
  </div>
</div>
</template>

<script>
export default {
name: "StepFour",
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
      selectedValue: null
    }
  },
  methods: {
    selectItem(val){
      this.selectedValue = val;
      const data = {
        apiValue: this.selectedValue,
        shortTitle: null,
        shortValue: null
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
  },
  mounted() {
    this.selectedValue = this.passedStepData ? this.passedStepData.data.apiValue : null;
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.step-four{
  display: flex;
  justify-content: center;
  .distance-card{
    cursor: pointer;
    margin-right: 15px;
    min-width: 26%;
    height: 218px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12);
    background-color: #ffffff;
    .distance-name, img{
      opacity: 0.6;
    }
    &:hover{
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.25);
      .distance-name, img{
        opacity: 1;
      }
    }
    .distance-name{
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
  .step-four{
    flex-wrap: wrap;
    .distance-card{
      width: 215px;
      height: 145px;
      padding: 10px;
      margin-bottom: 15px;
      img{
        width: 55px;
        height: 55px;
      }
      .distance-name{
        font-size: 13px;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .step-four{
    .distance-card{
      width: 153px;
      height: 121px;
      img{
        width: 35px;
        height: 35px;
      }
      .distance-name{
        font-size: 9px;
      }
    }
  }
}
</style>