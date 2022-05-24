<template>
  <v-app>
    <v-container>
      <!-- {{ this.imageUrls.length }} -->
      <v-divider width="0"></v-divider>
      <p class="text-left">some pictures from our past projects</p>
      <v-divider width="0"></v-divider>
      <v-row>
        <v-col
          v-for="i in imageUrls"
          :key="i"
          class="d-flex child-flex"
          cols="4"
        >
          <v-card rounded shaped color="#121212">
            <!-- here -->
            <v-dialog v-model="dialog">
              <v-card>
                <v-img
                  :src="dialogSrc"
                  :aspect-ratio="1"

                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-dialog>
            <!-- here -->
            <v-img
              @click="zoom(i)"
              :src="i"
              :aspect-ratio="1"
              class="grey lighten-2 cursor"
              transition="fade-transition"
              alt="project"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-divider width="0"></v-divider>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      dialogSrc: null,
      imageUrls: [],
      fileLength: 0,
    };
  },
  computed: {},
  destroyed() {
    // console.log("destroyed");
    this.imageUrls.splice(0, this.imageUrls.length);
    // this.eraseImagesUrl();
  },
  mounted() {
    this.fetchImages();
  },
  methods: {
    fetchImages() {
      this.$axios.$post("api/images").then((res) => {
        this.imageUrls = res;
      });
    },
    zoom(src) {
      this.dialog = true;
      this.dialogSrc = src;
    },
  },
};
</script>

<style lang="scss" scoped>
// .mdi-instagram { // deprecated
//   background: radial-gradient(
//     circle at 30% 107%,
//     #fdf497 0%,
//     #d8d8d6 5%,
//     #fd5949 45%,
//     #d6249f 60%,
//     #285aeb 90%
//   );
//   -webkit-background-clip: text;
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
// }
a {
  text-decoration: none !important;
}
// ::v-deep .v-application--wrap {
//   min-height: fit-content;
// }
.cursor{
  cursor: pointer;
}
</style>