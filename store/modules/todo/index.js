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
  newTodoTitle: '',
  newTodoDate: new Date().getDate,
  headers: [
    { text: 'userId', value: 'userId' },
    {
      text: 'id',
      align: 'center',
      sortable: false,
      value: 'ID',
    },
    { text: 'title', value: 'title' },
    { text: 'body', value: 'body' },
  ],
  newTodoObj: {
    userId:0,
    id: 0,
    body: '',
    title: '',
  },
  NEW_TODO: []
  ,
  dialog: false
}

export default {
  state,
  actions,
  mutations,
  getters
}