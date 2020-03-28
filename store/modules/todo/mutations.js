
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
  SET_EXISTOBJ(state, obj){
    obj.title = state.newTodoObj.title
    obj.body = state.newTodoObj.body
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
  },
  SET_DIALOG_FLAG_TRUE(state){
    state.dialogFlag = true;
  },
  SET_DIALOG_FLAG_FALSE(state){
    state.dialogFlag = false;
  },
  SET_MODIFY_FLAG_TRUE(state, id){
    state.modifyNumber = id;
    state.modifyFlag = true;
  },
  SET_MODIFY_FLAG_FALSE(state){
    state.modifyNumber = undefined;
    state.modifyFlag = false;
  }
}