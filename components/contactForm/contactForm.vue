<template>
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
      valid: false,
      form: {
        firstname: "",
        lastname: "",
        email: "",
        telephone: "",
        message: "",
      },
      required(propertyType) {
        return (v) => (v && v.length > 0) || `Please enter ${propertyType}`;
      },
    };
  },
  methods: {
    submit() {
      this.valid = false;
      this.$axios.$post("api/sendmail", this.form).then((res) => {
        this.$toast.success(`E-Mail sent successfully ${this.form.email}`);
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