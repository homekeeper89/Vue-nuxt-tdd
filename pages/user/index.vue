<template>
  <div class="user--index">
    <div>
      <span>ID 입력</span>
      <UiInput data-cy="user__register__id" :method="getIdValue"></UiInput>
    </div>
    <div>
      <span>패스워드 입력</span>
      <UiInput data-cy="user__register__pwd" :method="getPwdValue"></UiInput>
    </div>
    <div>
      <span>로그인 등록 버튼</span>
    </div>
    <div>
      <UiButton :property="btnRegisterObj" :method="loginUserBtn" data-cy="user__login__btn">
        <template #button_name>등록</template>
      </UiButton>
    </div>
    <div>
      <UiDialogForm>테스트 다이얼로그</UiDialogForm>
    </div>
  </div>
</template>
<script>
import UiButton from "@/components/ui/ui-button-primary";
import UiInput from "@/components/ui/ui-input";
import UiDialogForm from "@/components/ui/ui-dialog-form"
import {mapActions} from 'vuex';

export default {
  components: {
    UiButton,
    UiInput,
    UiDialogForm
  },
  data() {
    return {
      btnRegisterObj: {
        color: "primary"
      }
    };
  },
  methods: {
    loginUserBtn() {
      this.loginUser()
    },
    getIdValue(val){
      console.log(val)
    },
    getPwdValue(val){
      console.log(val)
    }
  }
};
</script>