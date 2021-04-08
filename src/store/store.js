import Vue from 'vue'
import Vuex from 'vuex'

import project from "./modules/project/index";


Vue.use(Vuex)



export default new Vuex.Store({
    modules: {
        project
    },
    strict: process.env.NODE_ENV !== 'production'
})