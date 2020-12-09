import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
  count: 1
}
const mutations = {
  add(state,num) {
    state.count += num;
  },
  reduce(state,num) {
    state.count -= num;
  }
}
// state.count = 2;
const getters = {
  newCount: (state)=>{
    return state.count ** 2;
  }
}
const actions = {
  addAction(context) {
    context.commit('add',5)//提交给Vuex
  }
}

// const modulA = {
//   state,
//   mutations,
//   getters,
//   actions
// };

// const state2 = {
//   count:2
// }
// const modulB = {
//   state2
// }

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

// export default new Vuex.Store({
//   modules: {
//     a: modulA,
//     b: modulb
//   }
// })