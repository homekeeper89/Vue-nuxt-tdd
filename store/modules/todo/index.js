import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const defaultState = {
  hello: 'salut I am module api'
}

const inBrowser = typeof window !== 'undefined';
// if in browser, use pre-fetched state injected by SSR
// const state = (inBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__.page : defaultState;
const state = {
  newTodoTitle:'',
  newTodoDate:new Date().getDate,
  headers: [
    {
      text: 'ID',
      align: 'center',
      sortable: false,
      value: 'ID',
    },
    { text: 'Title', value: 'title' },
    { text: 'Contents', value: 'contents' },
    { text: 'Created_at', value: 'created_at' },
    { text: 'Updated_at', value: 'updated_at' },
  ],
  todoList: [
    {
      id: 1,
      title: 'Vue Todo project',
      contents: 'Start Some feature',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      title: 'Vue Todo project',
      contents: 'Finish Some feature',
      created_at: new Date(),
      updated_at: new Date(),
    }
  ],
}

export default {
  state,
  actions,
  mutations,
  getters
}