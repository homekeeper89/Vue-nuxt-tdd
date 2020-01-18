import Vuex from 'vuex';
import apiModule from './modules/todo';

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      api: apiModule
    }
  });
};

export default createStore