<template>
  <v-text-field :rules="rules" v-model="title"/>
</template>
<script>
  export default {
    data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value || '').length <= 10 || 'Max 20 characters',
      ],
      title:''
    }),
  }
</script>