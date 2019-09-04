<template>
  <div id="table">
      <hotTable  ref="testHotEdit" :settings="hotSettingsEdit" licenseKey="00000-00000-00000-00000-00000"></hotTable>
      <el-button type="primary" icon="el-icon-edit" @click.stop="addData"
                 style="width:100px;margin-right:5px;margin-bottom:5px;">增加</el-button>
    <H1>{{info2}}</H1>
  </div>
</template>

<script>

  import { HotTable } from '@handsontable/vue';
  import 'handsontable/dist/handsontable.full.css';
  export default {
    data(){
      return {
        VectorInfo: [],
        info2: null,
        reqestURLToServer: "",
        serviceURL: "http://127.0.0.1:8080/",
        editLables: [],
        editType: [],
        editCellLocation: [
          [0, 1],
          [1, 1],
          [2, 1],
          [3, 1],
          [4, 1],
          [5, 1]
        ],
        paras: {
          ComponentID: "hotTableEditor1",
          pageURL: "",
          data: "",
          ID: "",
        },
        hotSettingsEdit: {
          //定义数据
          readOnly: false,  //设置列表是否可编辑
          data: [[]],
          //定义表结构
          //定义属性
          columns: [
            {},
            {},
          ],
          colWidths: [200, 300, 200, 300],
          cell:function (instance, td, row, col, prop, value, cellProperties){
            this.renderer = MyRenderer;
          }
        },
      }
    },
    methods: {
      MyRenderer: function (instance, td, row, col, prop, value, cellProperties) {
        Handsontable.renderers.TextRenderer.apply(this, arguments);
        $(td).css("text-align", right);
        $(td).css("vertical-align", middle);
      },
      prepareRequestURL: function(URL,paras){
        var reqURL = URL;
        reqURL = reqURL + "ComponentID" + "=" + paras["ComponentID"];
        reqURL = reqURL + "&&"+"pageURL" + "=" + paras["pageURL"];
        reqURL = reqURL + "&&"+"ID" + "=" + paras["ID"];
        reqURL = reqURL + "&&"+"data" + "=" + paras["data"];
        return reqURL;
      },
      InitEditorConfig: function() {
        var reqestURL=this.serviceURL+'HotEditor/config?';
        reqestURL = this.prepareRequestURL(reqestURL,this.paras);
        this.$axios.get(reqestURL)
          .then(response=>{
            this.setEditorConfig(response.data);
            // alert("请求成功！");
        });
      },
      setEditorConfig:function(response){
        this.editLables = response["BOKeyAlias"].split(",");
        var editorFormat = [];
        for(var i = 0; i < this.editLables.length; i++){
          var editorLine = [];
          editorLine.push(this.editLables[i]);
          editorLine.push("");
          editorFormat.push(editorLine);
        }
        this.hotSettingsEdit.data = editorFormat;
      },
      initTable: function() {
        this.InitEditorConfig();
      },
      addData () {
        this.VectorInfo.length = 0;
        var hot = this.$refs.testHotEdit.hotInstance;
        var count = this.editLables.length;
        for(var i = 0; i < count; i++){
          this.VectorInfo.push(hot.getDataAtCell(i,1));
        }
        var reqestURL=this.serviceURL+'Data/Add?';
        var formParams = JSON.stringify(this.VectorInfo);
        this.paras["data"] = formParams;
        reqestURL = this.prepareRequestURL(reqestURL,this.paras);
        this.$axios.post(reqestURL,"");
      },
      change() {
        this.update();
      },
    },
    components: {
      HotTable
    },
    mounted () {
      this.initTable();
    }
  }
</script>
