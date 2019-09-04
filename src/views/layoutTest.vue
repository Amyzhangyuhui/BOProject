<template>
  <grid-layout
    :layout="layout"
    :auto-size="true"
    :col-num="100"
    :row-height="50"
    :max-rows="100"
    :is-draggable="true"
    :is-resizable="true"
    :vertical-compact="false"
    :margin="[10, 10]"
    :use-css-transforms="true">

    <grid-item v-for="item in layout" :key="item.i"
               :x="item.x"
               :y="item.y"
               :w="item.w"
               :h="item.h"
               :i="item.i"
               @resize="resizeEvent"
               @move="moveEvent"
               @resized="resizedEvent"
               @moved="movedEvent">

      <component v-bind:is="item.Com" ></component>
    </grid-item>
  </grid-layout>
</template>

<script>
  import Vue from 'vue'
  import VueGridLayout from 'vue-grid-layout'
  import dynamicSetBar from '@/views/echart/bar/dynamicSetBar.vue'
  import dynamicSetLine from '@/views/echart/line/dynamicSetLine.vue'
  import dynamicSetScatter from '@/views/echart/scatter/dynamicSetScatter.vue'
  import dynamicSetPie from '@/views/echart/pie/dynamicSetPie.vue'
  import dynamicHandsontable from '@/views/Handsontable/dynamicHandsontable.vue'

  Vue.use(VueGridLayout)

  var testLayout = [];

  var GridLayout = VueGridLayout.GridLayout;
  var GridItem = VueGridLayout.GridItem;

  export default {
    name: 'layoutTest',
    components: {
      GridLayout,
      GridItem,
      dynamicSetBar,
      dynamicSetLine,
      dynamicSetScatter,
      dynamicSetPie,
      dynamicHandsontable
    },
    data () {
      return {
        layout: testLayout,
        newX:0,
        newY:0,
        infor:null
      }
    },
    mounted () {
      var pageconfig=[];
      this.$axios.get("static/config.json")
        .then((response) =>{
          for( var i = 0; i < response.data.BOChartShow.length; i++ ) {
            var temp=response.data.BOChartShow[i].layoutparas;
            temp["Com"] = response.data.BOChartShow[i].Component;
            temp["id"] = response.data.BOChartShow[i].ComponentID;
            pageconfig.push(temp);
          }
          this.layout = pageconfig;
        })
    },
    methods:{
      moveEvent: function(i, newX, newY,e){
      },

      resizeEvent: function(i, newH, newW){
      },

      movedEvent: function(i, newX, newY,e){
      },

      resizedEvent: function(i, newH, newW, newHPx, newWPx){
      }
    }
  }
</script>


<style scoped>
  .vue-grid-layout {
    position: relative;
    width:2000px;
    height:2000px;

  }
  .vue-grid-layout>div {
    position: absolute;
    background: #FFFFCC;
  }
</style>

