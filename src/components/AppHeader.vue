<template>
  <nav class="navbar d-flex justify-content-around py-3">
      <router-link to="/" class="navbar-brand active item">Image Storage</router-link>
    <ul v-if="isLoggedIn" class="nav nav-pills">
      <li class="nav-item">
        <router-link to="/galleries" class="nav-link">Galleries</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/favorites" class="nav-link">Favorites</router-link>
      </li>
      <li class="nav-item">
        <button @click="logout" class="nav-link">Logout</button>
      </li>
    </ul>
      <a @click="login" class="ui item" href="#" v-else>
        Login</a>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters(['isLoggedIn'])
    },
  methods: {
    ...mapActions(['login', 'logout'])
    }
}
</script>

<style>
</style>