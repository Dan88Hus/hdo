<!-- this component will show all images that receive its oublic Url path from server -->
<template>
  <div>
    <v-divider width="0"></v-divider>
    <p class="text-left">Some pictures from our past projects</p>
    <v-divider width="0"></v-divider>
    <v-row>
      <!-- it will "for" loop of imageUrls array -->
      <v-col v-for="i in imageUrls" :key="i" class="d-flex child-flex" cols="4">
        <v-card rounded shaped>
          <!-- v-dialog component is used to show pop'up window for each picture clicked -->
          <v-dialog v-model="dialog">
            <v-card>
              <v-img :src="dialogSrc" :aspect-ratio="1">
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <!-- progress-circular component is used to indicate its loading -->
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-dialog>
          <!-- v-dialog -->
          <!-- clicking on image will be binded to "zoom()" method -->
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      // dialog is boolean, is used for if pop'up either shown or not
      dialog: false,
      // dialogSrc is used to store clicked image path
      dialogSrc: null,
      // imageUrls is array and it store all images that receive from server and will be used for loop on items
      imageUrls: [],
    };
  },
  computed: {},
  destroyed() {},
  mounted() {
    // "fetchImages method will be called when component starts to loading"
    this.fetchImages();
  },
  methods: {
    // "fetchImages method trigger thr server end point and it assign response the "imageUrls" array
    fetchImages() {
      this.$axios.$post("api/images").then((res) => {
        this.imageUrls = res;
      });
    },
    // "zoom" method will receive urls path to show clicked images on dialog window, it will be used whe user click on specific picture
    zoom(src) {
      this.dialog = true;
      this.dialogSrc = src;
    },
  },
};
</script>

<style lang="scss" scoped>
// cursor css method is used to indicate mini hand icon on images as its clickable
.cursor {
  cursor: pointer;
}

</style>