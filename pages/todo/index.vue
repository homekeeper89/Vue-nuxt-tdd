<template>
  <div class="todo-index">
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>

<script>
  import Body from '@/components/todo/Body';
  import Footer from '@/components/todo/Footer'
  import Header from '@/components/todo/Header'

  export default {
    components:{
      Body, Footer, Header
    }
  }
</script>

<style lang="scss" scoped>

</style>