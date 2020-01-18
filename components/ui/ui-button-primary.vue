<template>
  <v-btn depressed small :color="property.color" @click="onClick">{{property.name}}</v-btn>
</template>
<script>
export default {
  props: {
    property: {
      type: Object,
      default: {
        color: "primary",
        name: "primary"
      }
    },
    functionName:{
      type: String
    }
  },
  methods:{
    onClick(){
      this.$emit(this.functionName)
    }
  }
};
</script>