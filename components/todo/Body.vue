<template>
  <div class="todo-body">
    <v-data-table :headers="headers" :items="todoList" :items-per-page="5" class="elevation-1">
      <template v-slot:body="{ items }">
        <tbody>
          <tr v-for="item in items" :key="item.id" @click="onRowClick(item)">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.contents }}</td>
            <td>{{ item.created_at }}</td>
            <td>{{ item.updated_at }}</td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
  </div>
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
    onRowClick(itemId) {
      this.method(itemId);
    }
  },
  mounted() {
    console.log(this.headers, this.todoItem);
  }
};
</script>
<style lang="scss" scoped>
</style>