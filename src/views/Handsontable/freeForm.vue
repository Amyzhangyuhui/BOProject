<template>
  <div ref="dynamicBOEditor">
    <ul>
      <el-form
        class="dynamic-form"
        :inline="formConfig.inline"
        :model="value"
        :label-position="formConfig.labelPosition"
        :label-width="formConfig.labelWidth"
        :size='formConfig.size'
        :status-icon="formConfig.statusIcon">
        <div v-for="layoutInfor in formConfig.formItemList" style="height:100px; ">

            <el-col :span="8" v-for="item in layoutInfor">
              <div style="width: 500px; height:50px;">
              <el-form-item :key="item.key"
                            :v-model="item.value"
                            :label="item.label"
                            :type="item.subtype"
                            :rules="item.rules"
                            :placeholder="item.placeholder">

                  <el-input v-if="item.ComponentType==='input'"
                            :type="item.subtype"
                            v-model="item.value"
                            :row="item.row"
                            style="font-size:20px;font-family:'Microsoft YaHei'">
                  </el-input>
                  <el-select  v-else-if="item.ComponentType==='select'"
                              v-model="item.selectedItems">
                    <el-option v-for="opt in item.options"
                               :key="opt.key"
                               :value="opt.key"
                               :label="opt.label">
                    </el-option>
                  </el-select>
                  <el-radio-group v-else-if="item.ComponentType==='radio'"
                                  v-model="item.value"
                                  fill="#1aad19" size="small">
                    <el-radio-button v-for="opt in item.options"
                                     :key="opt.key"
                                     :label="opt.label"
                                     :value="opt.value"
                                     :disabled="opt.disabled">
                    </el-radio-button>
                  </el-radio-group>
                  <el-checkbox-group v-else-if="item.ComponentType==='checkbox'"
                                     v-model="item.checkboxSelections"
                                     :max="item.max"
                                     fill="#1aad19" size="small" >
                    <el-checkbox  v-for="opt in item.options"
                                  :key="opt.key"
                                  :label="opt.label">
                    </el-checkbox>
                  </el-checkbox-group>
                  <el-date-picker  v-else-if="item.ComponentType==='date'"
                                   v-model="item.value"
                                   :key="item.key"
                                   :value-format="item.format">
                  </el-date-picker>
                  <el-slider v-else-if="item.ComponentType==='slider'"
                             v-model="item.value"
                             :key="item.key"
                             :input-size="item.input-size"
                             style="width:400px">
                  </el-slider>
                  <el-color-picker v-else-if="item.ComponentType==='color'"
                                   v-model="item.value"
                                   :key="item.key"
                                   :input-size="item.size"
                                   show-alpha >
                  </el-color-picker>
                  <el-input-number v-else-if="item.ComponentType==='inputNumber'"
                                   v-model="item.value"
                                   :key="item.key"
                                   :label="item.label"
                                   :min="1"
                                   :max="100"
                                   :step="5"
                                   :precision="0.1">
                  </el-input-number>

              </el-form-item>
              </div>

            </el-col>

        </div>
      </el-form>
    </ul>

    <el-input v-model="formConfigEvolution" :label="请输入组件选择建议" :placeholder="建议的组件选择"></el-input>
    <p></p>
    <el-button v-model="formConfig.submitButton.value"
               @click="handleSubmit"
               :type="formConfig.submitButton.subtype"
               :icon="formConfig.submitButton.icon"
               :size="formConfig.submitButton.size"
               style="width: 150px">
      提交
    </el-button>
    <el-button v-model="formConfig.cancelButton.value"
               @click="handleCancel"
               :type="formConfig.cancelButton.subtype"
               :icon="formConfig.cancelButton.icon"
               :size="formConfig.cancelButton.size"
               style="width: 150px">
      取消
    </el-button>
    <el-button v-model="formConfig.resetButton.value"
               @click="handleReset"
               :type="formConfig.resetButton.subtype"
               :icon="formConfig.resetButton.icon"
               :size="formConfig.resetButton.size"
               style="width: 150px">
      修改UI配置
    </el-button>
    <H1>{{this.info}}</H1>


  </div>
