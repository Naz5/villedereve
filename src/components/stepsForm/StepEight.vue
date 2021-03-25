<template>
  <div v-if="stepValues" class="step-eight">
    <div class="weather-slider">
      <VdrSlider
          ref="vdrSlider"
          :sliderData="stepValues"
          @valueChanged="(val) => this.selectedValue = val"
          :selectedValue="selectedValue"
      >
        <template v-slot:minSliderTemplate>
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;min-width: 120px;">
            <img style="margin-bottom: 5px;" src="../../assets/stepEight/rainy.svg" alt="rainy">
            <div style=" font-family: 'Inter', serif; text-align: center">{{ stepValues[0].text }}</div>
          </div>
        </template>
        <template v-slot:maxSliderTemplate>
          <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;min-width: 120px;">
            <img style="margin-bottom: 5px;" src="../../assets/stepEight/sun.svg" alt="sun">
            <div  style=" font-family: 'Inter', serif; text-align: center">{{ stepValues[stepValues.length-1].text}}</div>
          </div>
        </template>
      </VdrSlider>
    </div>
    <div @click="validateItem">
      <VdrValidateBtn class="valid-btn"/>
    </div>
  </div>
</template>

<script>
import VdrValidateBtn from "@/components/validateBtn/VdrValidateBtn";
import VdrSlider from "@/components/slider/VdrSlider";
export default {
name: "StepEight",
components: {
    VdrSlider,
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
      selectedValue: null
    }
  },
  methods: {
    validateItem(){
      const apiValue = this.stepValues.find(val => val.value === this.selectedValue) ?? null;

      const data = {
        apiValue,
        shortTitle: this.stepData['short_title'],
        shortValue: apiValue ? apiValue.text : null
      }

      this.$emit('nextStep', this.stepData['next_screen'], data)
    },
  },
  computed: {
    stepValues: function (){
      return this.stepData ? this.stepData.inputs[0].values : null;
    }
  },
  mounted() {
    const initValue = this.passedStepData ?
        this.passedStepData.data.apiValue ?
            this.passedStepData.data.apiValue.value: this.stepValues[0].value :
        this.stepValues[0].value;
    this.selectedValue = initValue;
    this.$refs.vdrSlider.value = initValue;
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.step-eight{
.weather-slider{
  margin: 50px 0;
}
.valid-btn{
  margin: 0 auto 70px auto;
}
  .slider-limits{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .text{
      font-size: 16px;
      text-align: center;
      font-family: 'Inter', serif;
      color: $dark-blue-gray-color;
    }
  }
}

@media screen and (max-width: 830px){
  .step-eight{
  .weather-slider{
    margin: 60px 0;
  }
  .valid-btn{
    margin: 0 auto;
  }
}
}
</style>