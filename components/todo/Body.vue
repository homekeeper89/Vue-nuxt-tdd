<template>
  <div class="todo-body">
    <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'ID',
            align: 'center',
            sortable: false,
            value: 'ID',
          },
          { text: 'Title', value: 'Title' },
          { text: 'Contents', value: 'Contents' },
          { text: 'Created_at', value: 'Created_at' },
          { text: 'Updated_at', value: 'Updated_at' },
        ],
        desserts: [
          {
            ID: 1,
            Title: 'Vue Todo project',
            Contents: 'Finish Some feature',
            Created_at: new Date(),
            Updated_at: new Date(),
          }
        ],
      }
    },
  }
</script>
<style lang="scss" scoped>

</style>