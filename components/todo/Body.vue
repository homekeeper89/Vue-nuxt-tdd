<template>
  <div class="todo-body">
    <v-data-table :headers="headers" :items="todoList" :items-per-page="5" class="elevation-1">
      <template v-slot:body="{ items }">
        <tbody>
          <tr v-for="item in items" :key="item.ID" @click="onRowClick(item.ID)">
            <td>{{ item.ID }}</td>
            <td>{{ item.Title }}</td>
            <td>{{ item.Contents }}</td>
            <td>{{ item.Created_at }}</td>
            <td>{{ item.Updated_at }}</td>
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
  }
};
</script>
<style lang="scss" scoped>
</style>