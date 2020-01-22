<template>
  <div class="todo-index">
    <Header></Header>
    <div class="todo-input">
      <UiInput ref="todoInput"></UiInput>
    </div>
    <div class="todo-btn-group">
      <UiButton :property="btnRegisterObj" :functionName="'registerTodo'" v-on:registerTodo="registerTodo"></UiButton>
      <UiButton :property="btnReportObj"></UiButton>
    </div>
    <Body :headers="getHeaders" :todoList="getTodoList"></Body>
    <UiButtonTest :method="parentMethod" />
    <Footer></Footer>
  </div>
</template>

<script>
  import Body from '@/components/todo/Body';
  import Footer from '@/components/todo/Footer'
  import Header from '@/components/todo/Header'
  import UiButton from '@/components/ui/ui-button-primary'
  import UiInput from '@/components/ui/ui-input'
  import UiInputCustom from '@/components/ui/ui-input-custom'
  import UiButtonTest from '@/components/ui/ui-button-test'
  import { mapGetters, mapMutations, mapState } from 'vuex'

  export default {
    components:{
      Body, Footer, Header, UiButton, UiInput, UiInputCustom
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
        },
        name:'',
      }
    },
    computed:{
      ...mapGetters(['getTodoTitle', 'getTodoList', 'getHeaders']),
    },
    methods:{
      ...mapMutations(
        ['SET_TODOTITLE']
      ),
      onClickMethod(){
        alert("hello world")
      },
      registerTodo(){
        this.SET_TODOTITLE(this.$refs.todoInput.title)
      },
      parentMethod(){
        console.log('kkkk')
      }
    },
    mounted(){
      this.headers
    }
  }
</script>

<style lang="scss" scoped>

</style>