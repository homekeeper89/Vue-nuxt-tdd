
export default {
  SET_TODOTITLE(state, todoTitle){
    state.newTodoTitle = todoTitle
  },
  SET_CONTENTS(state, contents){
    state.newTodoObj.Contents = contents
  },
  SET_TITLE(state, title){
    state.newTodoObj.Title = title
  }

}