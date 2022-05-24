<template>
  <v-app>
    <Services />
    <!-- <Carousel /> -->
    <!-- <v-divider width="0"></v-divider> -->
    <Lorem/>
    <v-divider width="0"></v-divider>
    <Cloudinary/>

  </v-app>
</template>

<script>
import Services from "../components/services/services.vue";
import Carousel from "../components/carousel/carousel.vue";
import Lorem from "../components/lorem/lorem.vue";
import Cloudinary from "../components/cloudinary/cloudinary.vue";
export default {
  components: { Services, Carousel, Lorem, Cloudinary },
};
</script>
