<template xmlns:float="http://www.w3.org/1999/xhtml" xmlns:display="http://www.w3.org/1999/xhtml">
  <div id="chart">
    <div id="bar_echartContainer" style="width:600px; height:600px" float:right display:inline></div>
  </div>
</template>

<script>
import echarts from 'echarts';

import barconfig from "@/views/config/Bar/barconfig.js";
import barSeries from "@/views/config/Bar/barSeries.js";
export default {
  name: 'chart',
  data() {
    return {
      option:["a","b","c","d","e","f"],
      values_1:[5, 20, 36, 10, 10, 20],
      values_2:[1, 17, 23, 21, 34, 53],
      values_3:[3, 56, 23, 45, 67, 34]
    }
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart_bar = echarts.init(document.getElementById('bar_echartContainer'));

    var optionSchema = barconfig.getOptionConfig();
    optionSchema.series.push(barSeries.getBarSeries());
    optionSchema.series.push(barSeries.getBarSeries());
    optionSchema.series.push(barSeries.getBarSeries());
    optionSchema.series[0].data = this.values_1;
    optionSchema.series[1].data = this.values_2;
    optionSchema.series[2].data = this.values_3;
    optionSchema.series[0].name = "values_1";
    optionSchema.series[1].name = "values_2";
    optionSchema.series[2].name = "values_3";
    optionSchema.xAxis.data = this.option;
    // 绘制图表
    myChart_bar.setOption(optionSchema);

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
