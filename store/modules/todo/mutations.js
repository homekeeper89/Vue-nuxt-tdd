
export default {
  SET_TODOTITLE(state, todoTitle){
    state.newTodoTitle = todoTitle
  },
  SET_CONTENTS(state, contents){
    state.newTodoObj.contents = contents
  },
  SET_TITLE(state, title){
    state.newTodoObj.title = title
  },
  SET_TODOOBJ(state){
    state.newTodoObj.id = state.todoList.length + 1
    state.newTodoObj.created_at = new Date();
    state.newTodoObj.updated_at = new Date();
    state.todoList.push(state.newTodoObj)
  }
}