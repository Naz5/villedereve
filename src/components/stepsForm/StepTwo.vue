<template>
  <div v-if="stepValues" class="step-two">
    <div class="hours-slider">
      <VdrSlider ref="vdrSlider"
                 :sliderData="stepValues"
                 @valueChanged="(val) => this.selectedValue = val"
                 :selectedValue="selectedValue"
      >
        <template v-slot:minSliderTemplate>
          <div style="text-align: center">{{ stepValues[0].text }}</div>
        </template>
        <template v-slot:maxSliderTemplate>
          <div style="text-align: center">{{ stepValues[stepValues.length-1].text}}</div>
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
name: "StepTwo",
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
      selectedValue: null,
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

      this.$emit('nextStep', 'screen_code_postal', data)
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
.step-two{
  .hours-slider{
    margin: 50px 0;
  }
  .valid-btn{
    margin: 0 auto 70px auto;
  }
}

@media screen and (max-width: 830px){
  .step-two{
    .hours-slider{
      margin: 20px 0;
    }
    .valid-btn{
      margin: 0 auto;
    }
  }
}
</style>