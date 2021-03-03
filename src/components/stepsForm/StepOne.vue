<template>
<div class="step-one">
  <div class="residence-card">
    <img src="../../assets/stepOne/cottage.svg" alt="cottage">
    <div class="residence-name">La résidence secondaire de vos rèves</div>
  </div>
  <div class="residence-card">
    <img src="../../assets/stepOne/resident.svg" alt="resident">
    <div class="residence-name">Votre nouvelle résidence principale</div>
  </div>
  <div class="residence-card">
    <img src="../../assets/stepOne/vacation.svg" alt="vacation">
    <div class="residence-name">La maison de vos vacances</div>
  </div>
</div>
</template>

<script>
export default {
name: "StepOne"
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.step-one{
  display: flex;
  justify-content: center;
  .residence-card{
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
}

@media screen and (max-width: 750px) {
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