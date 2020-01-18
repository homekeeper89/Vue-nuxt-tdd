<template>
  <div class="todo-index">
    <Header></Header>
    <div>
      <UiButton :property="btnRegisterObj"></UiButton>
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

  export default {
    components:{
      Body, Footer, Header, UiButton
    },
    data(){
      return{
        btnRegisterObj:{
          color:"primary",
          name:'등록'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>