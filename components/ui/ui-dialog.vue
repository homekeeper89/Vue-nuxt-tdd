<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-2" dark v-on="on">Click Me</v-btn>
      </template>
      <v-card>
        <div class="dialog-title">
          <v-card-title class="headline grey lighten-2" primary-title>
            <slot name="title">
              기본 제목
            </slot>
          </v-card-title>
        </div>
        <div class="dialog-content">
          <v-card-text>
            <slot name="content">
              기본 이름
            </slot>
          </v-card-text>
        </div>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">I accept</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>