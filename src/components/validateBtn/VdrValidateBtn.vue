<template>
<div class="vdr-validate-btn">Valider</div>
</template>

<script>
export default {
name: "VdrValidateBtn"
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.vdr-validate-btn{
  width: 190px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: $coral-color;
  font-size: 18px;
  border-radius: 30px;
  font-family: 'Josefin', serif;
  cursor: pointer;
}

@media screen and (max-width: 830px){
  .vdr-validate-btn{
    width: 154px;
    height: 45px;
    font-size: 14px;
  }
}
</style>