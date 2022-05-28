<template>
  <!-- by using @submit annotation we will force the submit method to triggered and prevent default submit refresh page -->
  <v-row>
    <v-form v-model="valid" @submit.prevent="submit">
      <v-text-field
        v-model="form.firstname"
        label="Name"
        required
        :rules="[required('Name')]"
      ></v-text-field>
      <v-text-field
        v-model="form.lastname"
        label="LastName"
        required
        :rules="[required('LastName')]"
      ></v-text-field>
      <v-text-field
        v-model="form.email"
        label="Enter E-mail that you will receive for test purposes"
        required
        :rules="[required('Email')]"
      ></v-text-field>
      <v-text-field
        v-model="form.telephone"
        label="Telephone"
        required
        :rules="[required('Telephone')]"
      ></v-text-field>
      <v-textarea
        label="Comments..."
        v-model="form.message"
        :rules="[required('Comments')]"
      ></v-textarea>
      <v-btn rounded :disabled="!valid" color="success" @click="submit">
        Send
      </v-btn>
    </v-form>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      // valid is used to check if form either is valid
      valid: false,
      form: {
        firstname: "",
        lastname: "",
        email: "",
        telephone: "",
        message: "",
      },
      // required is simple validation method from vuetify
      required(propertyType) {
        return (v) => (v && v.length > 0) || `Please enter ${propertyType}`;
      },
    };
  },
  methods: {
    // submit is triggereing server end point and use "post" method to send form object which contains name....
    submit() {
      this.valid = false;
      this.$axios.$post("api/sendmail", this.form).then((res) => {
        // when client receive response from server it send toast message to user as its success
        this.$toast.success(`E-Mail sent successfully ${this.form.email}`);
        // clear the form on client-side
        this.form.firstname = "";
        this.form.lastname = "";
        this.form.telephone = "";
        this.form.email = "";
        this.form.message = "";
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>