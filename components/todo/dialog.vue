<template>
  <div class="row-dialog">
    <UiDialog @onClosed="onClickAccept">
      <template #title>제목이에요</template>
      <template #content>
        <UiInput :someValue="dataDto.title" :method="getContents" data-cy="todo__dialog__input--title"></UiInput>
      </template>
      <template #title>
        <UiInput :someValue="dataDto.content" :method="getTitle" data-cy="todo__dialog__input--content"></UiInput>
      </template>
    </UiDialog>
  </div>
</template>

<script>
import UiDialog from "@/components/ui/ui-dialog";
import UiInput from "@/components/ui/ui-input";
import { mapGetters, mapMutations, mapState } from "vuex";

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
      dataEntity:''
    };
  },
  computed:{
    ...mapGetters(["getTodoNew"])
  },
  methods: {
    ...mapMutations(["SET_CONTENTS", "SET_TITLE"]),
    getContents(childValue) {
      this.SET_CONTENTS(childValue)
    },
    getTitle(childValue){
      this.SET_TITLE(childValue)
    },
    onClickAccept() {
      this.$parent.$emit('onClosed')
    },
  },
  mounted(){
    console.log(this.dataDto)
  }
};
</script>

<style>
</style>