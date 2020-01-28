<template>
  <div class="row-dialog">
    <UiDialog :closeMethod="onClickAccept">
      <template #header="slotProps">제목</template>
      <template #title="slotProps">
        <UiInput :someValue="dataDto.title" :method="getValue" :rules="titleRules"></UiInput>
      </template>
      <template #contents="slotProps">
        <UiInput :someValue="dataDto.contents" :method="getValue" :rules="contentRules"></UiInput>
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
    return {
      titleRules: [value => !!value || "Required."],
      contentRules:[value => !!value || "Required."]
    };
  },
  methods: {
    getValue(childValue) {
      console.log(childValue);
    },
    onClickAccept() {
      this.closeMethod(this.dataDto);
    }
  },
};
</script>

<style>
</style>