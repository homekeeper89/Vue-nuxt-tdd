<template>
  <div class="row-dialog">
    <UiDialog @onClosed="onClickAccept">
      <template #title="slotProps">제목이에요</template>
      <template #content="slotProps">
        <UiInput :someValue="dataDto.content" :method="getValue"></UiInput>
      </template>
      <template #contents="slotProps">
        <UiInput :someValue="dataDto.contents" :method="getValue" :rules="nameRules"></UiInput>
      </template>
    </UiDialog>
  </div>
</template>

<script>
import UiDialog from "@/components/ui/ui-dialog";
import UiInput from "@/components/ui/ui-input";
export default {
  components: {
    UiDialog,
    UiInput
  },
  props: {
    dataDto: {
      type: Object
    }
  },
  data() {
    return {
    };
  },
  methods: {
    getValue(childValue) {
      console.log(childValue);
    },
    getContents(){
      console.log("kkk")
    },
    onClickAccept() {
      // FIXME
      // why not work?
      console.log('dialog, onClosed')
      this.$parent.$emit('onClosed')
    },
  },
};
</script>

<style>
</style>