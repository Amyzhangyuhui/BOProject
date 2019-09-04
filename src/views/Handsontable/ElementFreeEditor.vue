<template>
  <el-form
    class="dynamic-form"
    :inline="formConfig.inline"
    :model="value"
    :label-position="formConfig.labelPosition"
    :label-width="formConfig.labelWidth"
    :size='formConfig.size'
    :status-icon="formConfig.statusIcon">
    <el-form-item v-for="item in formConfig.formItemList"
                  :key="item.key"
                  :v-model="item.value"
                  :label="item.label"
                  :type="item.subtype"
                  :placeholder="item.placeholder">
      <el-input v-if="item.ComponentType==='input'"
                :key="item.key"
                :v-model="item.value"
                :label="item.label"
                :type="item.subtype"
                :placeholder="item.placeholder"
                :rules="item.rules"
                :row="item.row"
                style="font-size:20px;font-family:'Microsoft YaHei'">
      </el-input>
      <el-select  v-else-if="item.ComponentType==='select'"
                  :key="item.key"
                  :v-model="item.value"
                  :placeholder="item.placeholder"
                  :rules="item.rules"
                  :disabled="item.disabled" >
        <el-option v-for="opt in item.options"
                   :key="opt.value"
                   :value="opt.value"
                   :label="opt.label"
                   :disabled="opt.disabled">
        </el-option>
      </el-select>
      <el-radio-group v-else-if="item.ComponentType==='radio'"
                      :key="item.key"
                      :v-model="item.value"
                      :placeholder="item.placeholder"
                      :rules="item.rules" fill="#1aad19" size="small">
        <el-radio-button v-for="opt in item.options"
                         :key="opt.key"
                         :label="opt.label"
                         :value="opt.value"
                         :disabled="opt.disabled">
        </el-radio-button>
      </el-radio-group>
      <el-checkbox-group v-else-if="item.ComponentType==='checkbox'"
                         :key="item.key" :v-model="item.value"
                         :placeholder="item.placeholder"
                         :rules="item.rules" fill="#1aad19" size="small" style="width:500px">
        <el-checkbox  v-for="opt in item.options"
                      :v-model="item.value"
                      :key="opt.value"
                      :value="opt.value"
                      :label="opt.label"
                      :disabled="opt.disabled" style="width:50px">
        </el-checkbox>
      </el-checkbox-group>
      <el-date-picker  v-else-if="item.ComponentType==='date'"
                       :key="item.key"
                       :v-model="item.value"
                       :type="item.type"
                       :placeholder="item.placeholder"
                       :rules="item.rules"
                       :value-format="item.format">
      </el-date-picker>
      <el-slider v-else-if="item.ComponentType==='slider'"
                 :v-model="item.value"
                 :step="1"
                 :label="label"
                 :input-size="medium"
                 style="width:500px">
      </el-slider>
    </el-form-item>
  </el-form>
</template>
<script>
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  export default {
    data(){
      return{
        props: {
          item: {
            type: Object,
            required: true
          }
        },
        formConfig:{
          "inline": true,
          "labelPosition": "right",
          "labelWidth": "",
          "size": "small",
          "statusIcon": true,
          "formItemList": [
            {
              "key": "name",
              "value": "",
              "dataType":"String",
              "ComponentType": "input",
              "subtype": "text",
              "label": "姓名",
              "placeholder": "请输入姓名",
              "rules": [{ required: true, message: '请输入您的姓名', trigger: 'blur' } ],
              "disable": false,
              "readonly": false,
            },
            {
              "key": "gender",
              "value": "",
              "dataType":"int",
              "ComponentType": "select",
              "subtype":"",
              "label": "性别",
              "placeholder": "请选择性别",
              "rules": [{ required: true, message: '请输入性别', trigger: 'blur' } ],
              "button": true,
              "border": true,
              "options": [
                {
                  "value": "1",
                  "label": "男",
                  "disabled": false
                },
                {
                  "value": "0",
                  "label": "女",
                  "disabled": false
                }
              ],
              "disable": false,
              "readonly": false,
            },
            {
              "key": "address",
              "value": "",
              "dataType":"int",
              "ComponentType": "input",
              "subtype": "text",
              "label": "地址",
              "placeholder": "请输入地址",
              "rules": [{ required: true, message: '请输入您的地址', trigger: 'blur' } ],
              "disable": false,
              "readonly": false,
            },
            {
              "key": "jianli",
              "value": "",
              "dataType":"int",
              "ComponentType": "input",
              "subtype": "textarea",
              "label": "简历",
              "placeholder": "请填写简历",
              "row":"40",
              "rules": [],
              "disable": false,
              "readonly": false,
            },
            {
              "key": "datetime",
              "value": "",
              "dataType":"datetime",
              "ComponentType": "date",
              "subtype": "",
              "label": "选择日期",
              "placeholder": "请选择时间",
              "format":"yyyy-MM-dd",
              "rules": [],
              "disable": false,
              "readonly": false,
            },
            {
              "key": "SalesArea",
              "value": "",
              "dataType":"int",
              "ComponentType": "radio",
              "subtype": "",
              "label": "测试Radio",
              "rules": [{ required: true, message: '请输入测试Radio', trigger: 'blur' } ],
              "disable": false,
              "readonly": false,
              "options": [
                {
                  "value": "1",
                  "label": "东北",
                  "disabled": false
                },
                {
                  "value": "2",
                  "label": "西南",
                  "disabled": false
                },
                {
                  "value": "3",
                  "label": "华南",
                  "disabled": false
                }
              ]
            },
            {
              "key": "checkbox",
              "value": "",
              "dataType":"int",
              "ComponentType": "checkbox",
              "subtype": "",
              "label": "测试checkbox",
              "rules": [{required: true, message: '请输入测试checkbox', trigger: 'blur'}],
              "disable": false,
              "readonly": false,
              "options": [
                {
                  "name": "测试1",
                  "label": "1",
                  "value":"1",
                  "disabled": false
                },
                {
                  "name": "测试2",
                  "label": "2",
                  "value":"2",
                  "disabled": false
                },
                {
                  "name": "测试3",
                  "label": "3",
                  "value":"3",
                  "disabled": false
                }
              ]
            },
            {
              "key": "scope",
              "value": "",
              "dataType":"int",
              "ComponentType": "slider",
              "subtype": "",
              "label": "选择范围",
              "placeholder": "请选择范围",
              "min":"0",
              "max":"100",
              "step":5,
              "rules": [],
              "disable": false,
              "readonly": false,
            },
          ]
        },
      }
    },
    methods: {
      setDefaultValue:function() {
      }
    },
    handleInput(val, key) {

    },
    mounted() {
      this.setDefaultValue()
    },
  }
</script>
<style>

</style>
