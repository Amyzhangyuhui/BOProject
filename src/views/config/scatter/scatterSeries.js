var myfunction = {
  getScatterSeries: function() {
    let scatterconfig= {
      name: '销量',
      type: 'scatter',
      data: null,
      itemStyle: {
        normal: {
          label: {
            show: false
          },
          lineStyle: {
            width: 2,
            type: 'solid',
            shadowColor : 'rgba(0,0,0,0)',
            shadowBlur: 5,
            shadowOffsetX: 3,
            shadowOffsetY: 3
          }
        },
        emphasis: {
          label: {
            show: false
          }
        }
      },
      // symbolSize: 2,
      showAllSymbol: false
    }
    return scatterconfig;
  }
}

export default myfunction
