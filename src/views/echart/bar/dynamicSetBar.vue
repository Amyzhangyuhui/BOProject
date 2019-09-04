<template xmlns:display="http://www.w3.org/1999/xhtml" xmlns:float="http://www.w3.org/1999/xhtml">
  <div id="chart">
    <div id="bar_echartContainer" style="width:500px; height:500px" float:right display:inline></div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import barconfig from "@/views/config/Bar/barconfig.js";
  import barSeries from "@/views/config/Bar/barSeries.js";
  export default {
    name: 'dynamicSetBar',
    data() {
      return {
        info: null,
        serviceURL:"http://127.0.0.1:8080/",
        paras:{
          ComponentID:"dynamicSetBar1",
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
        //Frank：该Bar所依赖的业务数据对象BO的标识、后台服务URL、BO--VO的转换规则是getxAxis()所依赖的外部信息
        //后台服务基于该信息，提给给该Bar实例xAxis数据
        var reqestURL=this.serviceURL+'xAxis/Value?';
        reqestURL = this.prepareRequestURL(reqestURL,this.paras);
        return this.$axios.get(reqestURL);
      },
      getvalue: function() {
        //Frank：该Bar所依赖的业务数据对象BO的标识、后台服务URL、BO--VO的转换规则是getvalue()所依赖的外部信息
        //后台服务基于该信息，提给给该Bar实例Series数据
        var reqestURL=this.serviceURL+'Data/Value?';
        reqestURL = this.prepareRequestURL(reqestURL,this.paras);
        return this.$axios.get(reqestURL);
      },
      getResponse: function(myChart_line, option_) {
        let option = option_;
        let myChart = myChart_line;
        this.$axios.all([this.getxAxis(), this.getvalue()])
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
        // this.info = dataResult["data"];
        for (var i = 0; i < dataResult["data"].length; i++) {
          option.series.push(barSeries.getBarSeries());
          var name = dataResult["data"][i].name;
          var data = dataResult["data"][i].data;
          option.series[i].name = name;
          option.series[i].data = data;
        }
        return option;
      },

      /**
       *
       * @returns {*}
       * Frank：不同页面的不同Bar，该函数应该是一致的，不同的配置参数。但是在getOptionConfig 及 barconfig.getOptionConfig()函数实现中，都没有考虑不同页面的不同Bar实例的参数配置差异性、多样性
       * 在不同页面、不同区域的不同Bar实例，其参数配置、规则配置的多样性，由该页面该区域的该Bar实例的配置文件决定，并可以按照格式独立修改，而 getOptionConfig 及 barconfig.getOptionConfig()的代码本身不变化；也就是对于这些配置与规则的变化表现出鲁棒适应性
       * 外部输入的边界条件：1）具体哪个实例？即哪个页面的哪个组件实例； 2）该实例对应的参数配置；
       * 该Charts类型的Schema敏感性的配置信息，需要动态从后台对应该组件实例的配置信息动态获得
       * 对于每种类型的Charts，他的Schema敏感性的配置信息的种类是确定的，因此在该类Charts VUE组件的设计种，需要完成对于所有Schema敏感性的配置信息的动态获取；而后台服务需要按照APP、Page、ComponentID的路径，提供相应的动态配置信息
       * this.info = barconfig.getOptionConfig();
       */
      getOptionConfig: function() {
        this.info = barconfig.getOptionConfig();
        let option = barconfig.getOptionConfig();
        return option;
      },

      initFlow: function() {

      },

      initMyChart: function() {
        let option_ = this.getOptionConfig()
        var myChart_line = echarts.init(document.getElementById('bar_echartContainer'));
        window.onresize = function () {
          myChart_line.resize();
        }
        var response = this.getResponse(myChart_line, option_);
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
