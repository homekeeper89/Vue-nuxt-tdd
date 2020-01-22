<template>
  <v-btn depressed small @click="test">
    <slot name="sidebar"></slot>
  </v-btn>
</template>
<script>
export default {
  props: {
    method:{
      type:Function
    }
  },
  data(){
    return{
      value: 'I am the child.'
    }
  },
  methods: {
    test(){
      this.method(this.value)
    }
  },
  mounted(){
  }
};
</script>