</template>
<script>
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  import formconfig from "@/views/config/freeForm/formConfig.js";
  import props from "@/views/config/freeForm/props.js";
  import dataBuffer from "@/views/config/freeForm/dataBuffer.js";
  export default {
    data() {
      return {
        info: "。。。。。。",
        formConfigEvolution:"",
        ItemConfigEvolutionDecision:{},
        props: {},
        dataBuffer: {},
        formConfig: {},
      }
    },
    methods: {

      /*********************************** 向后端请求数据 *************************************************/
      prepareRequestURL: function (URL, paras) {
        var reqURL = URL;
        reqURL = reqURL + "ComponentID" + "=" + this.props["ComponentID"];
        reqURL = reqURL + "&&" + "pageURL" + "=" + this.props["pageURL"];
        reqURL = reqURL + "&&" + "MajorTask" + "=" + this.props.paras["MajorTask"];
        reqURL = reqURL + "&&" + "BOID" + "=" + this.props.paras["BOID"];
        reqURL = reqURL + "&&" + "BOKey" + "=" + this.props.paras["BOKey"];
        reqURL = reqURL + "&&" + "BOKeyValue" + "=" + this.props.paras["BOKeyValue"];
        return reqURL;
      },
      getEditorConfig: function () {
        var reqestURL = this.props.serviceURL + 'Editor/config?';
        reqestURL = this.prepareRequestURL(reqestURL, this.paras);
        return this.$axios.get(reqestURL);
      },
      /**
       *从后端获取数据：已经存在的某对象的记录数据，用于对象编辑，初始化Form
       **/
      getBackendBOData() {
        var reqestURL = this.props.serviceURL + 'Data/Value?';
        reqestURL = this.prepareRequestURL(reqestURL, this.paras);
        return this.$axios.get(reqestURL);
      },

      /*********************************** 初始化配置数据 *************************************************/
      setBOData: function (bodata) {
        if (props.paras.MajorTask == "Edit") {
          this.parseBOData(bodata);
        }
      },
      setDefaultValue: function (result) {
        this.parseBOSchema(result);
        this.parseEditorConfig(result);
        this.parseLayoutConfig(result);
        this.parseButtonConfig(result);
        this.parseSelectionConfig(result);
        var count = this.dataBuffer.MajorBOKeys.length;

        this.formConfig.formItemList.length = 0;

        /**
         * 假如需要的列为 n
         */
        var n_col = 3;
        for(var i = 0; i < Math.ceil(count/n_col); i++) {
          var temp_item = []
          for(var j = 0; j < n_col && (n_col * i + j + 1) <= count; j++) {
            var index = n_col * i + j;
            var formItemConfig = this.generateFormItemList(index, this.dataBuffer.MajorBOKeys[index], this.dataBuffer.MajorBOKeyTypes[index],
              this.dataBuffer.BOEditorItemComponents[index], "");
            temp_item.push(formItemConfig)
          }
          this.formConfig.formItemList.push(temp_item);
        }

        this.initButtonConfig();
        this.initDefaultData();
        this.initLayoutConfig();
      },
      parseBOSchema: function (result) {
        this.dataBuffer.MajorBOKeys = result["BOKeys"].split(",");
        this.dataBuffer.MajorBOKeyTypes = result["BOKeyTypes"].split(",");
        this.dataBuffer.MajorBOKeyAlias = result["BOKeyAlias"].split(",");
      },
      parseEditorConfig: function (result) {
        this.dataBuffer.BOEditorItemComponents = result["BOEditorItemComponents"].split(",");
      },
      parseSelectionConfig: function (result) {
        this.dataBuffer.MajorBOMappingSelectOption = result["MajorBOMappingSelectOption"];
        this.dataBuffer.SelectionOptionDatas = result["selectOptionList"];
        this.parseMajorBOSelectOptionInfors();
      },
      parseMajorBOSelectOptionInfors: function () {
        var mapingKVs = this.dataBuffer.MajorBOMappingSelectOption.split(",");
        var count = mapingKVs.length;
        for (var i = 0; i < count; i++) {
          var aKV = mapingKVs[i].split(":");
          var map = {};
          map[aKV[0]] =  aKV[1];
          this.dataBuffer.MajorBOMappingSeletionPairs.set(aKV[0],aKV[1]);
        }
        for(var mappingSeletionDataKey in this.dataBuffer.SelectionOptionDatas){
          var strDatas = this.dataBuffer.SelectionOptionDatas[mappingSeletionDataKey];
          this.dataBuffer.SelectionOptionDataPairs.set(mappingSeletionDataKey,strDatas);
        }
      },
      parseLayoutConfig: function (result) {},
      parseButtonConfig: function (result) {},
      parseBOData: function (data) {},
      initButtonConfig: function () {
        var count = this.dataBuffer.EditorButtonConfig.length;
        for (var i = 0; i < count; i++) {
          var button = this.dataBuffer.EditorButtonConfig[i];
          if (button["type"] === "submit")
            this.formConfig["submitButton"] = this.generateEditorButtonItem("submit", button["subtype"]);
          if (button["type"] === "cancel")
            this.formConfig["cancelButton"] = this.generateEditorButtonItem("cancel", button["subtype"]);
          this.formConfig["cancelButton"] = this.generateEditorButtonItem("submit", button["subtype"]);
          if (button["type"] === "reset")
            this.formConfig["resetButton"] = this.generateEditorButtonItem("reset", button["subtype"]);
        }
      },
      initDefaultData: function () {},
      initLayoutConfig: function () {},

      /*********************************** 配置UI数据 *************************************************/
      //该段代码需要优化，检查数据的完备性，比如对于Select、Checkbox、radio group之类，需要检查options是否存在，否则出错
      generateFormItemList: function (itemIndex, key, type, majorComponentType, subComponentType) {

        var formItemConfig = {};

        if (majorComponentType === "input") {
          formItemConfig = this.generateEditorInputItem(itemIndex, key, type, majorComponentType, "text");
        }
        if (majorComponentType === "input textarea") {
          formItemConfig = this.generateEditorInputItem(itemIndex, key, type, majorComponentType, "textarea");
        }
        if (majorComponentType === "input password") {
          formItemConfig = this.generateEditorInputItem(itemIndex, key, type, majorComponentType, "password");
        }
        if (majorComponentType === "select") {
          formItemConfig = this.generateEditorSelectItem(itemIndex, key, type, majorComponentType, subComponentType);
        }

        if (majorComponentType === "date") {
          formItemConfig = this.generateEditorDatetimeItem(itemIndex, key, type, majorComponentType, subComponentType);
        }
        if (majorComponentType === "checkbox") {
          formItemConfig = this.generateEditorCheckboxItem(itemIndex, key, type, majorComponentType, subComponentType);
        }

        if (majorComponentType === "radio") {
          formItemConfig = this.generateEditorRadioItem(itemIndex, key, type, majorComponentType, subComponentType);
        }

        if (majorComponentType === "slider") {
          formItemConfig = this.generateEditorSliderItem(itemIndex, key, type, majorComponentType, subComponentType);
        }

        if (majorComponentType === "inputNumber") {
          formItemConfig = this.generateEditorInputNumberItem(itemIndex, key, type, majorComponentType, subComponentType);
        }

        if (majorComponentType === "color") {
          formItemConfig = this.generateEditorColorItem(itemIndex, key, type, majorComponentType, subComponentType);
        }

        //前面都不是，缺省是input组件
        if (formItemConfig.size === 0) {
          formItemConfig = this.generateEditorInputItem(itemIndex, key, type, majorComponentType, subComponentType);
        }

        if( majorComponentType === "input"){
          if(key === "name"){
            formItemConfig["placeholder"] = "新的placehodler";
            formItemConfig["maxlengh"] = "10";
            formItemConfig["label"] = "新的Label";
          }
        }

        return formItemConfig;

      },
      generateEditorInputItem: function (itemIndex, key, type, majorComponentType, subComponentType) {
        var defaultInputConfit_Text = formconfig.getInputConfit_Text();
        var defaultInputConfit_TextArea = formconfig.getInputConfit_TextArea();
        var defaultInputConfit_Password = formconfig.getInputConfit_Password();
        var itemConfig = this.dataBuffer.editorItemConfig[itemIndex];

        if (subComponentType === "") subComponentType = "text";

        if (subComponentType === "text") {

          defaultInputConfit_Text["key"] = key;
          defaultInputConfit_Text["label"] = this.dataBuffer.MajorBOKeyAlias[itemIndex];

          return defaultInputConfit_Text;
        }
        if (subComponentType === "textarea") {
          defaultInputConfit_TextArea["key"] = key;
          defaultInputConfit_TextArea["label"] = this.dataBuffer.MajorBOKeyAlias[itemIndex];
          return defaultInputConfit_TextArea;
        }
        if (subComponentType === "password") {
          defaultInputConfit_Password["key"] = key;
          defaultInputConfit_Password["label"] = this.dataBuffer.MajorBOKeyAlias[itemIndex];
          return defaultInputConfit_Password;
        }
      },
      generateEditorSelectItem: function (itemIndex, key, dataType, majorComponentType, subComponentType) {
        var defaultSelectionConfig = formconfig.getSelectionConfig();
        defaultSelectionConfig["key"] = key;
        defaultSelectionConfig["dateType"] = dataType;
        var itemConfig = this.dataBuffer.editorItemConfig[itemIndex];
        defaultSelectionConfig["label"] = this.dataBuffer.MajorBOKeyAlias[itemIndex];

        var returnOptions = this.findSelectionOptionDatas(key);
        var optCount = returnOptions.length;
        defaultSelectionConfig["options"].length = 0;
        for (var i = 0; i < optCount; i++) {
          defaultSelectionConfig.options.push(returnOptions[i]);
        }

        return defaultSelectionConfig;
      },
      generateEditorDatetimeItem: function (itemIndex, key, type, majorComponentType, subComponentType) {
        var defaultDatetimeConfig = formconfig.getDatetimeConfig();

        defaultDatetimeConfig["key"] = key;
        defaultDatetimeConfig["dateType"] = type;
        defaultDatetimeConfig["subtype"] = subComponentType;
        defaultDatetimeConfig["label"] = this.dataBuffer.MajorBOKeyAlias[itemIndex];

        return defaultDatetimeConfig;
      },
      generateEditorCheckboxItem: function (itemIndex, key, type, majorComponentType, subComponentType) {
        var defaultCheckboxConfig = formconfig.getCheckboxConfig();

        defaultCheckboxConfig["key"] = key;
        defaultCheckboxConfig["dateType"] = type;
        defaultCheckboxConfig["subtype"] = subComponentType;
        defaultCheckboxConfig["label"] = this.dataBuffer.MajorBOKeyAlias[itemIndex];

        var returnOptions = this.findSelectionOptionDatas(key);
        var optCount = returnOptions.length;
        defaultCheckboxConfig["options"].length = 0;
        for (var i = 0; i < optCount; i++) {
          defaultCheckboxConfig.options.push(returnOptions[i]);
        }

        return defaultCheckboxConfig;
      },
      generateEditorRadioItem: function (itemIndex, key, type, majorComponentType, subComponentType) {
        var defaultRadioConfig = formconfig.getRadioConfig();

        defaultRadioConfig["key"] = key;
        defaultRadioConfig["dateType"] = type;
        defaultRadioConfig["label"] = this.dataBuffer.MajorBOKeyAlias[itemIndex];

        return defaultRadioConfig;

      },
      generateEditorSliderItem: function (itemIndex, key, type, majorComponentType, subComponentType) {
        var defaultSliderConfig = formconfig.getSliderConfig();
        defaultSliderConfig["key"] = key;
        defaultSliderConfig["label"] = this.dataBuffer.MajorBOKeyAlias[itemIndex];

        return defaultSliderConfig;
      },
      generateEditorInputNumberItem: function (itemIndex, key, type, majorComponentType, subComponentType) {
        var defaultInputNumberConfig = formconfig.getInputNumberConfig();

        defaultInputNumberConfig["key"] = key;
        defaultInputNumberConfig["label"] = this.dataBuffer.MajorBOKeyAlias[itemIndex];

        return defaultInputNumberConfig;
      },
      generateEditorColorItem: function (itemIndex, key, type, majorComponentType, subComponentType) {
        var defaultColorConfig = formconfig.getColorConfig();

        defaultColorConfig["key"] = key;
        defaultColorConfig["subtype"] = subComponentType;
        defaultColorConfig["label"] = this.dataBuffer.MajorBOKeyAlias[itemIndex];

        return defaultColorConfig;
      },
      generateEditorButtonItem: function (majorComponentType, subComponentType) {
        var defaultSubmitButtonConfig = formconfig.getSubmitButtonConfig();
        var defaultCancelButtonConfig = formconfig.getCancelButtonConfig();
        var defaultResetButtonConfig = formconfig.getResetButtonConfig();

        if (majorComponentType === "submit") {
          defaultSubmitButtonConfig["key"] = this.props["ComponentID"] + "submitButton";
          defaultSubmitButtonConfig["label"] = "label";
          defaultSubmitButtonConfig["icon"] = "icon";
          return defaultSubmitButtonConfig;
        }
        if (majorComponentType === "Cancel") {
          defaultCancelButtonConfig["key"] = this.props["ComponentID"] + "CancelButton";
          defaultCancelButtonConfig["label"] = "label";
          defaultCancelButtonConfig["icon"] = "icon";
          return defaultCancelButtonConfig;
        }
        if (majorComponentType === "Reset") {
          defaultResetButtonConfig["key"] = this.props["ComponentID"] + "ResetButton";
          defaultResetButtonConfig["label"] = "label";
          defaultResetButtonConfig["icon"] = "icon";
          return defaultResetButtonConfig;
        }
      },
      findSelectionOptionDatas: function (key) {

        var optionReturn = [];
        var selectionDataID = this.dataBuffer.MajorBOMappingSeletionPairs.get(key);
        var SelectionOptionDataString = this.dataBuffer.SelectionOptionDataPairs.get(selectionDataID);
        var optListPairs = SelectionOptionDataString.split(",");
        var optCount = optListPairs.length;
        for (var i = 0; i < optCount; i++) {
          var AOptionPair = {
            "key": "",
            "label": ""
          };
          var aPair = optListPairs[i].split(":");
          AOptionPair["key"] = aPair[0];
          AOptionPair["label"] = aPair[1];
          optionReturn.push(AOptionPair);
        }

        return optionReturn;
      },


      /*********************************** button响应函数 *************************************************/
      handleSubmit:function() {
        this.getFrontendData();
        alert("submit req...to backend");
        if(this.props.MajorTask === "EditBO"){
          var reqestURL = this.props.serviceURL + '/Data/Update?';
        }else {
          var reqestURL = this.props.serviceURL + '/Data/Add?';
        }
        reqestURL = this.prepareRequestURL(reqestURL, this.paras);
        this.prepareDataForPOST();
        this.$axios({
          method:"post",
          url:reqestURL,
          data:this.dataBuffer.dataForPOST
        }).then((res)=>{
          console.log(res.data);
      })
      },
      handleCancel:function() {

      },
      handleReset:function() {
        alert("Reset request to backend，修改UI配置");
        var reqestURL = this.props.serviceURL + '/Editor/UpdateConfig?';
        reqestURL = this.prepareRequestURL(reqestURL, this.paras);
        reqestURL = reqestURL + "&&UIConfigEvolution=" + this.formConfigEvolution;
        this.prepareDataForPOST();
        this.$axios({
          method:"post",
          url:reqestURL,
          data:"",
        }).then((res)=>{
          console.log(res.data);
      })
        this.initEditor(this.props.paras.MajorTask);
      },

      /*********************************** post请求函数 *************************************************/
      /**
       * 从前端获取数据：获得客户输入的数据，并保持到formConfig.formData中
       * 同时，产生dataBuffer中的dataForPOST数据，供POST数据使用
       */
      getFrontendData:function() {
        var count = this.formConfig.formItemList.length;

        for (var i = 0; i < count; i++) {
          var attr = this.formConfig.formItemList[i];

          for(var j = 0; j < attr.length; j++) {
            var sub_sttr = attr[j];
            var KVPair = [];
            var key = sub_sttr["key"];
            var value;
            if(sub_sttr.ComponentType === "checkbox"){
              value = sub_sttr.checkboxSelections;
            }else if(sub_sttr.ComponentType === "select"){
              value = sub_sttr.selectedItems;
            } else{
              value = sub_sttr["value"];
            }
            this.formConfig.formData[key] = value;
          }

        }
      },
      prepareDataForPOST:function(){
        alert("prepareDataForPOST is called ...");
        this.dataBuffer.dataForPOST = "";
        for(var key in this.formConfig.formData){
          if( this.dataBuffer.dataForPOST.length === 0){
            this.dataBuffer.dataForPOST = this.dataBuffer.dataForPOST + key + "=" + this.formConfig.formData[key];
          }else
            this.dataBuffer.dataForPOST = this.dataBuffer.dataForPOST + "&" + key + "=" + this.formConfig.formData[key];
        }
      },

      /*********************************** 入口函数 *************************************************/
      initEditor: function (task) {
        this.$axios.all([this.getEditorConfig(), this.getBackendBOData()])
          .then(this.$axios.spread((editorconfig, bodata) => {

              this.setDefaultValue(editorconfig.data);
              this.setBOData(bodata);
      }));
      },

      /*********************************** 待完成函数 *************************************************/
      SendEvent:function(eventID, data) {
        //后端通信的统一接口，用于获取数据或者事件处理
      },
      onlineUpdateEditorItemConfigByKey:function(key,newCofig){
        for(var items in this.formConfig.formItemList){
          for ( var sub_items in items) {
            if(sub_items["key"] === "name"){
              sub_items["placeholder"] =  "Placeholder online update--请输入姓名";
              alert(" onlineUpdateEditorItemConfigByKey, updating placeholder to" + sub_items["placeholder"]);
            }
          }

        }
      },
      updateItemConfigIfNeed:function(key,config){

        if(config["ComponentType"] === "input"){
          config["placeholder"] = "请输入-新的Placeholder";
        }
        return config;
      },
    },

    mounted() {
      this.props = props.getProps();
      this.formConfig = formconfig.getFormConfig();
      this.dataBuffer = dataBuffer.getDataBuffer();

      this.initEditor(this.props.paras.MajorTask);
    },
  }
</script>
<style>

</style>
