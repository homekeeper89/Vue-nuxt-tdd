<template>
  <div class="todo-body">
    <v-data-table :headers="headers" :items="todoList" :items-per-page="5" class="elevation-1">
      <template v-slot:body="{ items }">
        <tbody>
          <tr v-for="item in items" :key="item.id" @click="onRowClick(item)">
            <td>{{ item.userId }}</td>
            <td data-cy="todo__table__id">{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.body }}</td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array
    },
    todoList: {
      type: Array
    },
    method: {
      type: Function
    }
  },
  data() {
    return {};
  },
  methods: {
    onRowClick(item) {
      this.method(item);
    }
  },
  mounted() {
  }
};
</script>
<style lang="scss" scoped>
</style>