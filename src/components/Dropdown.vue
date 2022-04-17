<template>
  <div class="btn-group my-dropdown">
    <button
      class="btn btn-secondary btn-sm dropdown-toggle"
      type="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      @click="onToggle"
    >
      Choose Gallery:
    </button>
    <div
      :class="[toggle ? 'show' : '', 'dropdown-menu']"
      x-placement="bottom-start"
      style="
        position: absolute;
        transform: translate3d(0px, 31px, 0px);
        top: 0px;
        left: 0px;
        will-change: transform;
      "
    >
      <a
        v-for="(value, name, index) in getAllGalleries"
        :key="index"
        class="dropdown-item"
        @click="addToGalleryHandler(name, imageId)"
        >{{name}}</a
      >
    </div>
  </div>
</template>

<script>
import { Fragment } from "vue-frag";
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Dropdown",

  props: {
    imageId: Number
  },

  components: {
    Fragment,
  },

  computed: {
    ...mapGetters(["getAllGalleries", "getGallery"]),
  },

  data() {
    return {
      toggle: false,
    };
  },

  methods: {
    ...mapActions(["addToGallery"]),

    onToggle() {
      this.toggle = !this.toggle;
    },

    addToGalleryHandler( galleryName, imageId) {
      console.log(this.getGallery(galleryName))
      if (this.getGallery(galleryName).includes(imageId)) {
        
        return
      }
      const payload = {"galleryName": galleryName, "imageId": imageId}
      this.addToGallery({galleryName, imageId});
      console.log('Image added to gallery ' + imageId)
    }
  },
};
</script>

<style scoped>
.my-dropdown {
  position: absolute;
  top: 10px;
  left: 10px;
  opacity: 50%;
}

.my-dropdown:hover {
  opacity: 100%;
}

.my-dropdown .dropdown-menu.show {
  opacity: 100%;
}
</style>