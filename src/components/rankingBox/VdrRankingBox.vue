<template>
  <div class="vdr-ranking-box">
    <div class="info">
      <div><img :src="require(`@/assets/${imgFolder}/${data.id}.svg`)" alt="forest"></div>
      <div class="name">{{ data.text }}</div>
    </div>
    <div class="ranking">
    <span v-for="i in 5"
          :key="i"
          @mouseover="hoverStar(i)"
          @mouseleave="leaveStar()"
          @click="rankStar(i)"
          :class="`rank-star ${data.id}-star`"></span>
    </div>
  </div>
</template>

<script>
export default {
name: "VdrRankingBox",
  props: {
    data: {
      type: Object,
      default: null
    },
    imgFolder: {
      type: String,
      default: ''
    }
  },
  methods:{
    hoverStar: function (i){
      const rankStars = Array.from(document.getElementsByClassName(`${this.data.id}-star`));
      rankStars.map((star, index) => {
        if(index <= i-1){
          star.classList.add('rank-star-hovered')
        }
        else if(star.classList.contains('rank-star-hovered')){
          star.classList.remove('rank-star-hovered')
        }
      })

    },
    leaveStar: function (){
      const rankStars = Array.from(document.getElementsByClassName(`${this.data.id}-star`));
      rankStars.map((star) => {
        if(star.classList.contains('rank-star-hovered')){
          star.classList.remove('rank-star-hovered')
        }
      })

    },
    rankStar: function (i){
      this.$emit('rankItem', i)
      const rankStars = Array.from(document.getElementsByClassName(`${this.data.id}-star`));
      rankStars.map((star, index) => {
        if(index <= i-1){
          star.classList.add('rank-star-clicked')
        }
        else if(star.classList.contains('rank-star-clicked')){
          star.classList.remove('rank-star-clicked')
        }
      })

    }
  },
  mounted() {
  this.rankStar(this.data.rank)
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.vdr-ranking-box{
  width: 202px;
  height: 85px;
  display: flex;
  padding: 8px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12);
  background-color: #ffffff;

  .info{
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .name{
      color: $dark-blue-gray-color;
      font-size: 12px;
      font-family: 'Inter', serif;
      text-align: center;
    }
  }
  .ranking{
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
    .rank-star:after{
      content: "\2606";
      font-size: 20px;
      font-weight: bold;
      color: gold;
      margin-right: 1px;
      cursor: pointer;
    }
    .rank-star-hovered:after, .rank-star-clicked:after{
      content: "\2605";
    }
  }
}
</style>