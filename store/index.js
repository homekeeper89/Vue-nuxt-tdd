import Vuex from 'vuex';
import todoModule from './modules/todo';

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      api: todoModule
    }
  });
};

export default createStore