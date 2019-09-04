<template>
    <div id="table">
      <input type="button" name="button" id="button001" value="提交" onclick="test()"/>
      <input type="button" onclick="test()" value="点击">
      <HotTable id="dynamicHandsontable1" :settings="hotSettings"></HotTable>
    </div>
</template>

<script>

  import { HotTable } from '@handsontable/vue';
  import 'handsontable/dist/handsontable.full.css';
  export default {
    serviceURL:"",
    pageURL:"",
    ComponentID:"dynamicHandsontable1",
    data(){
      return{
        info : null,
        serviceURL:"http://127.0.0.1:8080/",
        paras:{
          ComponentID: "dynamicHandsontable1",
          pageURL: "",
        },
        hotSettings: {
          //定义数据
          data: [],
          //定义表结构
          colHeaders: [],
          //定义属性
          columns: [
            {},
            {},
            {},
            {
              colHeaders: '问题金额',
              type: 'numeric', //定义值的类型为数字类型
            }
          ],
          manualColumnFreeze: true, //手动固定列  ?
          manualColumnMove: true, //手动移动列
          manualRowMove: true,   //手动移动行
          manualColumnResize: true,//手工更改列距
          manualRowResize: true,//手动更改行距
          comments: true, //添加注释  ?
          mergeCells: [   //合并
            {row: 0, col: 1, rowspan: 3, colspan: 1},  //指定合并，从（1,1）开始行3列3合并成一格
            // {row: 3, col: 4, rowspan: 2, colspan: 2}
          ],
          contextMenu: {
            items: {
              "row_above": {
                name: '上方插入一行'
              },
              "row_below": {
                name: '下方插入一行'
              },
              "col_left": {
                name: '左方插入列'
              },
              "col_right": {
                name: '右方插入列'
              },
              "hsep1": "---------", //提供分隔线
              "remove_row": {
                name: '删除行',
              },
              "remove_col": {
                name: '删除列',
              },
              "make_read_only": {
                name: '只读',
              },
              "borders": {
                name: '表格线'
              },
              "copy": {
                name: '复制'
              },
              "cut": {
                name: '剪切'
              },
              "hsep2": "---------",
              "commentsAddEdit": {
                name: '添加备注',
              },
              "commentsRemove": {
                name: '取消备注',
              },
              "freeze_column": {
                name: '固定列',
              },
              "unfreeze_column": {
                name: '取消列固定',
              },
            }
          },
        }
      }
    },

    methods: {
      prepareRequestURL: function(URL,paras){
        var reqURL = URL;
        reqURL = reqURL + "ComponentID" + "=" + paras["ComponentID"];
        reqURL = reqURL + "&&"+"pageURL" + "=" + paras["pageURL"];
        return reqURL;
      },

      getTableHeaders: function() {
        var reqestURL=this.serviceURL+'HotTable/Headers?';
        reqestURL = this.prepareRequestURL(reqestURL,this.paras);
        return this.$axios.get(reqestURL);
      },

      getTableData: function() {
        var reqestURL=this.serviceURL+'Data/Value?';
        reqestURL = this.prepareRequestURL(reqestURL,this.paras);
        return this.$axios.get(reqestURL);
      },

      setHeaders: function(resultData) {
        var temp_header = resultData["data"][0]["data"]
        this.hotSettings.colHeaders = temp_header
      },

      setData: function(result) {
        var resultData = result["data"];
        var tempData = [];
        var tempDataLine="";
        for (var i = 0; i < resultData.length; i++) {
          tempDataLine = resultData[i]["data"];
          tempData.push(tempDataLine);
        }
        this.hotSettings.data = tempData;
      },

      initTable: function() {
        this.$axios.all([this.getTableHeaders(), this.getTableData()])
          .then(this.$axios.spread( (header, getdata) => {
            // Both requests are now complete
            this.setHeaders(header.data);
            this.setData(getdata.data);
      }));
      },
      test: function () {
        alert("OK,clicked！");
      }
    },
    components: {
      HotTable
    },

    mounted () {
      this.initTable();
    }
  }
</script>
