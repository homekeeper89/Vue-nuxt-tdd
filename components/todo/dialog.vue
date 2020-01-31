<template>
  <div class="row-dialog">
    <UiDialog @onClosed="onClickAccept">
      <template #title>제목이에요</template>
      <template #content>
        <UiInput :someValue="dataDto.content" :method="getContents" data-cy="todo--input--content"></UiInput>
      </template>
      <template #footer>
        <UiInput :someValue="dataDto.footer" :method="getFooter" data-cy="todo--input--footer"></UiInput>
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
    getContents(childValue) {
      console.log("contents", childValue);
    },
    getFooter(childValue){
      console.log("footer", childValue)
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