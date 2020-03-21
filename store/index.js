import Vuex from 'vuex';
import todoModule from './modules/todo';
// import userModule from './modules/user';

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      todoModule,
      // userModule
    }
  });
};

export default createStore