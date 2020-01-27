<template>
  <div class="todo-index">
    <!-- <Header></Header> -->
    <div class="todo-dialog">
      <Dialog :closeMethod="onClickAccept" :dataDto="dataDto"></Dialog>
    </div>
    <div class="todo-btn-group">
      <UiButton :property="btnRegisterObj" :method="register">
        <template #button_name>등록</template>
      </UiButton>
      <UiButton :property="btnReportObj" :method="cancel">
        <template #button_name>취소</template>
      </UiButton>
    </div>
    <Body :headers="getHeaders" :todoList="getTodoList" :method="onRowClick"></Body>
    <Footer></Footer>
  </div>
</template>

<script>
import Body from "@/components/todo/Body";
import Footer from "@/components/todo/Footer";
import Header from "@/components/todo/Header";
import UiButton from "@/components/ui/ui-button-primary";
import Dialog from "@/components/todo/Dialog";
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  components: {
    Body,
    Footer,
    Header,
    Dialog,
    UiButton
  },
  data() {
    return {
      btnRegisterObj: {
        color: "primary"
      },
      btnReportObj: {
        color: "error"
      },
      name: "",
      dataDto: {
        id: 0,
        title: "",
        contents: "",
        created_at: "",
        updated_at: ""
      }
    };
  },
  computed: {
    ...mapGetters(["getTodoTitle", "getTodoList", "getHeaders"])
  },
  watch: {
    dataDto(oldValue, newValue) {
      console.log("watch", newValue.contents);
      return newValue;
    }
  },
  methods: {
    ...mapMutations(["SET_TODOTITLE"]),
    onClickMethod() {
      alert("hello world");
    },
    registerTodo() {
      this.SET_TODOTITLE(this.$refs.todoInput.title);
    },
    register() {
      console.log("i am register");
    },
    cancel() {
      console.log("i am cancel");
    },
    onClickAccept(childData) {
      console.log(childData);
    },
    onRowClick(clickedRowItem) {
      this.dataDto = clickedRowItem;
    }
  },
  mounted() {
    this.headers;
  }
};
</script>

<style lang="scss" scoped>
</style>