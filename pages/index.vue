<template>
  <v-app>
    <Services />
    <!-- <Carousel /> -->
    <!-- <v-divider width="0"></v-divider> -->
    <Lorem/>
    <!-- <v-divider width="0"></v-divider> -->
    <Cloudinary/>
    <!-- <v-divider width="0"></v-divider> -->
    <ContactForm/>

  </v-app>
</template>

<script>
import Services from "../components/services/services.vue";
import Carousel from "../components/carousel/carousel.vue";
import Lorem from "../components/lorem/lorem.vue";
import Cloudinary from "../components/cloudinary/cloudinary.vue";
import ContactForm from "../components/contactForm/contactForm.vue";
export default {
  components: { Services, Carousel, Lorem, Cloudinary, ContactForm },
};
</script>
