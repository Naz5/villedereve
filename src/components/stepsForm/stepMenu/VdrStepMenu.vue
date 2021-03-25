<template>
<div v-if="passedSteps && passedSteps.length" class="vdr-step-menu" :class="{rowDirection: rowDirection, resultingStepMenu: !currentStep}">
  <div v-for="(step, index) in passedSteps" :key="index">
    <div
        v-if="showMenuItem(step.id)"
        @click=" $emit('goBack', step.id)"
        class="step-menu-item"
        :class="{activeMenuItem: !currentStep || currentStep.id === step.id}"
    >
      <img :src="require(`@/assets/menuIcons/${step.id}.svg`)" alt="menuIcon">
      <div v-if="step.data.shortTitle" class="step-short-name">{{ step.data.shortTitle }}</div>
      <div v-if="step.data.shortValue" class="step-value">{{step.data.shortValue}}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "VdrStepMenu",
  props: {
  rowDirection: {
    type: Boolean,
    default: false
  },
    passedSteps: {
      type: Array,
      default: null
    },
    currentStep: {
      type: Object,
      default: null
    }
  },
    methods: {
      showMenuItem(stepId){
        return  stepId !== 'screen_filtre'
      }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables";

.vdr-step-menu{
.step-menu-item{
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.6;
  cursor: pointer;
  justify-content: center;
  margin-bottom: 20px;
  color: $dark-blue-gray-color;
  font-family: 'Inter', serif;
  text-align: center;
  .step-short-name{
    font-size: 8px;
  }
  .step-value{
    font-size: 10px;
    font-weight: bold;
  }
  img{
    width: 24px;
    height: 24px;
    margin-bottom: 3px;
  }
}
.activeMenuItem{
  opacity: 1;
}
}

.rowDirection{
  display: flex;
  flex-wrap: wrap;
  margin: 25px auto;
  width: 85%;
  justify-content: center;
  .step-menu-item{
    margin-right: 20px;
    width: 100px;
  }
}

.resultingStepMenu{
  margin: 15px 0;
  width: auto;
  justify-content: normal;
  .step-menu-item{
    margin: 0 1px 10px 0;
    width: 80px;
  }
}
</style>