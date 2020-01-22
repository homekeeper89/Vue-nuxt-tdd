<template>
  <v-btn depressed small @click="test">테스트 버튼</v-btn>
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