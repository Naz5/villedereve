<template>
  <div v-if="filterRanks.length" class="step-nine">
    <div class="priorities-container">
      <VdrRankingBox
          v-for="(relief, index) in filterRanks"
          :key="index"
          :imgFolder="'stepNine'"
          :data="relief"
          @rankItem="(rank) => {rankItem(index, rank)}"
      />
    </div>
      <VdrValidateBtn @validate="validateStep" class="validate-btn"/>
  </div>
</template>

<script>
import VdrRankingBox from "@/components/rankingBox/VdrRankingBox";
import VdrValidateBtn from "@/components/validateBtn/VdrValidateBtn";
import {cutRanks} from "@/helpers";

export default {
name: "StepNine",
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
      filterRanks: []
    }
  },
  methods: {
    rankItem: function (index, rank){
      this.filterRanks[index].rank = rank
    },
    validateStep: function (){
      const data = {
        apiValue: this.filterRanks,
        shortTitle: this.stepData['short_title'],
        shortValue: cutRanks(this.filterRanks)
      }

      this.$emit('nextStep', this.stepData['next_screen'], data)
    }
  },
  mounted(){
    if(this.passedStepData && this.passedStepData.data.apiValue){
      this.filterRanks =  this.passedStepData.data.apiValue;
      return
    }
    this.filterRanks = this.stepData.inputs.map(reliefRank => {
      reliefRank.rank = 0
      return reliefRank
    });
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.step-nine{
.priorities-container{
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