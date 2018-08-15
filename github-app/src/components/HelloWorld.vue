<template>
  <div class="hello">
    <login-component
    passwordPattern=".{4,20}"
    passwordMessage="Password length must be 4 to 20 characters."
    :errorMessage="credentialFail"
    @loginCredentials="loginAttempt"
    ></login-component>
  </div>
</template>

<script>
import LoginComponent from "./LoginComponent.vue";
import * as configuration from "./../configurationFile.js";
import store from "../store";

export default {
  components: { LoginComponent },
  name: "HelloWorld",
  data() {
    return {
      credentialFail: ""
    };
  },
  methods: {
    loginAttempt: function(credentials) {
      var tokenbase64 = "";
      tokenbase64 =
        "Basic " + btoa(credentials.username + ":" + credentials.password);
      this.credentialFail = "";
      this.$http
        .get(configuration.github_URL, {
          headers: {
            Authorization: tokenbase64
          }
        })
        .then(
          function(response1) {
            store.dispatch("signIn", response1.body),
              this.$http
                .post("http://localhost:3000/api/git", response1.body)
                .then(function(response) {
                  // console.log("u regjistrua");
                });

            this.$router.push({
              name: "User"
            });
          },
          response => {
            console.log(response);
            this.credentialFail = "Incorrect email or password";
          }
        );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
