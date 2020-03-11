<template>
  <div>
    Hello World
    <UiButton :property="btnRegisterObj" :method="register" data-cy="user__register--btn">
      <template #button_name>등록</template>
    </UiButton>
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
      },
    }
  },
  methods: {
    register(){
      alert("hhh")
    }
  }
};
</script>