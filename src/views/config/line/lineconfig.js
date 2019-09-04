var myfunction = {
  getOptionConfig: function() {
    var lineconfig = {
      // color: ['#006699', '#17273B', '#e5323e'],
      title: {
        text: 'line ECharts',
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
    return lineconfig;
  }
}

export default myfunction




