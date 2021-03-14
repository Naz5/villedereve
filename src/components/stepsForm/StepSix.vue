<template>
<div v-if="reliefRanks.length" class="step-six">
  <div class="relief-types-container">
    <VdrRankingBox
        v-for="(relief, index) in reliefRanks"
        :key="index"
        :imgFolder="'stepSix'"
        :data="relief"
        @rankItem="(rank) => {rankItem(index, rank)}"
    />
  </div>
  <div @click="validateStep">
    <VdrValidateBtn class="validate-btn"/>
  </div>
</div>
</template>

<script>

import VdrRankingBox from "@/components/rankingBox/VdrRankingBox";
import VdrValidateBtn from "@/components/validateBtn/VdrValidateBtn";
import {cutRanks} from "@/helpers";

export default {
name: "StepSix",
components:{
  VdrRankingBox,
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
      reliefRanks: []
    }
  },
  methods: {
  rankItem: function (index, rank){
    this.reliefRanks[index].rank = rank
  },
    validateStep: function (){
      const data = {
        apiValue: this.reliefRanks,
        shortTitle: this.stepData['short_title'],
        shortValue: cutRanks(this.reliefRanks)
      }

      this.$emit('nextStep', this.stepData['next_screen'], data)
    }
  },
  mounted(){
  if(this.passedStepData && this.passedStepData.data.apiValue){
    this.reliefRanks =  this.passedStepData.data.apiValue;
    return
  }
    this.reliefRanks = this.stepData.inputs.map(reliefRank => {
      reliefRank.rank = 0
      return reliefRank
    });
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.step-six{
  .relief-types-container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    div{
      margin-right: 30px;
      margin-bottom: 20px;
    }
  }
  .validate-btn{
    margin: 20px auto 0 auto;
  }

}
</style>