<template>
  <div class="vdr-city-select-box">
    <vSelect
        :options="paginated"
        v-model = "value"
        placeholder = "Code Postal"
        :filterable="false"
        :label="'search'"
        @open="onOpen"
        @close="onClose"
        @search="onSearch"
    >
      <template #option="{ nom_riche, code_postal }">
        <div>{{code_postal}}, {{nom_riche}}</div>
      </template>
      <template #selected-option="{ nom_riche, code_postal }">
        <div style="font-family: 'Inter', serif; font-size: 16px; color: #2D4770;">{{truncateSelectedValue(`${code_postal}, ${nom_riche}`)}}</div>
      </template>
      <template #list-footer>
        <li ref="load" class="loader" v-show="hasNextPage">
          Loading more options...
        </li>
      </template>
    </vSelect>
  </div>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import {truncateWithDots} from '@/helpers.js';
import cities from '../../jsons/cities.json';
export default {
  name: "VdrInfiniteSelectBox",
  components: {
    vSelect
  },
  props: {
    selectedValue: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    observer: null,
    value: null,
    limit: 10,
    search: ''
  }),
  mounted () {
    this.$refs["mySelect"].open = false;
    this.observer = new IntersectionObserver(this.infiniteScroll);
  },
  computed: {
    filtered () {
      return cities.filter(city => city.search.includes(this.search));
    },
    paginated () {
      return this.filtered.slice(0, this.limit);
    },
    hasNextPage () {
      return this.paginated.length < this.filtered.length;
    },
  },
  methods: {
    onSearch(query){
      const dropDown = document.querySelector('.vs__dropdown-menu');

        dropDown.style.visibility = query.length >=3 ? 'visible' : 'hidden'
      this.search = query
    },
    truncateSelectedValue(val){
      return truncateWithDots(val, 15)
    },
    async onOpen () {
      if (this.hasNextPage) {
        await this.$nextTick();
        this.observer.observe(this.$refs.load)
      }
    },
    onClose () {
      this.observer.disconnect();
    },
    async infiniteScroll ([{isIntersecting, target}]) {
      if (isIntersecting) {
        const ul = target.offsetParent;
        const scrollTop = target.offsetParent.scrollTop;
        this.limit += 10;
        await this.$nextTick();
        ul.scrollTop = scrollTop;
      }
    }
  },
  watch: {
    value: function (){
      this.$emit('valueChanged', this.value);
    }
  }
}
</script>

<style lang="scss" scoped>
.vdr-city-select-box{
  ::v-deep .v-select>div{
    width: 200px;
    background: #FFFFFF;
    box-shadow: inset 2px 2px 10px rgba(174, 174, 174, .25);
    outline: none;
    padding-left: 20px;
    border-radius: 30px;
    height: 55px;
    border-color: transparent;
    input::placeholder {
      color: rgba(45, 71, 112, 0.6);
      font-family: 'Inter', serif;
      font-size: 16px;
    }
    .vs__actions{
      display: none;
    }
  }

  ::v-deep .v-select{
    .vs__dropdown-menu{
     min-width: 250px;
      visibility: hidden;
    }
    .vs__selected{
      position: absolute;
      top: 11px;
    }
  }

  .loader {
    text-align: center;
    color: #bbbbbb;
  }
}
</style>