let islandconfig = {
  island: {
    r: 15,
    calculateStep: 0.1  // 滚轮可计算步长 0.1 = 10%
  },
  markPoint : {
    symbol: 'pin',         // 标注类型
    symbolSize: 10,        // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
    //symbolRotate : null, // 标注旋转控制
    itemStyle: {
      normal: {
        // color: 各异，
        // borderColor: 各异,     // 标注边线颜色，优先于color
        borderWidth: 2,            // 标注边线线宽，单位px，默认为1
        label: {
          show: true,
          position: 'inside' // 可选为'left'|'right'|'top'|'bottom'
          // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
        }
      },
      emphasis: {
        // color: 各异
        label: {
          show: true
          // position: 'inside'  // 'left'|'right'|'top'|'bottom'
          // textStyle: null     // 默认使用全局文本样式，详见TEXTSTYLE
        }
      }
    }
  }
}
