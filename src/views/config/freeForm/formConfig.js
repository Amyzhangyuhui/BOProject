/**
 * Created by Amy on 2019/8/31.
 */

var myfunction = {
  getFormConfig: function() {
    var formconfig = {
      "inline": true,
      "labelPosition": "right",
      "labelWidth": "100",
      "size": "small",
      "statusIcon": true,
      "formData": new Map(),
      "submitButton": {
        "key": "formSubmit",
        "value": "",
        "ComponentType": "button",
        "subtype": "primary",
        "clickHandler": "handleSubmit",
        "size": "small",
        "label": "提交",
        "icon": "el-icon-circle-plus",
        "disable": false,
        "readonly": false,
      },
      "cancelButton": {
        "key": "formCancel",
        "value": "",
        "clickHandler": "handleReset",
        "ComponentType": "button",
        "subtype": "primary",
        "size": "small",
        "label": "取消",
        "icon": "el-icon-circle-cancel",
        "disable": false,
        "readonly": false,
      },
      "resetButton": {
        "key": "formReset",
        "value": "",
        "clickHandler": "handleReset",
        "ComponentType": "button",
        "subtype": "primary",
        "size": "small",
        "label": "重置",
        "icon": "el-icon-circle-cancel",
        "disable": false,
        "readonly": false,
      },
      "formItemList": [
        [

          {
              "key": "name",
              "value": "",
              "dataType": "String",
              "ComponentType": "input",
              "subtype": "text",
              "label": "姓名",
              "placeholder": "请输入姓名",
              "rules": [{required: true, message: '请输入您的姓名', trigger: 'blur'}],
              "disable": false,
              "readonly": false,
              },
          {
                "key": "gender",
                "value": "",
                "dataType": "int",
                "ComponentType": "select",
                "subtype": "",
                "label": "性别",
                "placeholder": "请选择性别",
                "rules": [{required: true, message: '请输入性别', trigger: 'blur'}],
                "button": true,
                "border": true,
                "options": [
                  {
                    "value": "1",
                    "label": "男",
                  },
                  {
                    "value": "0",
                    "label": "女",
                  }
                ],
                "disable": false,
                "readonly": false,
              },
          {
                "selectedItems": "",
                "key": "jiguang",
                "value": "",
                "dataType": "int",
                "ComponentType": "select",
                "subtype": "",
                "label": "籍贯",
                "placeholder": "请选择籍贯",
                "rules": [],
                "button": true,
                "border": true,
                "options": [
                  {
                    "key": "1",
                    "label": "北京",
                  },
                  {
                    "key": "2",
                    "label": "天津",
                  },
                  {
                    "key": "3",
                    "label": "上海",
                  },
                  {
                    "key": "4",
                    "label": "山东",
                  },
                  {
                    "key": "5",
                    "label": "广东",
                  },
                ],
                "disable": false,
                "readonly": false,
              },

        ],
        [
          {
              "key": "address",
              "value": "",
              "dataType": "int",
              "ComponentType": "input",
              "subtype": "text",
              "label": "地址",
              "placeholder": "请输入地址",
              "rules": [],
              "disable": false,
              "readonly": false,
            },
          {
                "key": "datetime",
                "value": "",
                "dataType": "datetime",
                "ComponentType": "date",
                "subtype": "",
                "label": "出生日期",
                "placeholder": "请填写时间",
                "format": "yyyy-MM-dd",
                "rules": [],
                "disable": false,
                "readonly": false,
              },
          {
                "key": "SalesArea",
                "value": [],
                "dataType": "int",
                "ComponentType": "radio",
                "subtype": "",
                "label": "销售区域",
                "rules": [{required: true, message: '请输入销售区域', trigger: 'blur'}],
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

        ],
        [
          {
                checkboxSelections: [],
                "key": "products",
                "value": "",
                "dataType": "int",
                "ComponentType": "checkbox",
                "subtype": "",
                "label": "负责产品",
                "max": "3",
                "rules": [{required: true, message: '请输入负责产品', trigger: 'blur'}],
                "disable": false,
                "readonly": false,
                "options": [
                  {
                    "key": 'newProd',
                    "label": '新品',
                  },
                  {
                    "key": 'hotProd',
                    "label": "热门",
                  },
                  {
                    "key": 'tranditionProd',
                    "label": "经典",
                  }
                ]
              },
          {
                "key": "SalesPerformance",
                "value": "",
                "dataType": "int",
                "ComponentType": "slider",
                "subtype": "",
                "input-size": "small",
                "label": "销售业绩",
                "min": "0",
                "max": "100",
                "step": 5,
                "rules": [],
                "disable": false,
                "readonly": false,
              },
          {
                "key": "bio",
                "value": "",
                "dataType": "String",
                "ComponentType": "input",
                "subtype": "textarea",
                "label": "简历",
                "placeholder": "请填写简历",
                "row": "100",
                "rules": [],
                "disable": false,
                "readonly": false,
              },
        ],

        [
          {
                "key": "color",
                "value": "",
                "dataType": "String",
                "ComponentType": "color",
                "subtype": "",
                "label": "选择颜色",
                "size": "small",
                "rules": [],
                "disable": false,
                "readonly": false,
              },
          {
                "key": "numberinput",
                "value": "",
                "dataType": "int",
                "ComponentType": "inputNumber",
                "subtype": "",
                "label": "输入数字",
                "precision": "0.01",
                "rules": [],
                "disable": false,
                "readonly": false,
              },
          {
                "key": "password",
                "value": "",
                "dataType": "String",
                "ComponentType": "input",
                "subtype": "password",
                "label": "输入员工内网密码",
                "rules": [],
                "disable": false,
                "readonly": false,
              },
        ]

      ],

    }
    return formconfig;
  },
  
  getSelectionConfig: function() {
    var defaultSelectionConfig = {
      "NewRowInlayout":"0",
      "selectedItems": "",
      "key": "",
      "value": "",
      "dataType": "",
      "ComponentType": "select",
      "subtype": "",
      "label": "",
      "placeholder": "",
      "rules": [],
      "button": true,
      "border": true,
      "options": [
        {
          "key": "1",
          "label": "男",
        },
        {
          "key": "0",
          "label": "女",
        }
      ],
      "disable": false,
      "readonly": false,
    }
    return defaultSelectionConfig;
  },

  getDatetimeConfig: function() {
    var defaultDatetimeConfig = {
      "NewRowInlayout":"0",
      "key": "",
      "value": "",
      "dataType": "date",
      "ComponentType": "date",
      "subtype": "",
      "label": "",
      "placeholder": "",
      "format": "yyyy-MM-dd",
      "rules": [],
      "disable": false,
      "readonly": false,
    }
    return defaultDatetimeConfig;
  },

  getCheckboxConfig: function() {
    var defaultCheckboxConfig = {
      "NewRowInlayout":"0",
      checkboxSelections: [],
      "key": "",
      "value": "",
      "dataType": "",
      "ComponentType": "checkbox",
      "subtype": "",
      "label": "",
      "max": "3",
      "rules": [],
      "disable": false,
      "readonly": false,
      "options": [
        {
          "key": 'newProd',
          "label": '新品',
        },
        {
          "key": 'hotProd',
          "label": "热门",
        },
        {
          "key": 'tranditionProd',
          "label": "经典",
        }
      ]
    }
    return defaultCheckboxConfig;
  },

  getRadioConfig: function() {
    var defaultRadioConfig = {
      "NewRowInlayout":"0",
      "key": "",
      "value": [],
      "dataType": "int",
      "ComponentType": "radio",
      "subtype": "",
      "label": "",
      "rules": [],
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
    }
    return defaultRadioConfig;
  },

  getSliderConfig: function() {
    var defaultSliderConfig = {
      "NewRowInlayout":"0",
      "key": "",
      "value": "",
      "dataType": "int",
      "ComponentType": "slider",
      "subtype": "",
      "input-size": "",
      "label": "",
      "min": "0",
      "max": "100",
      "step": "5",
      "rules": [],
      "disable": false,
      "readonly": false,
    };
    return defaultSliderConfig;
  },

  getInputNumberConfig: function() {
    var defaultInputNumberConfig = {
      "NewRowInlayout":"0",
      "key": "",
      "value": "",
      "dataType": "int",
      "ComponentType": "inputNumber",
      "subtype": "",
      "label": "",
      "precision": "",
      "rules": [],
      "disable": false,
      "readonly": false,
    };
    return defaultInputNumberConfig;
  },

  getColorConfig: function() {
    var defaultColorConfig = {
      "NewRowInlayout":"0",
      "key": "color",
      "value": "",
      "dataType": "String",
      "ComponentType": "color",
      "subtype": "",
      "label": "",
      "size": "small",
      "rules": [],
      "disable": false,
      "readonly": false,
    }
    return defaultColorConfig;
  },

  getSubmitButtonConfig: function() {
    var defaultSubmitButtonConfig = {
      "key": "formsubmit",
      "value": "",
      "ComponentType": "button",
      "subtype": "primary",
      "clickHandler": "handleSubmit",
      "size": "small",
      "label": "提交",
      "icon": "el-icon-circle-plus",
      "disable": false,
      "readonly": false,
    };
    return defaultSubmitButtonConfig;
  },

  getCancelButtonConfig: function() {
    var defaultCancelButtonConfig = {
      "key": "formCancel",
      "value": "",
      "clickHandler": "",
      "ComponentType": "button",
      "subtype": "primary",
      "size": "small",
      "label": "取消",
      "icon": "el-icon-circle-cancel",
      "disable": false,
      "readonly": false,
    };
    return defaultCancelButtonConfig;
  },

  getResetButtonConfig: function() {
    var defaultResetButtonConfig = {
      "key": "formReset",
      "value": "",
      "clickHandler": "handleReset",
      "ComponentType": "button",
      "subtype": "primary",
      "size": "small",
      "label": "重置",
      "icon": "el-icon-circle-cancel",
      "disable": false,
      "readonly": false,
    };
    return defaultResetButtonConfig;
  },

  getInputConfit_TextArea: function() {
    var defaultInputConfit_TextArea = {
      "NewRowInlayout":"0",
      "key": "",
      "value": "",
      "dataType": "String",
      "ComponentType": "input",
      "subtype": "textarea",
      "label": "",
      "placeholder": "",
      "row": "10",
      "rules": [],
      "disable": false,
      "readonly": false,
    };
    return defaultInputConfit_TextArea;
  },

  getInputConfit_Text: function() {
    var defaultInputConfit_Text = {
      "NewRowInlayout":"0",
      "key": "",
      "value": "",
      "dataType": "String",
      "ComponentType": "input",
      "subtype": "text",
      "label": "",
      "maxlengh":"",
      "placeholder": "",
      "rules": [],
      "disable": false,
      "readonly": false,
    };
    return defaultInputConfit_Text;
  },

  getInputConfit_Password: function() {

    var defaultInputConfit_Password = {
      "NewRowInlayout":"0",
      "key": "",
      "value": "",
      "dataType": "String",
      "ComponentType": "input",
      "subtype": "password",
      "label": "",
      "rules": [],
      "disable": false,
      "readonly": false,
    };
    return defaultInputConfit_Password;
  },

}

export default myfunction
