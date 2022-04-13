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
      Small button
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
      :id="2+2"
    >
      <a class="dropdown-item" href="#">Cats</a>
      <a class="dropdown-item" href="#">Funny photos</a>
      <a class="dropdown-item" href="#">Something else</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",

  data() {
    return {
      toggle: false,
    };
  },

  methods: {
      onToggle() {
          this.toggle = !this.toggle
      }
  },
};
</script>

<style>
.my-dropdown {
  position: absolute;
  bottom: 160px;
  right: 10px;
  height: 30px;
  opacity: 50%;
}

.my-dropdown:hover {
  opacity: 100%;
}

.my-dropdown .dropdown-menu.show {
  opacity: 100%;
}
</style>