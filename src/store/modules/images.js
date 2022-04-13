import api from '../../api/jsonplace'

const state ={
    images: [],
    page: 1,
    favoriteIds: []
};

const getters = {
    allImages: state => state.images,
    allFavoriteIds: state => state.favoriteIds,
    currentPage: state => state.page
};

const mutations = {
    setImages: (state, images) => {
        state.images = images
    },

    incrementPage: (state) => {
        state.page += 1
    },

    addToFavorites: (state, imageId) => {
        state.favoriteIds.push(imageId);
    }
};

const actions = {
    async fetchImages({  commit, rootState }) {
        const response = await api.fetchImages(state.page);
        commit('incrementPage');
        const combinedImages = [...state.images, ...response.data]
        commit('setImages', combinedImages)
    },

    async addToFavorites({ commit, rootState }, imageId) {
        const { favoriteIds } = rootState.images;
        
        if(!favoriteIds.includes(imageId)){
            commit('addToFavorites', imageId)
        }
    },

    async deleteImage({ rootState }, deleteHash) {
        const { token } = rootState.auth;
        await api.deleteImage(token, deleteHash);
        console.log('image deleted');
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}