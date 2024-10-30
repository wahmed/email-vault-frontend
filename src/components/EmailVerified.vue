<template>
  <div class="container">
    <!-- Left side with form -->
    <div class="sign-in">
      <div style="display: flex; justify-content: center">
        <div class="box">
          <h1 v-if="verified">Email Verified</h1>
          <h1 v-if="notverified">This Link is Expired</h1>
          <p v-if="verified">
            Thank you for verifying your email address with Email Vault. Your
            account is now fully activated, and you can enjoy all the features
            our platform has to offer.
          </p>
          <!-- <p v-if="notverified">
            It seems that your email address has not been verified yet. To
            access your account and enjoy all our services, please verify your
            email.
          </p> -->
          <hr class="line" />
          <div v-if="verified" class="create-account">
            <router-link
              class="sign-in-button"
              to="/signin"
              style="text-decoration: none"
              >Sign In</router-link
            >
          </div>
          <!-- <div v-if="notverified" class="create-account">
            <router-link
              class="sign-in-button"
              to=""
              style="text-decoration: none"
              >Resend Email</router-link
            >
          </div> -->
          <div class="copyright">
            <div>
              © 2023 Email Vault, Inc. All rights reserved |
              <a href="mailto:support@emailvault.app" class="footer-link"
                >support@emailvault.app</a
              >
            </div>
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
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const verified = ref(false);
const notverified = ref(false);
const token = ref(null);

const route = useRoute();
token.value = route.query.token;

const VerfiyEmail = async () => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:5000/api/verify/${token.value}`,
      {}
    );
    verified.value = true;
  } catch (error) {
    console.error(error);
    notverified.value = true;
  }
};

onMounted(() => {
  VerfiyEmail();
});
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

.sign-in h1 {
  font-size: 40px;
  font-weight: 700;
  line-height: 41px;
  color: #000;
  margin-bottom: 32px;
}

.sign-in p {
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: #000000cc;
}
.sign-in p span {
  font-weight: 600;
}
.box {
  width: 100%;
  max-width: 420px;
  margin: auto;
}
.box p {
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: #000000cc;
}
.box p span {
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
}
.box .para {
  margin-top: 20px;
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
  margin-top: 40px;
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
  margin-top: 20px;
  padding: 12px 35px 12px 35px;
  background: linear-gradient(45deg, #571158 0%, #8d348e 100%);
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.info-section {
  flex: 1;
  background: linear-gradient(45deg, #571158 0%, #8d348e 100%);
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
  bottom: 24px;
}
.copyright span {
  color: #571459cc;
}
.copyright1 {
  font-size: 12px;
  font-weight: 400;
  line-height: 19px;
  margin-top: 37px;
  color: #777777cc;
}
.copyright1 a {
  color: #571459cc;
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
  cursor: pointer;
  float: right;
}
.sign-in-button {
  border: none;
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
  border: none;
}
</style>
