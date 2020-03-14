<template>
  <div class="user--index">
    <div>
      <span>ID 입력</span>
      <UiInput data-cy="user__register__id" :method="getValue"></UiInput>
    </div>
    <div>
      <span>패스워드 입력</span>
      <UiInput data-cy="user__register__pwd" :method="getValue"></UiInput>
    </div>
    <div>
      <span>로그인 등록 버튼</span>
    </div>
    <div>
      <UiButton :property="btnRegisterObj" :method="register" data-cy="user__register__form--btn">
        <template #button_name>등록</template>
      </UiButton>
    </div>
  </div>
</template>
<script>
import UiButton from "@/components/ui/ui-button-primary";
import UiInput from "@/components/ui/ui-input";

export default {
  components: {
    UiButton,
    UiInput
  },
  data() {
    return {
      btnRegisterObj: {
        color: "primary"
      }
    };
  },
  methods: {
    register() {
      alert("hhh");
    },
    getValue(val){
      console.log(val)
    }
  }
};
</script>