<template>
  <div v-if="isLoggedIn" class="container">
    <div v-if="modalVisible" class="ui dimmer modals page active visible">
      <Modal
        @confirm="deleteHandler(deleteHash)"
        @cancel="modalVisible = false"
      >
        <template v-slot:header> Are you sure? </template>
        <template v-slot:body>
          Do you really want to delete this photo? This procces cannot be
          undone.
        </template>
        <template v-slot:buttons> </template>
      </Modal>
    </div>
    <div
      v-for="image in allImages"
      :key="image.id"
      class="card mx-auto"
      style="width: 18rem"
    >
        <img v-lazyload :data-src="image.url" alt="image.url" />
        <button class="btn btn-ovarlay-icon">
          <i class="fa-regular fa-star fa-2x"></i>
        </button>
        <Dropdown :imageId="image.id"/>

      <div class="card-body">
        <h5>{{ image.title }}</h5>
      </div>
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button
          @click="showComments(image.id)"
          type="button"
          class="btn btn-outline-secondary"
        >
          Show Comments
        </button>
        <button type="button" class="btn btn-outline-primary">
          Add to Favorites
        </button>
      </div>
    </div>
    <observer v-on:intersect="intersected" />
  </div>
  <h3 v-else class="text-center">
    Redirecting to Login Page in {{ countDown }} seconds...
  </h3>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SingleImage from "./SingleImage.vue";
import Modal from "./Modal.vue";
import lazyload from "../directives/lazyload";
import Observer from "./Observer.vue";
import Dropdown from "./Dropdown.vue";

export default {
  name: "ImageList",

  data() {
    return {
      modalVisible: false,
      deleteHash: "",
      countDown: 4,
      comments: {
        1: null,
        2: null,
      },
      dropdownToggled: false,
    };
  },
  components: { SingleImage, Modal, Observer, Dropdown },

  computed: {
    ...mapGetters(["allImages", "isLoggedIn"]),
    isToggled() {},
  },

  methods: {
    ...mapActions(["login", "fetchImages", "deleteImage", "addToFavorites"]),

    deleteHandler(deleteHash) {
      this.modalVisible = false;
      this.deleteImage(deleteHash);

      setTimeout(() => {
        this.fetchImages();
      }, 200);
    },

    triggerModal() {
      this.modalVisible = true;
    },

    toggleDropdown() {
      this.dropdownToggled = !this.dropdownToggled;
    },

    publish(image) {
      console.log(image);
      this.addToGallery(image);
    },

    showComments(postId) {
      console.log(postId);
    },

    countDownTimer() {
      if (!this.isLoggedIn) {
        if (this.countDown >= 1) {
          setTimeout(() => {
            this.countDown -= 1;
            this.countDownTimer();
          }, 1000);
        } else {
          this.login();
        }
      }
    },

    intersected() {
      this.fetchImages();
    },
  },

  directives: {
    lazyload,
  },

  watch: {
    isLoggedIn(newValue, oldValue) {
      if (!newValue) {
        this.countDownTimer();
      }
    },
  },

  mounted() {
    this.countDownTimer();
  },
};
</script>

<style>
.card {
  margin: 20px 0px;
  min-height: 400px;
}

.btn-ovarlay-icon {
  position: absolute;
  top: 0px;
  right: -8px;
  height: 30px;
  opacity: 50%;
}
</style>