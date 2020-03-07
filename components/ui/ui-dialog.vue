<template>
  <div class="text-center">
    <v-dialog v-model="isDialogOn" width="500" @input="v => v || doSomething()">
      <template v-slot:activator="{ on }">
        <v-btn
          color="red lighten-2"
          dark
          v-on="on"
          @click="test"
          data-cy="todo__dialog__btn--register"
        >Click Me</v-btn>
      </template>
      <v-card>
        <div class="dialog-title">
          <v-card-title class="headline grey lighten-2" primary-title>
            <slot name="main">기본 제목</slot>
          </v-card-title>
        </div>
        <div class="dialog-title">
          <v-card-text>
            <slot name="content">기본 이름</slot>
          </v-card-text>
        </div>
        <div class="dialog-contents">
          <v-card-text>
            <slot name="title">기본 이름</slot>
          </v-card-text>
        </div>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="onClickAccept"
            data-cy="todo__dialog__btn--accept"
          >I accept</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      // isDialogOn: false
    };
  },
  computed:{
    ...mapMutations(["SET_DIALOG_FLAG_FALSE"]),
    ...mapGetters(['getDialogFlag']),
    isDialogOn : {
      get:function(){
        return this.getDialogFlag
      },
      set:function(){
        console.log("isDialogOn Set works")
        this.setFalse()
      }
    }
  },
  methods: {
    ...mapMutations({
      addTodoObj: "SET_TODOOBJ",
      setDialogFlagFalse:"SET_DIALOG_FLAG_FALSE",
      setModifyFlagFalse:"SET_MODIFY_FLAG_FALSE"
    }),
    test() {
      console.log("ui-dialog, sonCreated");
    },
    setFalse(){
      this.setDialogFlagFalse()
      this.setModifyFlagFalse()
    },
    onClickAccept() {
      this.addTodoObj();
      this.isDialogOn = false
    },
    doSomething() {
      this.isDialogOn = false;
    }
  }
};
</script>