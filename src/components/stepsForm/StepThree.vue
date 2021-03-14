<template>
<div class="step-tree">
<div class="code-postal-input">
  <VdrCitySelectBox :selectedValue="selectedValue"
                    ref="citySelectBox"
                    @valueChanged="(val) => this.selectedValue = val"/>
</div>
  <div @click="validateItem">
    <VdrValidateBtn class="valid-btn"/>
  </div>
</div>
</template>

<script>
import VdrValidateBtn from "@/components/validateBtn/VdrValidateBtn";
import VdrCitySelectBox from "@/components/citySelectBox/VdrCitySelectBox";
export default {
name: "StepThree",
components: {
  VdrValidateBtn,
  VdrCitySelectBox
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
      const data = {
        apiValue: this.selectedValue,
        shortTitle: this.stepData['short_title'],
        shortValue: this.selectedValue['code_postal']
      }

      this.$emit('nextStep', this.stepData['next_screen'], data)
    },
  },
  mounted() {
    const initValue = this.passedStepData ? this.passedStepData.data.apiValue : null;
    this.selectedValue = initValue;
    this.$refs.citySelectBox.value = initValue;
  }
}
</script>
<style lang="scss" scoped>
@import "../../styles/variables";

.mob-prev-answers{
  margin-bottom: 10px;
}

.step-tree{
display: flex;
  align-items: center;
  justify-content: center;
  .code-postal-input{
    margin-right: 20px;
  }
}

@media screen and (max-width: 830px){
  .step-tree{
    .code-postal-input{
      input{
        width: 154px;
        height: 45px;
        input::placeholder {
          color: rgba(45, 71, 112, 0.6);
          font-family: 'Inter', serif;
          font-size: 14px;
        }
      }
    }
  }
}

@media screen and (max-width: 390px){
  .step-tree{
    flex-wrap: wrap;
    .code-postal-input{
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
}
</style>