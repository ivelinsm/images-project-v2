<template>
  <div>
    <div class="d-flex justify-content-between">
      <h1>Galleries</h1>
      <ModalForm @create="createGalleryHandler" />
    </div>
    <Alert
      @close="alert.show = false"
      :type="alert.type"
      :show="alert.show"
    >
      <template v-slot:strong>{{ alert.title }}</template>
      <template v-slot:body>
        {{ alert.body }}
      </template>
    </Alert>

    <ul class="list-group">
      <li
        @click="selectGallery(name)"
        v-for="(value, name, index) in getAllGalleries"
        :key="index"
        class="
          list-group-item
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <span class="flex-grow-1">{{ name }}</span>
        <span class="badge bg-secondary badge-primary badge-pill">{{
          value.length
        }}</span>
        <button
          @click="deleteGalleryHandler(name)"
          type="button"
          class="btn-close"
        ></button>
      </li>
    </ul>
    <GalleryShowCase :gallery="selectedGalleryImages(selectedGallery)" :galleryName="selectedGallery" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ModalForm from "./Helpers/ModalForm.vue";
import ModalConfirmation from "./Helpers/ModalConfirmation.vue";
import Alert from "./Helpers/Alert.vue";
import GalleryShowCase from "./GalleryShowCase.vue"

export default {
  name: "Galleries",

  data() {
    return {
      alert: {
        show: false,
        title: "",
        body: "",
        type: "danger",
      },

      selectedGallery: 'favorites'
    };
  },

  components: {
    ModalForm,
    Alert,
    ModalConfirmation,
    GalleryShowCase
  },

  computed: {
    ...mapGetters(["getAllGalleries", "getGallery", "allImages"]),
    galleryNames() {
      let names = Object.keys(this.getAllGalleries);
      return names;
    }
    
  },

  methods: {
    ...mapActions(["createGallery", "deleteGallery"]),

    createGalleryHandler(enteredName) {
      console.log(this.getAllGalleries.hasOwnProperty(enteredName));

      if (this.getAllGalleries.hasOwnProperty(enteredName)) {
        this.alert = {
          show: true,
          title: "Error!",
          body: "You have already created a gallery with that name.",
          type: "danger",
        };
        return;
      }
      this.createGallery(enteredName);

      this.alert = {
        show: true,
        title: "Success!",
        body: `You created a gallery with the name "${enteredName}"`,
        type: "success",
      };
    },

    deleteGalleryHandler(name) {
      if (name === "favorites") {
        this.alert = {
          show: true,
          title: "Error!",
          body: "You cannot delete that gallery",
          type: "danger",
        };
        return;
      }

      this.deleteGallery(name);

      this.alert = {
          show: true,
          title: "Deleted Succesfully!",
          body: `You deleted "${name}"`,
          type: "warning",
        };
    },

    selectGallery(galleryName) {
      this.selectedGallery = galleryName
    },

    selectedGalleryImages(galleryName) {
      console.log(this.allImages.filter(image => {
        if(this.getGallery(galleryName).includes(image.id)){
          return image
        }
      }))
      return this.allImages.filter(image => {
        if(this.getGallery(galleryName).includes(image.id)){
          return image
        }
      });
    }
  },
};
</script>

<style scoped>
.list-group {
  margin-top: 16px;
  cursor: pointer;
}

.badge {
  margin-right: 8px;
}
</style>