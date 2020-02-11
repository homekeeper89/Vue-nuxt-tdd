<template>
  <div class="text-center">
    <v-dialog v-model="getDialog" width="500" @input="v => v || doSomething()">
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-2" dark v-on="on" @click="test" data-cy='todo__dialog__btn--register'>Click Me</v-btn>
      </template>
      <v-card>
        <div class="dialog-title">
          <v-card-title class="headline grey lighten-2" primary-title>
            <slot name="title">기본 제목</slot>
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
          <v-btn color="primary" text @click="onClickAccept" data-cy="todo__dialog__btn--accept">I accept</v-btn>
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
      dialog: false
    };
  },
  computed:{
    ...mapGetters(['getDialog'])
  },
  methods: {
    ...mapMutations({
      'addTodoObj':"SET_TODOOBJ"
    }),
    test() {
      console.log('ui-dialog, sonCreated')
    },
    onClickAccept() {
      this.addTodoObj()
      this.dialog = false;
    },
    doSomething(){
      console.log("hello")
    }
  }
};
</script>