<template>
  <div v-if="show" :class="['alert-' + type , 'alert alert-dismissible fade alert-inline', show ? 'show' : '']" role="alert">
    <strong><slot name="strong"></slot></strong> <slot name="body"></slot>
    <button
      type="button"
      class="btn-close"
      @click="emitClose"
    ></button>
  </div>
</template>

<script>

export default {
    name: "Alert",
    props: {
      type: String,
      show: Boolean
    },
    methods: {
      emitClose() {
        this.$emit("close");
      }
    }
};
</script>

<style>
.alert {
  margin-top: 16px;
}
</style>