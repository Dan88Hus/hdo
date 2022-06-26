<template>
<!-- v-app is vuetify component to align page in container -->
  <v-app>
    <Services />
    <Lorem/>
    <Cloudinary/>
    <v-divider width="0"></v-divider>
    We would be happy to inform you in a personal meeting at your site to show you all the possibilities
    <h4 class="text-center">Contact Form</h4>
    By using the contact form you can send us email about any topic, we always look forward to hear your positive/negative feedback
    <v-divider width="0"></v-divider>
    <ContactForm/>
    <v-divider width="0"></v-divider>
  </v-app>
</template>

<!-- importing components -->
<script>
import Services from "../components/services/services.vue";
import Lorem from "../components/lorem/lorem.vue";
import Cloudinary from "../components/cloudinary/cloudinary.vue";
import ContactForm from "../components/contactForm/contactForm.vue";
export default {
  components: { Services, Lorem, Cloudinary, ContactForm },
};
</script>
