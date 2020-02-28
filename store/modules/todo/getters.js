export default {
  getTodoTitle: state => state.newTodoTitle,
  getTodoList:state => state.todoList,
  getHeaders:state => state.headers,
  getTodoNew:state=>state.newTodoObj,
  getNewTodos:state=>state.NEW_TODO,
  getDialogFlag:state=>state.dialogFlag,
  getModifyFlag:state=>state.modifyFlag
}