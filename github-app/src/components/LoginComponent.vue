<template>
    <div class="mdl-grid loginpadding">
      <div class="mdl-layout-spacer"></div>
      <div class="mdl-card mdl-shadow--2dp my-login-card-size ">
        <form @submit.prevent="logMeIn">
        <div class="mdl-card__title colorblock">
          <h2 class="mdl-card__title-text mdl-color-text--white">
            Login:
          </h2>
        </div>
        <div class="mdl-card__supporting-text">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <label for="username" class="mdl-textfield__label">Username:</label>
            <input ref="txtUsername" name="username"  id="username" class="mdl-textfield__input" type="username">
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <label for="password" class="mdl-textfield__label">Password:</label>
            <input ref="txtPassword" name="password" @input="checkPasswordValidator" id="password" class="mdl-textfield__input" :pattern="passwordPattern" type="password">
            <span class="mdl-textfield__error">{{ passwordMessage }}</span>
          </div>

          <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
            <input type="checkbox" id="rememberMe" class="mdl-checkbox__input" v-model="rememberMe">
            <span class="mdl-checkbox__label">Remember Me</span >
          </label>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <button :disabled="submitBtnDisabled" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            <span v-if="isLoading">Loading..</span>
            <span v-else>Sign In</span>
          </button>
          <span v-if="errorMessage" class="mdl-color-text--red-500">{{ errorMessage }}</span>
        </div>
        </form>
      </div>  <!--end MDL card -->
      <div class="mdl-layout-spacer"></div>
    </div>
</template>

<script>
export default {
  name: "LoginComponent",
  props: {
    passwordMessage: {
      type: String,
      required: false,
      default: "Password length must be 4 to 20 characters."
    },
    passwordPattern: {
      type: String,
      required: true,
      default: ".{4,20}",
      validator: function(value) {
        return value !== "";
      }
    },
    errorMessage: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      submitBtnDisabled: true,
      rememberMe: false,
      isLoading: false
    };
  },
  watch: {
    errorMessage: function(data) {
      if (this.errorMessage !== "") {
        (this.isLoading = false), (this.submitBtnDisabled = false);
      }
    }
  },
  methods: {
    logMeIn: function() {
      let username = this.$refs.txtUsername.value.trim();
      let password = this.$refs.txtPassword.value.trim();

      this.isLoading = true;
      this.submitBtnDisabled = true;

      this.$emit("loginCredentials", {
        username: username,
        password: password
      });
    },
    checkPasswordValidator: function() {
      if (
        this.$refs.txtPassword.checkValidity() &&
        this.$refs.txtPassword.value !== ""
      ) {
        if (
          this.$refs.txtUsername.checkValidity() &&
          this.$refs.txtUsername.value !== ""
        ) {
          this.submitBtnDisabled = false;
        }
      } else {
        this.submitBtnDisabled = true;
      }
    }
  }
};
</script>

<style scoped>
.colorblock {
  background: #448aff;
}
.my-login-card-size {
  min-width: 320px;
  height: auto;
}
.loginpadding {
  padding-top: 70px;
}
</style>
