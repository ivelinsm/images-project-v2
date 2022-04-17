// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/index'
import VueRouter from 'vue-router'
import AuthHandler from './components/AuthHandler'
import ImageList from './components/ImageList'
import FavoritesList from './components/FavoritesList'
import Galleries from './components/Galleries'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { mapGetters } from 'vuex'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: ImageList },
    { path: '/oauth2/callback', component: AuthHandler },
    { path: '/galleries', component: Galleries },
    { path: '/favorites', component: FavoritesList, beforeEnter: (to, from, next) => {
      if(!this.isLoggedIn){
        next(false)
      } else {
        next()
      }
    } }
  ],
  computed: {...mapGetters(["isLoggedIn"])}
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
