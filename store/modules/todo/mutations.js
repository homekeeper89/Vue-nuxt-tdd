
export default {
  SET_TODOTITLE(state, todoTitle){
    state.newTodoTitle = todoTitle
  },
  SET_CONTENTS(state, contents){
    state.newTodoObj.contents = contents
  },
  SET_TITLE(state, title){
    state.newTodoObj.title = title
  }

}