<template>
  <div class="row-dialog">
    <UiDialog @onClosed="onClickAccept">
      <template #main>제목이에요</template>
      <template #content>
        <UiInput :someValue="dataEntity.title" :method="getTitle" data-cy="todo__dialog__input--title"></UiInput>
      </template>
      <template #title>
        <UiInput :someValue="dataEntity.body" :method="getBody" data-cy="todo__dialog__input--content"></UiInput>
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
    ...mapGetters(["getTodoNew"]),
  },
  watch:{
    dataDto(oldVal, newVal){
      this.dataEntity = newVal
    }
  },
  methods: {
    ...mapMutations(["SET_BODY", "SET_TITLE"]),
    getBody(childValue) {
      console.log("body", childValue)
      this.SET_BODY(childValue)
    },
    getTitle(childValue){
      console.log("title", childValue)
      this.SET_TITLE(childValue)
    },
    onClickAccept() {
      this.$parent.$emit('onClosed')
    },
  },
  mounted(){
    this.dataEntity = this.dataDto;
    console.log("마운티드", this.dataDto)
  }
};
</script>

<style>
</style>