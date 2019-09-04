<template xmlns:display="http://www.w3.org/1999/xhtml" xmlns:float="http://www.w3.org/1999/xhtml">
  <div id="chart">
    <div id="pie_echartContainer" style="width:500px; height:500px" float:right display:inline></div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import pieconfig from "@/views/config/pie/pieconfig.js";
  import pieSeries from "@/views/config/pie/pieSeries.js";
  export default {
    name: 'dynamicSetPie',
    data() {
      return {
        info: null,
        serviceURL:"http://127.0.0.1:8080/",
        paras:{
          ComponentID:"dynamicSetPie1",
          pageURL:"",
        },
      }
    },
    props: ['info'],
    methods: {
        prepareRequestURL: function(URL,paras){
          var reqURL = URL;
          reqURL = reqURL + "ComponentID" + "=" + paras["ComponentID"];
          reqURL = reqURL + "&&"+"pageURL" + "=" + paras["pageURL"];
          return reqURL;
        },
      getxAxis: function() {
        var reqestURL=this.serviceURL+'xAxis/Value?';
        reqestURL = this.prepareRequestURL(reqestURL,this.paras);
        return this.$axios.get(reqestURL);
      },

      getValue: function() {
        var reqestURL=this.serviceURL+'Data/Value?';
        reqestURL = this.prepareRequestURL(reqestURL,this.paras);
        return this.$axios.get(reqestURL);
      },

      getResponse: function(myChart_line, option_) {
        let option = option_;
        let myChart = myChart_line;

        this.$axios.all([this.getxAxis(), this.getValue()])
          .then(this.$axios.spread( (acct, perms) =>{
            // Both requests are now complete
            option = this.setxAxisConfig(option, acct.data);
          option = this.setDataConfig(option, perms.data);
          myChart.setOption(option);
        }));
      },

      setxAxisConfig(option, dataResult) {
        var strr = [];
        for(var i = 0; i < dataResult.length; i++) {
          strr.push(dataResult[i].value);
        }
        option.xAxis.data = strr;
        return option;
      },

      setDataConfig(option,dataResult){
        for (var i = 0; i < dataResult["data"].length; i++) {
          option.series.push(pieSeries.getPieSeries());
          var name = dataResult["data"][i].name;
          var data = dataResult["data"][i].data;
          option.series[i].name = name;
          option.series[i].data = data;
        }
        return option;
      },

      getOptionConfig: function() {
        this.info = pieconfig.getOptionConfig();
        let option = pieconfig.getOptionConfig();
        return option;
      },

      initFlow: function() {
      },

      initMyChart: function() {
        let option_ = this.getOptionConfig()
        //option_ = this.getxAxis(option_);
        // 基于准备好的dom，初始化echarts实例
        var myChart_line = echarts.init(document.getElementById('pie_echartContainer'));
        window.onresize = function () {
          myChart_line.resize();
        }
        var response = this.getResponse(myChart_line, option_);
      }
    },
    mounted() {
      this.initMyChart();
    },
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
