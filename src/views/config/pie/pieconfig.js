var myfunction = {
  getOptionConfig: function() {
    var pieconfig = {
      // color: ['#006699', '#17273B', '#e5323e'],
      title: {
        text: 'pie ECharts',
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
        show:false,
        data: null
      },
      yAxis: {
        show:false,
      },
      series: []
    }
    return pieconfig;
  }
}

export default myfunction




