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
    <Body :headers="getHeaders" :todoList="getTodoList" :method="onRowClick" data-cy="todo-table"></Body>
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
import axios from "axios"

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
      // 등록할 경우 > 초기화 하고, mutation을 통해서 데이터 집어 넣는다.
      // 등록할 경우 > 초기화 하고, getter을 통해서 값을 가져온다.
      console.log('index, onClosed');
      const g_dataDto = this.dataDto
      // FUNCTION
      // 초기화 코드
      for(const key in g_dataDto){
        g_dataDto[key] = ''
        g_dataDto.rendererKey = Math.random()
      }
      g_dataDto.rendererKey += 1;
      // console.log(this.dataDto);
    }
  },
  mounted() {
    this.headers;
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then((resp)=>{
      console.log(resp)
    })
  }
};
</script>

<style lang="scss" scoped>
</style>