var myfunction = {
  getPieSeries: function() {
    let pieconfig = {
      name: '销量',
      type: 'pie',
      data: null,
      label: {
        normal: {
          show: true,
          textStyle: {
            fontWeight: 700,
            fontSize: 13 //文字的字体大小
          },
          formatter: '{c}: ({d}%)',
        }
      },
      center : ['50%', '50%'],
      radius : [0, '75%'],
      clockWise : false,
      startAngle: 90,
      minAngle: 0,
      selectedOffset: 10,
      itemStyle: {
        normal: {
          // color: 各异,
          borderColor: '#fff',
          borderWidth: 1,
          label: {
            show: true,
            position: 'outer'
          },
          labelLine: {
            show: true,
            length: 20,
            lineStyle: {
              // color: 各异,
              width: 1,
              type: 'solid'
            }
          }
        },
        emphasis: {
          borderColor: 'rgba(0,0,0,0)',
          borderWidth: 1,
          label: {
            show: false
          },
          labelLine: {
            show: false,
            length: 20,
            lineStyle: {
              width: 1,
              type: 'solid'
            }
          }
        }
      }
    }
    return pieconfig;
  }
}

export default myfunction
