<template>
  <v-btn depressed small >테스트 버튼</v-btn>
</template>
<script>
export default {
  props: {
    method:{
      type:Function
    }
  },
  methods: {
    onClick() {
      this.$emit(this.functionName);
    }
  },
};
</script>