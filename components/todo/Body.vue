<template>
  <div class="todo-body">
    <v-data-table
    :headers="headers"
    :items="todoItem"
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
      todoItem:{
        type:Array
      }
    },
    data () {
      return {
        
      }
    },
    mounted(){
      console.log(this.headers,this.todoItem)
    }
  }
</script>
<style lang="scss" scoped>

</style>