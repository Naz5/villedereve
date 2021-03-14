import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        passedSteps: []
    },
    mutations: {
        passStep (state, passedStep) {
            state.passedSteps.push(passedStep)
        }
    }
})

export default store;