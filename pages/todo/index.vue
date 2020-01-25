<template>
  <div class="todo-index">
    <Header></Header>
    <div class="todo-input">
      <UiInput ref="todoInput"></UiInput>
    </div>
    <div class="todo-btn-group">
      <UiButton :property="btnRegisterObj" :method="register">
        <template #button_name>
          등록
        </template>
      </UiButton>
      <UiButton :property="btnReportObj" :method="cancel">
        <template #button_name>
          취소
        </template>
      </UiButton>
    </div>
    <Body :headers="getHeaders" :todoList="getTodoList"></Body>
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
      Body, Footer, Header, UiButton, UiInput, UiInputCustom, UiButtonTest
    },
    data(){
      return{
        btnRegisterObj:{
          color:"primary",
        },
        btnReportObj:{
          color:"error",
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
      register(){
        console.log("i am register")
      },
      cancel(){
        console.log("i am cancel")
      }
    },
    mounted(){
      this.headers
    }
  }
</script>

<style lang="scss" scoped>

</style>