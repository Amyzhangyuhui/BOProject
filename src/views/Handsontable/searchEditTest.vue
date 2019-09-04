<template>
  <el-form ref="newTermDetail" :model="newTermDetail" class="auto_form">
    <div :style="operation ==='new' ? 'margin-left: 50px' : 'margin-left: 20px'">
      <el-form-item
        v-for="(domain, index) in newTermDetail.questions"
        :label="operation === 'new' ? ' ' : '' + domain.id"
        :key="'term' + index"
        :prop="'questions.' + index + '.s_question'"
        :style="index === 0 ? 'margin-top: 0; margin-bottom: 20px;' : 'margin: 20px auto;'"
        :rules="[{ required: true, validator: checkInputValid, message: '请输入中英文', trigger: ['blur','change'] }]">
        <el-input style="width: 300px;" type="textarea" autosize v-model="domain.s_question"></el-input>
        <el-button>删除</el-button>
      </el-form-item>
    </div>
  </el-form>

</template>

<script>

  import { HotTable } from '@handsontable/vue';
  import 'handsontable/dist/handsontable.full.css';
  export default {
    data(){
      let checkInput = (rules, value, callback) => {
        const regex = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z ]|[，、？。!,?.！])+$");
        if(!regex.test(value) || !value) {
          callback(new Error('请输入中英文语句'));
        }else {
          callback();
        }
      }
      return {
        checkInputValid: checkInput,
        newTermDetail: {
          questions: [
            { s_question: '姓名'},
            { s_question: '年龄'},
            { s_question: '职业'},
          ]
        }
      };
    },

    methods: {

    },
    components: {
      HotTable
    },
    mounted () {

    }
  }
</script>
