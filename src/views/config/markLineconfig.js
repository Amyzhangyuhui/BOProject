let markLineconfig = {
  // 标线起始和结束的symbol介绍类型，如果都一样，可以直接传string
  symbol: ['circle', 'arrow'],
  // 标线起始和结束的symbol大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
  symbolSize: [2, 4],
  // 标线起始和结束的symbol旋转控制
  //symbolRotate : null,
  itemStyle: {
    normal: {
      // color: 各异,           // 标线主色，线色，symbol主色
      // borderColor: 随color,     // 标线symbol边框颜色，优先于color
      borderWidth: 2,          // 标线symbol边框线宽，单位px，默认为2
      label: {
        show: false,
        // 可选为 'start'|'end'|'left'|'right'|'top'|'bottom'
        position: 'inside',
        textStyle: {         // 默认使用全局文本样式，详见TEXTSTYLE
          color: '#333'
        }
      },
      lineStyle: {
        // color: 随borderColor, // 主色，线色，优先级高于borderColor和color
        // width: 随borderWidth, // 优先于borderWidth
        type: 'solid',
        shadowColor : 'rgba(0,0,0,0)', //默认透明
        shadowBlur: 5,
        shadowOffsetX: 3,
        shadowOffsetY: 3
      }
    },
    emphasis: {
      // color: 各异
      label: {
        show: false
        // position: 'inside' // 'left'|'right'|'top'|'bottom'
        // textStyle: null    // 默认使用全局文本样式，详见TEXTSTYLE
      },
      lineStyle : {}
    }
  }
}
