<template>
  <div class="todo-index">
    <!-- <Header></Header> -->
    <div class="todo-dialog">
      <Dialog @onClosed="onClickAccept" :dataDto="dataDto" :key="dataDto.rendererKey"></Dialog>
    </div>
    <div class="todo-btn-group">
      <UiButton :property="btnRegisterObj" :method="register">
        <template #button_name>등록</template>
      </UiButton>
      <UiButton :property="btnReportObj" :method="cancel">
        <template #button_name>취소</template>
      </UiButton>
    </div>
    <Body :headers="getHeaders" :todoList="getNewTodos" :method="onRowClick" data-cy="todo__table"></Body>
    <Footer></Footer>
  </div>
</template>

<script>
import Body from "@/components/todo/Body";
import Footer from "@/components/todo/Footer";
import Header from "@/components/todo/Header";
import UiButton from "@/components/ui/ui-button-primary";
import Dialog from "@/components/todo/Dialog";
import { mapGetters, mapMutations, mapActions } from "vuex";

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
        body: "default content",
        title: "default title",
        rendererKey: 1
      }
    };
  },
  computed: {
    ...mapGetters(["getTodoTitle", "getTodoList", "getHeaders", "getNewTodos"])
  },
  methods: {
    ...mapMutations([
      "SET_TODOTITLE",
      "SET_DIALOG_FLAG_TRUE",
      "SET_MODIFY_FLAG_TRUE"
    ]),
    ...mapActions(["getAllTodoFromServer"]),
    onRowClick(item) {
      this.dataDto.title = item.title;
      this.dataDto.body = item.body;
      this.SET_DIALOG_FLAG_TRUE();
      this.SET_MODIFY_FLAG_TRUE();
    },
    computed: {
      ...mapGetters({
        logicData: "getHelloThere",
        getTodoItems: "getTodoItems",
        getHeaders: "getHeaders"
      })
    },
    register() {
      console.log("i am register");
    },
    cancel() {
      console.log("i am cancel");
    },
    onClickAccept(childData) {
      // 등록할 경우 > 초기화 하고, mutation을 통해서 데이터 집어 넣는다.
      // 등록할 경우 > 초기화 하고, getter을 통해서 값을 가져온다.
      console.log("index, onClosed");
      const g_dataDto = this.dataDto;
      // FUNCTION
      // 초기화 코드
      for (const key in g_dataDto) {
        g_dataDto[key] = "";
        g_dataDto.rendererKey = Math.random();
      }
      g_dataDto.rendererKey += 1;
    }
  },
  mounted() {
    this.headers;
    this.getAllTodoFromServer();
  }
};
</script>

<style lang="scss" scoped>
</style>