var myfunction = {
  getOptionConfig: function() {
    var scatterconfig = {
      // color: ['#006699', '#17273B', '#e5323e'],
      title: {
        text: 'scatter ECharts',
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
    return scatterconfig;
  }
}

export default myfunction




