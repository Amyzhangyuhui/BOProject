var myfunction = {
  getLineSeries: function() {
    let lineconfig= {
      name: '销量',
      type: 'line',
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
      symbolSize: 2,
      showAllSymbol: false
    }
    return lineconfig;
  }
}

export default myfunction
