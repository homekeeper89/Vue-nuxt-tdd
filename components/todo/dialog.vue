<template>
  <div class="">
    <UiDialog>
      <template #title="slotProps">
        제목이에요
      </template>
      <template #content="slotProps">
        <UiInput :someValue="someValue" :method="getValue"></UiInput>
      </template>
    </UiDialog>
  </div>
</template>

<script>
import UiDialog from '@/components/ui/ui-dialog'
import UiInput from '@/components/ui/ui-input'
export default {
  components:{
    UiDialog, UiInput
  },
  data(){
    return{
      someValue:'hello World'
    }
  },
  methods:{
    getValue(childValue){
      console.log(childValue)
    }
  }
}
</script>

<style>

</style>