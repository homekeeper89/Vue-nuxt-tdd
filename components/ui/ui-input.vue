<template>
  <v-text-field :rules="parentRules" v-model="value" :label="label" @change="onChange" />
</template>
<script>
export default {
  props: {
    label: {
      type: String
    },
    someValue: {
      type: String
    },
    method: {
      type: Function
    },
    parentRules: {
      type: Array
    }
  },
  methods: {
    onChange() {
      this.method(this.childValue);
    }
  },
  data() {
    return {
      rules: [value => !!value || "Required."],
      value: "",
      childValue: ""
    };
  },
  mounted() {
    this.value = this.someValue;
  }
};
</script>