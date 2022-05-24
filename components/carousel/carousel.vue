<template>
  <v-carousel cycle show-arrows-on-hover interval="3000" height="auto">
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
      images: [],
    };
  },
  mounted() {
    this.importAll(require.context("../../static/carousel", true, /\.jpg$/));
  },
  methods: {
    importAll(r) {
      r.keys().forEach((key) =>
        this.images.push({
          path: `../../static/carousel/${key.slice(-7)}`,
          id: key.slice(2, 5),
        })
      );
      console.log("this.images", this.images);
    },
  },
};
</script>

<style lang="scss" scoped>
// ::v-deep .v-application--wrap {
//   min-height: fit-content;
// }
</style>