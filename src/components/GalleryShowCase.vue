<template>
  <div class="container">

  <h2 class=" text-center text-lg-start mt-4 mb-0">{{galleryName}}</h2>

  <hr class="mt-2 mb-5">

  <div class="row text-center text-lg-start">

    <div v-for="image in gallery" :key="image.id" class="col-lg-3 col-md-4 col-6">
      <div class="d-block mb-4 h-100">
        <img class="img-fluid img-thumbnail" :src="image.url" alt="">
        <p>{{image.title}}</p>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
    name: "GalleryShowCase",

    props: {
        galleryName: String,
        gallery: Array
    }
}
</script>

<style>

</style>