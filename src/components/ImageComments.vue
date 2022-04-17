<template>
  <fragment>
    <div class="btn-group" role="group" aria-label="Basic outlined example">
      <button
        @click="showComments(imageId)"
        type="button"
        class="btn btn-outline-secondary"
      >
        {{ toggled ? "Hide" : "Show" }} Comments
      </button>
    </div>
    <div class="comments container">
      <div
        v-for="comment in comments"
        :key="comment.id"
        class="comment media-body"
      >
        <p class="media-heading user_name">{{ comment.email }}</p>
        <span>{{ comment.name }} </span>
      </div>
    </div>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-frag'
import api from "../api/jsonplace";

export default {
  name: "ImageComments",

  components: {
      Fragment
  },

  props: {
    imageId: Number,
  },

  data() {
    return {
      comments: [],
      toggled: false,
    };
  },

  methods: {
    async showComments(postId) {
      if (this.toggled) {
        this.comments = [];
        this.toggled = false;
        return;
      }

      const res = await api.fetchComments(postId);
      (this.comments = res.data), (this.toggled = true);
    },
  },
};
</script>

<style scoped>
span {
  font-size: 13px;
}

.user_name {
  font-weight: bold;
  position: relative;
  top: 10px;
}

.comment {
  padding-bottom: 5px;
  border-bottom: 1px solid rgb(94, 94, 94);
}

.comment:last-child {
    border: none;
}
</style>