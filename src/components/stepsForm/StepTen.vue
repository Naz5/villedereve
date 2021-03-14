<template>
<div class="step-ten">
  <div class="inputs-box">
    <div class="extra-filter">
      <img src="../../assets/stepTen/wheat.svg" alt="">
      <div>Je suis très sensible aux allergies
      </div>
    </div>
    <div class="extra-filter">
      <img src="../../assets/stepTen/wheat.svg" alt="">
      <div>Je suis très sensible aux allergies
      </div>
    </div>
    <div class="extra-filter">
      <img src="../../assets/stepTen/wheat.svg" alt="">
      <div>Je suis très sensible aux allergies
      </div>
    </div>
    <div class="extra-filter">
      <img src="../../assets/stepTen/wheat.svg" alt="">
      <div>Je suis très sensible aux allergies
      </div>
    </div>
    <div class="extra-filter">
      <img src="../../assets/stepTen/wheat.svg" alt="">
      <div>Je suis très sensible aux allergies
      </div>
    </div>
    <div class="extra-filter">
      <img src="../../assets/stepTen/wheat.svg" alt="">
      <div>Je suis très sensible aux allergies
      </div>
    </div>
  </div>
  <VdrValidateBtn class="validate-btn"/>
</div>
</template>

<script>

import VdrValidateBtn from "@/components/validateBtn/VdrValidateBtn";

export default {
name: "StepTen",
components:{
  VdrValidateBtn
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

      img{
        width: 45px;
        height: 45px;
        margin-right: 10px;
      }
    }
  }
  .validate-btn{
    margin: 20px auto 0 auto;
  }
}
</style>