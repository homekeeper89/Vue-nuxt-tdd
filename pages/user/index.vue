<template>
  <div class="user--index">
    <div>
      <span>id 입력</span>
    </div>
    <div>
      <span>pw 입력</span>
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
export default {
  components: {
    UiButton
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
    }
  }
};
</script>