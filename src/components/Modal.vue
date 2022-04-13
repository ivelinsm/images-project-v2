<template>
  <div class="ui basic modal active visible">
    <!-- Icon -->
    <div class="ui icon header">
      <i class="trash icon"></i>
      <!-- Header -->
      <slot name="header"> Default Header </slot>
    </div>
    <div class="content">
      <!-- Body -->
      <p>
        <slot name="body"> Default body </slot>
      </p>
    </div>
    <!-- Footer -->
    <slot name="footer">
      <div class="actions">
        <slot name="cancel-button">
          <a
            @click="emitCancel"
            class="ui black basic cancel inverted button"
          >
            <i class="remove icon"></i>Cancel
          </a>
        </slot>
        <slot name="confirm-button">
        <a @click="emitConfirm" class="ui red ok inverted button">
          <i class="trash icon"></i>Delete
        </a>
        </slot>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    emitCancel(event) {
      this.$emit("cancel");
    },
    emitConfirm() {
      this.$emit("confirm");
    },
  },
};
</script>

<style>
.modal {
  width: 300px;
}
</style>