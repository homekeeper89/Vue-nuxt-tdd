<template>
  <v-btn depressed small :color="property.color" @click="onClick">
    <slot name="button_name"></slot>
  </v-btn>
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
    method: {
      type: Function
    }
  },
  methods: {
    onClick() {
      this.method();
    }
  }
};
</script>