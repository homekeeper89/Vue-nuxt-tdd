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
    { text: 'Title', value: 'Title' },
    { text: 'Contents', value: 'Contents' },
    { text: 'Created_at', value: 'Created_at' },
    { text: 'Updated_at', value: 'Updated_at' },
  ],
  todoList: [
    {
      ID: 1,
      Title: 'Vue Todo project',
      Contents: 'Finish Some feature',
      Created_at: new Date(),
      Updated_at: new Date(),
    },
    {
      ID: 2,
      Title: 'Vue Todo project',
      Contents: 'Finish Some feature',
      Created_at: new Date(),
      Updated_at: new Date(),
    }
  ],
}

export default {
  state,
  actions,
  mutations,
  getters
}