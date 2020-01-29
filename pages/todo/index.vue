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
    <Body :headers="getHeaders" :todoList="getTodoList" data-cy="todo-table"></Body>
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
        content: "",
        footer: "",
        rendererKey : 1,
      }
    };
  },
  computed: {
    ...mapGetters(["getTodoTitle", "getTodoList", "getHeaders"])
  },
  methods: {
    ...mapMutations(["SET_TODOTITLE"]),
    onClickMethod() {
      alert("hello world");
    },
    computed:{
      ...mapGetters({
        logicData: 'getHelloThere',
        getTodoItems:'getTodoItems',
        getHeaders:'getHeaders'
        })
    },
    register() {
      console.log("i am register");
    },
    cancel() {
      console.log("i am cancel");
    },
    onClickAccept(childData){
      console.log('index, onClosed');
      const g_dataDto = this.dataDto
      // FUNCTION
      // 초기화 코드
      for(const key in g_dataDto){
        g_dataDto[key] = ''
      }
      g_dataDto.rendererKey += 1;
      console.log(this.dataDto);
    }
  },
  mounted() {
    this.headers;
  }
};
</script>

<style lang="scss" scoped>
</style>