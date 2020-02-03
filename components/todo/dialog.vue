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
    };
  },
  computed:{
    ...mapGetters(["getTodoNew"])
  },
  methods: {
    ...mapMutations(["SET_CONTENTS", "SET_TITLE"]),
    getContents(childValue) {
      console.log("contents", childValue);
      this.$store.commit("SET_CONTENTS", childValue)
    },
    getFooter(childValue){
      console.log("footer", childValue)
      this.SET_TITLE(childValue)
    },
    getContents(){
      console.log("kkk")
    },
    onClickAccept() {
      console.log(this.getTodoNew());
      this.$parent.$emit('onClosed')
    },
  },
};
</script>

<style>
</style>