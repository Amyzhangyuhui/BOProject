var myfunction = {
  getBarSeries: function() {
    var Seriesconfig = {
      name: '销量',
      type: 'bar',
      data: null,
      barMinHeight: 0,
      barGap: '30%',
      barCategoryGap: '20%',
      itemStyle: {
        normal: {
          barBorderColor: '#fff',
          barBorderRadius: 0,
          barBorderWidth: 1,
          label: {
            show: false
          }
        },
        emphasis: {
          barBorderColor: 'rgba(0,0,0,0)',
          barBorderRadius: 0,
          barBorderWidth: 1,
          label: {
            show: false
          }
        }
      }
    }
    return Seriesconfig;
  }
}

export default myfunction




