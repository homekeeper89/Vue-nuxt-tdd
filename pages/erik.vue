<template>
  <div>
    <h2>{{message}}</h2>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data(){
      return{
        message:'hello world'
      }
    }
  })
</script>

<style scoped>

</style>