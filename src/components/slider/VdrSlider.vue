<template>
  <div class="vdr-slider">
    <div class="min-slider-val">
      <slot name="minSliderTemplate"></slot>
    </div>
    <div class="vue-slider-container">
      <VueSlider
          v-model="value"
          :data="sliderData"
          :data-value="'value'"
          :marks="false"
          :tooltip="'always'"
          :tooltip-placement="'bottom'"
          :tooltip-formatter="formatter"
      />
    </div>
    <div class="max-slider-val">
      <slot name="maxSliderTemplate"></slot>
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
name: "VdrSlider",
components: {
  VueSlider
},
  props: {
    sliderData: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      value: null,
      formatter: v => {
        console.log(v)
        const currentValue = this.sliderData.find(item => item.value === v )
        if(!currentValue) return
       return  v === this.sliderData[0].value || v === this.sliderData[this.sliderData.length - 1].value ?
           '' : currentValue.text
      },
    }
  },
  watch: {
  value: function (val){
    this.$emit('valueChanged', val)
  }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.vdr-slider{
  display: flex;
  .vue-slider-container{
    width: 100%;
  }
  .min-slider-val, .max-slider-val{
    min-width: 120px;
    color: $dark-blue-gray-color;
    font-size: 18px;
    font-family: 'Josefin', serif;
  }
  .min-slider-val{
    margin-right: 10px;
  }
  .max-slider-val{
    margin-left: 10px;
  }

}
::v-deep .vue-slider-dot-handle{
  background: $bright-blue-color;
  border-radius: 0;
  box-shadow: none;
  width: 14px;
  &:after{
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 6px solid $bright-blue-color;
    top: 96.5%;
  }
}

::v-deep .vue-slider-rail{
  background-color: rgba(95, 150, 240, 0.4);;
}

::v-deep .vue-slider-process{
  background-color: $bright-blue-color;
}

::v-deep .vue-slider-dot-tooltip-inner {
  color: $dark-blue-gray-color;
  font-size: 16px;
  font-family: 'Inter', serif;
  border-color: transparent;
  background-color: transparent;
}

@media screen and (max-width: 830px){
  .vdr-slider{
    .min-slider-val, .max-slider-val{
      min-width: auto;
      font-size: 14px;
      text-align: center;
    }
  }
  ::v-deep .vue-slider-dot-tooltip-inner{
    font-size: 12px;
  }
}

</style>