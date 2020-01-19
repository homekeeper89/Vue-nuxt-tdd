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
  import { mapGetters, mapMutations } from 'vuex'

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
    computed:{
      ...mapGetters({
        logicData: 'getHelloThere',
        }),
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
        console.log(this.logicData)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>