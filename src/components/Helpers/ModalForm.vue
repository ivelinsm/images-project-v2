<template>
  <div class="d-inline float-right">
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      data-bs-whatever="@mdo"
    >
      Create a New Gallery
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New message</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label"
                  >Gallery Name:</label
                >
                <input v-model="enteredName" @keydown.enter.prevent type="text" class="form-control" id="recipient-name" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button @click.prevent="emitCreate(enteredName)" type="button" class="btn btn-primary" data-bs-dismiss="modal">Create</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ModalForm",

    data() {
        return {
            enteredName: ''
        }
    },

    methods: {
    emitCreate(enteredName) {
      this.$emit("create", enteredName);
    }
  },
};
</script>

<style>
</style>