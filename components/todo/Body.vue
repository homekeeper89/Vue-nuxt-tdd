<template>
  <div class="todo-body">
    <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
  </div>
</template>

<script>
  export default {
    props:{
      headers:{
        type:Array
      },
      desserts:{
        type:Array
      }
    },
    data () {
      return {
        
      }
    },
  }
</script>
<style lang="scss" scoped>

</style>