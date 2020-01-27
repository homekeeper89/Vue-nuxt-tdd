<template>
  <div class="row-dialog">
    <UiDialog :closeMethod="onClickAccept">
      <template #header="slotProps">제목</template>
      <template #title="slotProps">
        <UiInput :someValue="dataDto.title" :method="getValue"></UiInput>
      </template>
      <template #contents="slotProps">
        <UiInput :someValue="dataDto.contents" :method="getValue"></UiInput>
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
    closeMethod: {
      type: Function
    },
    dataDto: {
      type: Object
    }
  },
  data() {
    return {};
  },
  methods: {
    getValue(childValue) {
      console.log(childValue);
    },
    onClickAccept() {
      this.dataDto.contents = null;
      this.closeMethod(this.dataDto);
    }
  }
};
</script>

<style>
</style>