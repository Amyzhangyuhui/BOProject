let echartconfig = {
    valueAxis:{
      position: 'left',
      nameLocation: 'end',
      nameTextStyle: {},
      boundaryGap: [0, 0],
      splitNumber: 5,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#48b',
          width: 2,
          type: 'solid'
        }
      },
      axisTick: {
        show: false,
        inside : false,
        length :5,
        lineStyle: {
          color: '#333',
          width: 1
        }
      },
      axisLabel: {
        show: true,
        rotate: 0,
        margin: 8,
        // formatter: null,
        textStyle: {
          color: '#333'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['#ccc'],
          width: 1,
          type: 'solid'
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']
        }
      }
    },
    theme:{
      backgroundColor: 'rgba(0,0,0,0)',
      color: ['#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed',
        '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0',
        '#1e90ff','#ff6347','#7b68ee','#00fa9a','#ffd700',
        '#6699FF','#ff6666','#3cb371','#b8860b','#30e0e0'],
      title: {
        x: 'left',
        y: 'top',
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#ccc',
        borderWidth: 0,
        padding: 5,
        itemGap: 10,
        textStyle: {
          fontSize: 18,
          fontWeight: 'bolder',
          color: '#333'
        },
        subtextStyle: {
          color: '#aaa'
        }
      }
    },
    legend: {
      orient: 'horizontal',
      x: 'center',
      y: 'top',
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: '#ccc',
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      itemWidth: 20,
      itemHeight: 14,
      textStyle: {
        color: '#333'
      }
    },
    dataRange: {
      orient: 'vertical',
      x: 'left',
      y: 'bottom',
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: '#ccc',
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      itemWidth: 20,
      itemHeight: 14,
      splitNumber: 5,
      color:['#1e90ff','#f0ffff'],
      textStyle: {
        color: '#333'
      }
    },
    toolbox: {
      orient: 'horizontal',
      x: 'right',
      y: 'top',
      color : ['#1e90ff','#22bb22','#4b0082','#d2691e'],
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: '#ccc',
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      itemSize: 16,
      featureImageIcon : {},
      featureTitle : {
        mark : '辅助线开关',
        markUndo : '删除辅助线',
        markClear : '清空辅助线',
        dataZoom : '区域缩放',
        dataZoomReset : '区域缩放后退',
        dataView : '数据视图',
        lineChart : '折线图切换',
        barChart : '柱形图切换',
        restore : '还原',
        saveAsImage : '保存为图片'
      }
    },
    tooltip: {
      trigger: 'item',
      showDelay: 20,
      hideDelay: 100,
      transitionDuration : 0.4,
      backgroundColor: 'rgba(0,0,0,0.7)',
      borderColor: '#333',
      borderRadius: 4,
      borderWidth: 0,
      padding: 5,
      axisPointer : {
        type : 'line',
        lineStyle : {
          color: '#48b',
          width: 2,
          type: 'solid'
        },
        shadowStyle : {
          width: 'auto',
          color: 'rgba(150,150,150,0.3)'
        }
      },
      textStyle: {
        color: '#fff'
      }
    },
    dataZoom: {
      orient: 'horizontal',
      backgroundColor: 'rgba(0,0,0,0)',
      dataBackgroundColor: '#eee',
      fillerColor: 'rgba(144,197,237,0.2)',
      handleColor: 'rgba(70,130,180,0.8)'
    },
    grid: {
      x: 80,
      y: 60,
      x2: 80,
      y2: 60,
      backgroundColor: 'rgba(0,0,0,0)',
      borderWidth: 1,
      borderColor: '#ccc'
    },
    categoryAxis: {
      position: 'bottom',
      nameLocation: 'end',
      boundaryGap: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#48b',
          width: 2,
          type: 'solid'
        }
      },
      axisTick: {
        show: true,
        interval: 'auto',
        inside : false,
        length :5,
        lineStyle: {
          color: '#333',
          width: 1
        }
      },
      axisLabel: {
        show: true,
        interval: 'auto',
        rotate: 0,
        margin: 8,
        textStyle: {
          color: '#333'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['#ccc'],
          width: 1,
          type: 'solid'
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']
        }
      }
    }
}
