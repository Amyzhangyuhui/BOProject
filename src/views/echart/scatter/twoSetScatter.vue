<template xmlns:float="http://www.w3.org/1999/xhtml" xmlns:display="http://www.w3.org/1999/xhtml">
  <div id="chart">
    <div id="scatter_echartContainer" style="width:500px; height:500px" float:right display:inline></div>
  </div>
</template>

<script>
import echarts from 'echarts';

import scatterconfig from "@/views/config/scatter/scatterconfig.js";
import scatterSeries from "@/views/config/scatter/scatterSeries.js";
export default {
  name: 'chart',
  data() {
    return {
      option:["a","b","c","d","e","f"],
      values_1: [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
      values_2: [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]],
      values_3: [[44026,81.8,23968973,'Australia',2019],[43494,81.7,35939927,'Canada',2019],[13234,76.9,1376048943,'China',2019],[21561,78.5,11389562,'Cuba',2019],[32423,80.8,5503457,'Finland',2019],[35699,81.9,64395345,'France',2019],[46853,81.1,80688545,'Germany',2019],[42562,82.8,329425,'Iceland',2019],[5233,66.8,1311050527,'India',2019],[36562,83.5,126573481,'Japan',2019],[7890,71.4,25155317,'North Korea',2019],[34613,80.7,50293439,'South Korea',2019],[33486,80.6,4528526,'New Zealand',2019],[65604,81.6,5210967,'Norway',2019],[24577,77.3,38611794,'Poland',2019],[23348,73.13,143456918,'Russia',2019],[19230,76.5,78665830,'Turkey',2019],[38645,81.4,64715810,'United Kingdom',2019],[55654,79.1,321773631,'United States',2019]],


    }
  },
  mounted() {

  // 基于准备好的dom，初始化echarts实例
  var myChart_scatter = echarts.init(document.getElementById('scatter_echartContainer'));

    var optionSchema = scatterconfig.getOptionConfig();
    optionSchema.series.push(scatterSeries.getScatterSeries());
    optionSchema.series.push(scatterSeries.getScatterSeries());
    optionSchema.series[0].data = this.values_1;
    optionSchema.series[1].data = this.values_2;
    optionSchema.series[0].name = "values_1";
    optionSchema.series[1].name = "values_2";
//    optionSchema.xAxis.data = this.option;

    // 绘制图表
    myChart_scatter.setOption(optionSchema);

  }
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
