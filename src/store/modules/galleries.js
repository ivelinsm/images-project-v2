import api from '../../api/jsonplace'
import qs from 'qs'
import { router } from '../../main'

const state = {
    galleries: {
        favorites: []
    }
};

const getters = {
    getGallery: (state) => (galleryName) => {
        return state.galleries[galleryName]
    },

    getAllGalleries: (state) => {
        return state.galleries
    }
};

const mutations = {
    addToGallery: (state, galleryName, imageId) => {
        if(state.galleries.hasOwnProperty(galleryName)){
            state.galleries[galleryName].push(imageId);
        }
    },

    createGallery: (state, galleryName) => {
        if(!state.galleries.hasOwnProperty(galleryName)){
            state.galleries[galleryName] = [];
        }
    }
};

const actions = {
    addToGallery: ({ commit }, galleryName, imageId) => {
        commit('addToGallery', galleryName, imageId);
    },

    createGallery: ({ commit }, galleryName) => {
        commit('createGallery', galleryName);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}