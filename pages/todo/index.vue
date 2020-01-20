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
    <Body :headers="headers" :desserts="desserts"></Body>
    <Footer></Footer>
  </div>
</template>

<script>
  import Body from '@/components/todo/Body';
  import Footer from '@/components/todo/Footer'
  import Header from '@/components/todo/Header'
  import UiButton from '@/components/ui/ui-button-primary'
  import UiInput from '@/components/ui/ui-input'
  import { mapGetters, mapMutations, mapState } from 'vuex'

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
        },
        // headers: [
        //   {
        //     text: 'ID',
        //     align: 'center',
        //     sortable: false,
        //     value: 'ID',
        //   },
        //   { text: 'Title', value: 'Title' },
        //   { text: 'Contents', value: 'Contents' },
        //   { text: 'Created_at', value: 'Created_at' },
        //   { text: 'Updated_at', value: 'Updated_at' },
        // ],
        // desserts: [
        //   {
        //     ID: 1,
        //     Title: 'Vue Todo project',
        //     Contents: 'Finish Some feature',
        //     Created_at: new Date(),
        //     Updated_at: new Date(),
        //   }
        // ],
      }
    },
    computed:{
      ...mapGetters({
        logicData: 'getHelloThere',
        }),
      ...mapState(
        'headers',
        'desserts'
      )
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