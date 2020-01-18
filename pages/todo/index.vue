<template>
  <div class="todo-index">
    <Header></Header>
    <div class="todo-input">
      <UiInput></UiInput>
    </div>
    <div class="todo-btn-group">
      <UiButton :property="btnRegisterObj" :functionName="'registerTodo'" v-on:registerTodo="registerTodo"></UiButton>
      <UiButton :property="btnReportObj"></UiButton>
    </div>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>

<script>
  import Body from '@/components/todo/Body';
  import Footer from '@/components/todo/Footer'
  import Header from '@/components/todo/Header'
  import UiButton from '@/components/ui/ui-button-primary'
  import UiInput from '@/components/ui/ui-input'

  export default {
    components:{
      Body, Footer, Header, UiButton, UiInput
    },
    data(){
      return{
        btnRegisterObj:{
          color:"primary",
          name:'등록'
        },
        btnReportObj:{
          color:"error",
          name:"신고"
        }
      }
    },
    methods:{
      onClickMethod(){
        alert("hello world")
      },
      registerTodo(value){
        alert(value)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>