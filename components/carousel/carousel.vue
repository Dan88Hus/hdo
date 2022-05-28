<template>
  <!-- vuetify carousel component to show static images -->
  <v-carousel cycle show-arrows-on-hover interval="3000" height="auto">
    <!-- it will "for" each "images" array items, which it contains static files path of images -->
    <v-carousel-item v-for="slide in images" :key="slide.id">
      <v-img
        :src="require(`../../static/carousel/${slide.id}.jpg`)"
        position="center"
        :aspect-ratio="2.5"
        contain
      >
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      // this images array is used to contain all pictures path
      images: [],
    };
  },
  mounted() {
    // mounted is method that run first when component mounts, it will call importAll method
    this.importAll(require.context("../../static/carousel", true, /\.jpg$/));
  },
  methods: {
    importAll(r) {
      // this method will loop of each file and push image path to "images" array
      r.keys().forEach((key) =>
        this.images.push({
          path: `../../static/carousel/${key.slice(-7)}`,
          id: key.slice(2, 5),
        })
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>