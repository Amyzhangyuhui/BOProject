<template xmlns:display="http://www.w3.org/1999/xhtml" xmlns:float="http://www.w3.org/1999/xhtml">
  <div id="chart">
    <div id="scatter_echartContainer" style="width:500px; height:500px" float:right display:inline></div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import scatterconfig from "@/views/config/scatter/scatterconfig.js";
  import scatterSeries from "@/views/config/scatter/scatterSeries.js";
  export default {
    name: 'dynamicSetScatter',
    data() {
      return {
        info: null,
        serviceURL:"http://127.0.0.1:8080/",
        paras:{
          ComponentID:"dynamicSetScatter1",
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
        this.info = reqestURL;
        reqestURL = this.prepareRequestURL(reqestURL,this.paras);
        return this.$axios.get(reqestURL);
      },

      getValue: function() {
        var reqestURL=this.serviceURL+'Data/Value?';
        reqestURL = this.prepareRequestURL(reqestURL,this.paras);
        return this.$axios.get(reqestURL);
      },

      getResponse: function(myChart_scatter, option_) {
        let option = option_;
        let myChart = myChart_scatter;

        this.$axios.all([this.getxAxis(), this.getValue()])
          .then(this.$axios.spread( (acct, perms) =>{
            // Both requests are now complete
            option = this.setxAxisConfig(option, acct.data);
            option = this.setDataConfig(option, perms.data);
            myChart.setOption(option);
      }));
      },

      setxAxisConfig(option, dataResult) {
        var xAxisInfor = dataResult["data"][0]["data"];
        var strr = [];
        for(var i = 0; i < xAxisInfor.length; i++) {
          strr.push(xAxisInfor[i]);
        }
        option.xAxis.data = strr;
        return option;
      },

      setDataConfig(option,dataResult){
        for (var i = 0; i < dataResult["data"].length; i++) {
          option.series.push(scatterSeries.getScatterSeries());
          var name = dataResult["data"][i].name;
          var data = dataResult["data"][i].data;
          option.series[i].name = name;
          option.series[i].data = data;
        }
        return option;
      },

      getOptionConfig: function() {
        this.info = scatterconfig.getOptionConfig();
        let option = scatterconfig.getOptionConfig();
        return option;
      },

      initFlow: function() {
      },

      initMyChart: function() {
        let option_ = this.getOptionConfig()
        //option_ = this.getxAxis(option_);
        // 基于准备好的dom，初始化echarts实例
        var myChart_scatter = echarts.init(document.getElementById('scatter_echartContainer'));
        window.onresize = function () {
          myChart_line.resize();
        }
        var response = this.getResponse(myChart_scatter, option_);
      }
    },
    mounted() {
      this.initMyChart()
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
