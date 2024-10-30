<template>
  <div class="container">
    <!-- Left side with form -->
    <div class="sign-in">
      <div class="inner">
        <div>
          <h1>Sign In</h1>
          <p class="para">
            Welcome to Email Vault, please enter your login credentials below<br />
            to start using the application.
          </p>

          <form class="form" @submit.prevent="handleSubmit">
            <div>
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                v-model="email"
                class="input-field"
                required
              />
            </div>

            <div style="margin-top: 30px">
              <label>Password *</label>
              <div class="password-group">
                <input
                  v-model="password"
                  :type="passwordVisible ? 'text' : 'password'"
                  placeholder="Enter your password"
                  required
                  @input="handlePasswordInput"
                />
                <i
                  class="fa-regular eye-icon"
                  @click="togglePasswordVisibility"
                  :class="passwordVisible ? 'fa-eye' : 'fa-eye-slash'"
                ></i>
              </div>

              <!-- Password Requirements Modal -->
              <div v-if="showModal" class="password-modal">
                <p>Please fulfill the below requirements:</p>
                <ul>
                  <li :class="{ valid: hasMinLength }">
                    <span>At least 8 characters in length</span>
                    <i
                      class="fa-solid"
                      :class="
                        hasMinLength ? 'fa-circle-check' : 'fa-circle-xmark'
                      "
                    ></i>
                  </li>
                  <li :class="{ valid: hasUppercase }">
                    <span>At least 1 uppercase character</span>
                    <i
                      class="fa-solid"
                      :class="
                        hasUppercase ? 'fa-circle-check' : 'fa-circle-xmark'
                      "
                    ></i>
                  </li>
                  <li :class="{ valid: hasLowercase }">
                    <span>At least 1 lowercase character</span>
                    <i
                      class="fa-solid"
                      :class="
                        hasLowercase ? 'fa-circle-check' : 'fa-circle-xmark'
                      "
                    ></i>
                  </li>
                  <li :class="{ valid: hasNumber }">
                    <span>At least 1 number</span>
                    <i
                      class="fa-solid"
                      :class="hasNumber ? 'fa-circle-check' : 'fa-circle-xmark'"
                    ></i>
                  </li>
                  <li :class="{ valid: hasSpecialChar }">
                    <span>At least 1 special character</span>
                    <i
                      class="fa-solid"
                      :class="
                        hasSpecialChar ? 'fa-circle-check' : 'fa-circle-xmark'
                      "
                    ></i>
                  </li>
                </ul>
              </div>
            </div>

            <div class="forgot-password">
              <router-link to="/reset-password" class="float-end"
                >Forgot password?</router-link
              >
            </div>

            <div style="display: flex; justify-content: end">
              <button
                type="submit"
                class="sign-in-button"
                :disabled="loading"
                @click="handleSignIn"
              >
                <div v-if="loading" class="btn-loader"></div>
                <span v-else>Sign In</span>
              </button>
            </div>
          </form>

          <hr class="line" />
          <p class="create-account">
            Don't have an account?
            <router-link to="/signup">Create account</router-link>
          </p>
        </div>
      </div>
      <div class="copyright">
        <p>
          © 2023 Email Vault, Inc. All rights reserved |
          <a href="mailto:support@emailvault.app" class="footer-link"
            >support@emailvault.app</a
          >
        </p>
      </div>
    </div>

    <!-- Right side with image -->
    <div class="info-section">
      <img
        src="../assets/email-vault-illustration.png"
        alt="Dummy Image"
        class="info-image"
      />
      <h2>Email Vault</h2>
      <p>
        Our email journaling solution grants you security, compliance, and peace
        of mind.
      </p>
    </div>
  </div>
</template>

<script  setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();
const loading = ref(false);
const email = ref("");
const password = ref("");
const passwordVisible = ref(false);

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};

const handleSubmit = async () => {
  loading.value = true;
  await userStore.login(email.value, password.value);
  loading.value = false;
  email.value = "";
  password.value = "";
  console.log("User Data:", userStore.user);
};
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
}

.sign-in {
  flex: 1;
  padding: 40px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.inner {
  width: 100%;
  max-width: 420px;
  margin: auto;
}
.sign-in h1 {
  font-size: 40px;
  font-weight: 700;
  line-height: 41px;
  margin-bottom: 32px;
  color: #000000;
}

.inner p {
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  color: #000000cc;
}

.form {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 14px;
  font-weight: 400;
  line-height: 19.1px;
  color: #6c757d;
}

.password-group {
  position: relative;
  width: 100%;
  max-width: 420px;
}

.eye-icon {
  position: absolute;
  right: 10px;
  top: 20px;
  color: #571158;
  cursor: pointer;
  width: 20px;
  height: 20px;
}

.password-modal {
  background: white;
  border: 1px solid #ddd;
  padding: 1em;
  border-radius: 5px;
  width: 250px;
  position: absolute;
  margin-top: -49px;
  right: -138px;
}
.password-modal p {
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
  margin-bottom: 10px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.1px;
}
li {
  color: #fc5a5a;
}
li.valid {
  color: #42a496;
}
li i {
  margin-left: auto;
}

.forgot-password a {
  color: #571459;
  float: right;
  text-decoration: none;
  font-size: 12px;
  font-weight: 400;
  line-height: 41px;
}

.sign-in-button {
  position: relative;
  margin-top: 20px;
  padding: 12px 35px 12px 35px;
  background: #571158;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  height: 46px;
  width: 120px;
  box-shadow: 0px 4px 4px 0px #00000040;
}
.line {
  margin-top: 44px;
  margin-bottom: 16px;
  border: 1px solid #0000004d;
}

.create-account {
  text-align: center;
  font-family: Nunito Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 41px;
  color: #000000;
}
.create-account a {
  font-weight: 600;
  color: #571159;
  cursor: pointer;
  text-decoration: none;
}

.info-section {
  flex: 1;
  background: linear-gradient(45deg, #571158 100%, #8d348e 100%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
}

.info-image {
  margin-bottom: 20px;
}

.info-section h2 {
  font-size: 32px;
  margin-bottom: 16px;
}

.info-section p {
  font-size: 16px;
  max-width: 300px;
}
.cu-icon {
  margin-top: 6px;
  color: #b564c9;
  font-size: 21px;
}

input {
  width: 100%;
  max-width: 420px;
  height: 52px;
  border-radius: 10px;
  border: 1px solid #6c757d;
  background-color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 41px;
  color: black;
  padding: 5px 13px;
}
input::placeholder {
  font-size: 14px;
  font-weight: 400;
  line-height: 19.1px;
  color: #6c757d;
}
.copyright a {
  text-decoration: none;
  color: #571459;
}
.copyright {
  font-size: 12px;
  font-weight: 400;
  line-height: 19px;
  margin-top: 37px;
  color: #777777cc;
  text-align: center;
}
.copyright span {
  background: #571459cc;
}
</style>
