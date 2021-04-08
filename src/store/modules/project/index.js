import state from "./state";
// import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";


export default {
    namespaced: true,
    state,
    getters: {

        getId(state) {
            return state.id
        },

        getName(state) {
            return state.name
        },

        getScene(state) {
            return state.scene
        },

        getPath(state) {
            return state.path
        },

        getDir(state) {
            return state.dir
        },

        getStatus(state) {
            return state.status
        },

    },
    actions,
    mutations,
    modules: {}
}