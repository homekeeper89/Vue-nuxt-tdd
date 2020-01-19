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
  hello : 'hello world'
}

export default {
  state,
  actions,
  mutations,
  getters
}