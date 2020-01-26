<template>
  <v-text-field :rules="rules" v-model="title" :label="label"/>
</template>
<script>
  export default {
    props: {
      label:{
        type:String,
      }
    },
    data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value || '').length <= 10 || 'Max 20 characters',
      ],
      title:''
    }),
  }
</script>