<template>
  <div class="row-dialog">
    <UiDialog :closeMethod="onClickAccept">
      <template #header="slotProps">제목</template>
      <template #title="slotProps">
        <UiInput :someValue="dataDto.title" :method="getValue" :rules="nameRules"></UiInput>
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
    closeMethod: {
      type: Function
    },
    dataDto: {
      type: Object
    }
  },
  data() {
    return {
      titleRules: [() => !!value || "Required."],
      contentRules:[() => !!value && value.length <= 5 || 'value must be less than 5 characters'],
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
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
      this.closeMethod(this.dataDto);
    }
  },
};
</script>

<style>
</style>