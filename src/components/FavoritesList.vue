<template>
  <div class="ui container one column grid">
    <h1>Favorites List</h1>
    <div v-for="image in allImages" :key="image.id" class="ui card column">
      <div v-if="allFavoriteIds.includes(image.id)" class="image">
        {{ debug(image) }}
        <img :src="image.link" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "FavoritesList",
  computed: {
    ...mapGetters(["allFavoriteIds", "allImages"]),
  },
  methods: {
    debug(data) {
      console.log(data);
    },
  },
};
</script>

<style>
</style>