<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <div>
      <input type="button" v-on:click="editTable" value="点击我">
      <button id="editTable" type="button"  @click.stop="editTable">编辑</button>
      <button id="preserveTable" onclick="preserveTable()">保存</button>
    </div>
    <HotTable :settings="hotSettings" ref="'MyHottable' + this.IDSerial"></HotTable>
   <div id="app">
      <H1> {{info}} </H1>
    </div>
  </div>
</template>

<script>

  import { HotTable } from '@handsontable/vue';
  import 'handsontable/dist/handsontable.full.css';
  export default {
    data(){
      return{
        info : null,
        IDSerial:"001",
        serviceURL:"http://127.0.0.1:8080/",
        paras:{
          ComponentID: "dynamicHandsontable1",
          pageURL: "deepDiveHotTable",
        },
        hotSettings:{
　　　　　　//定义数据
          data: [
                  [ "EMBA8270", "邓厚", "15600561422", "F", "14/08/2019" ],
                  [ "EMBA8140", "祖泰弘", "15008464935", "M", "14/08/2009" ],
                  [ "EMBA140", "台霄蕊", "13906492069", "F", "04/08/2010" ],
                  [ "EMBA220", "巴亮志", "13003283015", "F", "11/08/1999" ],
                  [ "EMBA8220", "台雅", "13403314131", "F", "02/08/2014" ]
          ],
　　　　　　//定义表结构
          colHeaders: [
            "工号",
            "姓名",
            "手机号",
            "性别",
            "出生日期"
          ],
          //定义属性
          columns: [
            {},
            {},
            {},
            {},
            {},
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
              "hsep2": "---------",
            }
          },
          afterLoadData (){
            // alert("afterLoadData function called!");
          },
          afterInit(){
            // alert("afterInit function called!");
          },
          afterChange:this.afterChangeMe,
          afterRender:this.afterRenderMe,
          beforeRender:this.beforeRenderMe,
          afterDeselect:this.afterDeselectMe,
          beforeDeselect(){
            // alert("beforeDeselect  called")
          },
          afterUpdateSettings(){
            // alert("afterUpdateSettings  called")
          },
          afterCreateCol(){
            // alert("afterCreateCol function called!");
          },
          beforeRemoveRow(){
            // alert("beforeRemoveRow function called!");
          },
          afterCreateRow(){
            // alert("afterCreateRow function called!");
          },
          afterDestroy () {
            // alert("after Destroy function called!");
          },
          afterColumnMove  () {
            // alert("afterColumnMove  function called!");
          },
          afterRowResize   () {
            // alert("afterColumnMove  function called!");
          },
          afterRemoveCol   () {
            // alert("afterColumnMove  function called!");
          },
          afterRemoveRow   () {
            // alert("afterColumnMove  function called!");
          },
          afterColumnSort   () {
            // alert("afterColumnMove  function called!");
          },
          afterCreateCol   () {
            // alert("afterColumnMove  function called!");
          },
          afterCellMetaReset(){
            // alert("afterCellMetaReset  function called!");
          },
          updatePlayerList: null
        },
      }
    },

    components: {
      HotTable
    },

    methods:{
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
        // this.info = this.hotSettings.data;
      },
      initTable: function() {
        this.$axios.all([this.getTableHeaders(), this.getTableData()])
          .then(this.$axios.spread( (header, getdata) => {
            // Both requests are now complete
            this.setHeaders(header.data);
            this.setData(getdata.data);
          }));
        var hot = new Handsontable(document.getElementById("MyHottable"));
        hot.addHook('beforeChange',this.methods.afterChangeFunctionMe());
      },
      afterChangeFunctionMe: function (){
      //   this.info = "afterChangeFunctionMe in methods is called" ;
      //   alert("afterChangeFunctionMe in methods is called");
      },
      getSourceData: function () {
        // return this.$refs.textHot.table.getSourceData()
      },
      editTable: function () {
        // alert("editTable in methods is called");
      },
      afterChangeMe(){
        // alert("afterChangeMe is called... outside methods. after data...field! ")
      },
      beforeRenderMe(){
        // alert("beforeRenderMe called,. outside methods. after data...field!  ")
      },
      afterRenderMe(){
        // alert("afterRenderMe called,. outside methods. after data...field!  ")
      },
      afterDeselectMe(){
        // alert("afterDeselectMe called,. outside methods. after data...field!  ")
      },
      preserveTable(){
      }
    },
    mounted () {
      this.initTable();
    }
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  #hot-display-license-info{
    display: none;
  }
  #metrical_node_table table thead tr th{
    background-color: rgb(199, 232, 181);
    color: rgb(0, 0, 0);
    height: 30px;
    line-height: 30px;
  }

  #metrical_node_table table tbody tr th{
    height: 30px;
    line-height: 30px;
  }

  #metrical_node_table table tbody tr td{
    height: 30px;
    line-height: 30px;
  }

  #metrical_node_table table thead tr th .changeType {
    margin-top: 8px;
  }
</style>
