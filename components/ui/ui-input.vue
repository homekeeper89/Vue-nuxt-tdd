<template>
  <v-text-field :rules="parentRules" v-model="value" :label="label" @change="onChange(value)" />
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
<<<<<<< HEAD
    onChange(value) {
      console.log("나는 뭐지????", this.method)
      this.method(value);
=======
    onChange() {
      this.method(this.value);
>>>>>>> dbaa18083a84a61699785ed517fae25a77f35c39
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