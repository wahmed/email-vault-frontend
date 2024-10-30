<template>
  <div class="container">
    <!-- Left side with form -->
    <div class="sign-in">
      <div class="inner">
        <div>
          <h1>Reset Password</h1>
          <p style="font-size: 14px; color: #898282">
            Having trouble logging in to your account? Please enter your<br />
            email below to reset your password.
          </p>

          <form @submit.prevent="handleSubmit" class="form">
            <input
              type="email"
              id="email"
              placeholder="Email"
              v-model="email"
              class="input-field"
              required
            />

            <div style="display: flex; justify-content: end">
              <button
                class="sign-in-button"
                :disabled="loading"
                @click="handleResetPassword"
              >
                <div v-if="loading" class="btn-loader"></div>
                <span v-else>Reset Password</span>
              </button>
            </div>
          </form>
          <hr class="line" />
          <p class="create-account">
            Already have an account?
            <router-link to="/signin" style="text-decoration: none"
              >Sign In</router-link
            >
          </p>
          <div class="copyright">
            <p>
              © 2023 Email Vault, Inc. All rights reserved |
              <a href="mailto:support@emailvault.app" class="footer-link"
                >support@emailvault.app</a
              >
            </p>
          </div>
        </div>
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

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useToast } from "vue-toastification";
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();
const toast = useToast();
const email = ref();
const loading = ref(false);

const handleSubmit = async () => {
   loading.value = true; 
  try {
    const response = await axios.post(
      "http://127.0.0.1:5000/api/reset_password",
      {
        email: email.value,
      }
    );
    console.log(response.data);
    userStore.setEmail1(email.value);
    window.location.href = "/email-sent";
    email.value = "";
     loading.value = false; 
  } catch (error) {
    toast.error("Email not found!");
     loading.value =false; 
  }
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
  color: #000;
  margin-bottom: 32px;
}

.sign-in p {
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  color: #000000cc;
  margin-bottom: 32px;
}

.form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 12px;
  font-size: 14px;
  font-weight: bold;
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
.line {
  margin-top: 44px;
  margin-bottom: 16px;
  border: 1px solid #0000004d;
}

.password-field {
  position: relative;
}

.show-password-icon {
  position: absolute;
  right: 10px;
  top: 12px;
  cursor: pointer;
}

.forgot-password {
  text-align: right;
  margin-top: 8px;
  color: #6b47dc;
  font-size: 12px;
  cursor: pointer;
}
.sign-in-button {
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  background: #571158;
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.1px;
  width: 157px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 65px;
  border: none;
}

.create-account {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 41px;
  color: black;
}

.create-account a {
  color: #571459;
  cursor: pointer;
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
  line-height: 19px;
}
.cu-icon {
  margin-top: 6px;
  color: #b564c9;
  font-size: 21px;
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
  position: absolute;
  bottom: 0;
}
.copyright span {
  background: #571459cc;
}
</style>
