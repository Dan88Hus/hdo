<template>
  <!-- <v-app> -->
  <div>
    <v-row>
      <v-col cols="12" class="mx-0">
        <v-card elevation="0" color="#121212">
          <v-img
            position="center"
            :aspect-ratio="3.5"

            :src="require('../../static/coverFlower.jpg')"
          >
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
        <h1 class="text-center">Our Services</h1>
    </v-row>
    <v-row>
      <v-col align-self="center">
        <h6 class="dark-grey--text">Hotel Applications</h6>
      </v-col>
      <v-col align-self="center">
        <h6 class="dark-grey--text">Rose walls Applications</h6>
      </v-col>
      <v-col align-self="center">
        <h6 class="dark-grey--text">Ceil Applications</h6>
      </v-col>
      <v-col align-self="center">
        <h6 class="dark-grey--text">Tree Applications</h6>
      </v-col>
      <v-col align-self="center">
        <h6 class="dark-grey--text">Vertical Applications</h6>
      </v-col>
    </v-row>
    <v-divider width="0"></v-divider>
  </div>
  <!-- </v-app> -->
</template>

<script>
// import Logoheader from "../Navbar/logoHeader.vue";
export default {
  components: {
    // Logoheader,
  },
  data() {
    return {
      images: [],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
// ::v-deep .v-application--wrap {
//   min-height: fit-content;
// }
</style>