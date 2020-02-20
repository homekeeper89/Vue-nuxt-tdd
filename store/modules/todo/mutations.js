
export default {
  SET_BODY(state, body) {
    state.newTodoObj.body = body
  },
  SET_TITLE(state, title) {
    state.newTodoObj.title = title
  },
  SET_TODOOBJ(state) {
    state.newTodoObj.id = state.NEW_TODO.length + 1
    state.NEW_TODO.unshift(state.newTodoObj)
    this.commit("SET_NEWTODO_EMPTY")
  },
  SET_NEWTODO_EMPTY(state) {
    state.newTodoObj = {
      userId:0,
      id: 0,
      body: '',
      title: '',
    }
  },
  SET_NEWTODOS(state, payload){
    state.NEW_TODO = payload
  }
}