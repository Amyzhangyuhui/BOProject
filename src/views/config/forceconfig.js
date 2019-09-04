let forceconfig = {
    // 数据map到圆的半径的最小值和最大值
  minRadius : 10,
  maxRadius : 20,
  density : 1.0,
  attractiveness : 1.0,
  // 初始化的随机大小位置
  initSize : 300,
  // 向心力因子，越大向心力越大
  centripetal : 1,
  // 冷却因子
  coolDown : 0.99,
  // 分类里如果有样式会覆盖节点默认样式
  itemStyle: {
    normal: {
      // color: 各异,
      label: {
        show: false
        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
      },
      nodeStyle : {
        brushType : 'both',
        color : '#f08c2e',
        strokeColor : '#5182ab'
      },
      linkStyle : {
        strokeColor : '#5182ab'
      }
    },
    emphasis: {
      // color: 各异,
      label: {
        show: false
        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
      },
      nodeStyle : {},
      linkStyle : {}
    }
  }
}
