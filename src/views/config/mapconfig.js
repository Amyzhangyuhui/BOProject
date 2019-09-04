let mapconfig = {
  mapType: 'china',
  mapLocation: {
    x : 'center',
    y : 'center'
  },
  showLegendSymbol : true,
  itemStyle: {
    normal: {
      borderColor: '#fff',
      borderWidth: 1,
      areaStyle: {
        color: '#ccc'
      },
      label: {
        show: false,
        textStyle: {
          color: 'rgba(139,69,19,1)'
        }
      }
    },
    emphasis: {
      borderColor: 'rgba(0,0,0,0)',
      borderWidth: 1,
      areaStyle: {
        color: 'rgba(255,215,0,0.8)'
      },
      label: {
        show: false,
        textStyle: {
          color: 'rgba(139,69,19,1)'
        }
      }
    }
  }
}
