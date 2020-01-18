<template>
  <v-btn depressed small :color="property.color">{{property.name}}</v-btn>
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
    }
  }
};
</script>