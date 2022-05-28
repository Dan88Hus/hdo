<template>
  <v-app>
    <Services />
    <Lorem/>
    <!-- <v-divider width="0"></v-divider> -->
    <Cloudinary/>
    <v-divider width="0"></v-divider>
    <h4 class="text-center">Contact Form</h4>
    <v-divider width="0"></v-divider>
    <ContactForm/>

  </v-app>
</template>

<script>
import Services from "../components/services/services.vue";
import Lorem from "../components/lorem/lorem.vue";
import Cloudinary from "../components/cloudinary/cloudinary.vue";
import ContactForm from "../components/contactForm/contactForm.vue";
export default {
  components: { Services, Lorem, Cloudinary, ContactForm },
};
</script>
