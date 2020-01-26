<template>
  <v-text-field :rules="rules" v-model="title" :label="label" @change="onChange"/>
</template>
<script>
  export default {
    props: {
      label:{
        type:String,
      },
      someValue:{
        type:String,
      },
      method:{
        type:Function
      }
    },
    methods:{
      onChange(){
        this.method(this.title)
      }
    },
    data: () => ({
      rules: [
        value => !!value || 'Required.',
      ],
      title:''
    }),
    mounted(){
      this.title = this.someValue
    }
  }
</script>