import qs from 'qs'
import axios from 'axios'

const ROOT_URL = 'https://jsonplaceholder.typicode.com';
const CLIENT_ID = 'b9fc996212bab65';

export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        };

        window.location = `https://api.imgur.com/oauth2/authorize?${qs.stringify(querystring)}`
    },

    fetchImages(page) {
        return axios.get(`${ROOT_URL}/photos?_page=${page}`)
    },

    fetchComments(postId) {
        return axios.get(`${ROOT_URL}/comments?postId=${postId}`);
    },

    deleteImage(token, deleteHash) {
        return axios.delete(`${ROOT_URL}/3/image/${deleteHash}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },

    addToGallery(token, image) {
        const formData = new FormData();
        formData.append('title', image.name);
        console.log(token)
        return axios.post(`${ROOT_URL}/3/gallery/image/${image.id}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}