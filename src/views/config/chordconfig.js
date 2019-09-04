let chordconfig = {
    radius : ['65%', '75%'],
    center : ['50%', '50%'],
    padding : 2,
    sort : 'none', // can be 'none', 'ascending', 'descending'
    sortSub : 'none', // can be 'none', 'ascending', 'descending'
    startAngle : 90,
    clockWise : false,
    showScale : false,
    showScaleText : false,
    itemStyle : {
      normal : {
        label : {
          show : true
          // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
        },
        lineStyle : {
          width : 0,
          color : '#000'
        },
        chordStyle : {
          lineStyle : {
            width : 1,
            color : '#666'
          }
        }
      },
      emphasis : {
        lineStyle : {
          width : 0,
          color : '#000'
        },
        chordStyle : {
          lineStyle : {
            width : 2,
            color : '#333'
          }
        }
      }
    }
}
