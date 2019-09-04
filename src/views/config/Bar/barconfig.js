var myfunction = {
  getOptionConfig: function() {
      var barconfig = {
        color: ['#006699', '#17273B', '#e5323e'],
        title: {
          text: 'bar ECharts',
          x: 'center',
          textStyle: {
            "color": "#8ECBFF"
          },
        },
        legend: {
          left: 'right',
        },
        tooltip: {},
        xAxis: {
          data: null
        },
        yAxis: {},
        series: []
      }
      return barconfig;
    }
}

export default myfunction




