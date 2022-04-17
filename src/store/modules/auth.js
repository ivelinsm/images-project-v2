import api from '../../api/jsonplace'
import qs from 'qs'
import { router } from '../../main'

const state ={
    token: window.localStorage.getItem('imgur_token')
};

const getters = {
    isLoggedIn: state => !!state.token
};

const mutations = {
    setToken: (state, token) => {
        state.token = token
    }
};

const actions = {
    login: ({ commit }) => {
        commit('setToken', "123123123ss");
        return
        api.login();
    },

    logout: ({ commit }) => {
        commit('setToken', null);
        window.localStorage.removeItem('imgur_token');
        this.$router.go(this.$router.currentRoute)
    },

    finalizeLogin: ({ commit }, hash) => {
        const query = qs.parse(hash.replace('#', ''));

        commit('setToken', query.access_token);
        window.localStorage.setItem('imgur_token', query.access_token)
        router.push('/')
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}