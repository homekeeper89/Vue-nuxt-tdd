<template>
  <div class="row-dialog">
    <UiDialog :closeMethod="onClickAccept">
      <template #title="slotProps">제목이에요</template>
      <template #content="slotProps">
        <UiInput :someValue="dataDto.content" :method="getValue"></UiInput>
      </template>
      <template #footer="slotProps">
        <UiInput :someValue="dataDto.footer" :method="getValue"></UiInput>
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