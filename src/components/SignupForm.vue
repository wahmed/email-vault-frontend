<template>
  <div class="container">
    <div class="container1">
      <div class="left-side">
        <div class="form-container">
          <h1>Create Account</h1>
          <p class="para">
            Welcome to Email Vault, please enter your details below to create an
            account
          </p>
          <form class="form" @submit.prevent="handleSubmit">
            <div>
              <label>First Name *</label>
              <input
                v-model="firstName"
                type="text"
                placeholder="Enter your first name"
                required
              />
            </div>

            <div>
              <label>Last Name *</label>
              <input
                v-model="lastName"
                type="text"
                placeholder="Enter your last name"
                required
              />
            </div>

            <div>
              <label>Company Name *</label>
              <input
                v-model="companyName"
                type="text"
                placeholder="Enter your company name"
                required
              />
            </div>

            <div>
              <label>Email *</label>
              <input
                v-model="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <div class="p-top">
                <div>
                  <label>Password</label>
                </div>
                <div class="pass-lines">
                  <div
                    v-for="(color, index) in strengthColors"
                    :key="index"
                    :style="{ backgroundColor: color }"
                    class="line1"
                  ></div>
                </div>
              </div>
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

            <div>
              <label>Referral Code </label>
              <input
                :disabled="!isReferralCodeEditable"
                v-model="referralCode"
                type="text"
                placeholder="Enter your referral code"
              />
            </div>

            <div class="checkbox-container">
              <input
                type="checkbox"
                style="border-color: #571158"
                v-model="isAgreed"
                required
              />
              <p>
                I agree to the
                <a href="#" @click="openModal">Terms and Conditions</a> and
                <a href="#" @click="openModal1">Privacy Policy</a>.
              </p>
            </div>

            <div class="button-container">
              <button
                type="submit"
                :class="{
                  'continue-button': true,
                  'disabled-button': !isFormValid || loading,
                }"
                :disabled="!isFormValid || loading"
                @click="handleSubmit"
              >
                <div v-if="loading" class="btn-loader"></div>
                <span v-else>Continue</span>
              </button>
            </div>
          </form>
        </div>
        <footer>
          <div class="ready-partner">
            <p>
              Ready to Partner with us as an MSP?
              <a href="#" class="footer-link">Sign Up here</a>
            </p>
          </div>
          <div class="already-account">
            <p>
              Already have an account?
              <router-link to="/signin">Sign In</router-link>
            </p>
          </div>
          <div class="copyright">
            <p>
              © 2023 Email Vault, Inc. All rights reserved |
              <a href="mailto:support@emailvault.app" class="footer-link"
                >support@emailvault.app</a
              >
            </p>
          </div>
        </footer>
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
          Our email journaling solution grants you security, compliance, and
          peace of mind.
        </p>
      </div>

      <!-- Modal for terms and conditions -->
      <div v-if="isOpen" class="modal">
        <div class="modal-inner">
          <div class="modal-head">Terms and Conditions</div>
          <div class="modal-text">
            Lorem ipsum dolor sit amet consectetur. Massa elementum congue
            vestibulum rhoncus convallis. Nunc pharetra libero vel egestas
            sapien. Semper malesuada nunc lobortis volutpat netus convallis
            ornare risus sed. Lorem at tristique parturient integer scelerisque.
            Integer auctor adipiscing sit viverra leo phasellus nulla tempor
            lectus. Volutpat nam sit vel aliquet tristique cum urna vitae. Nunc
            massa scelerisque viverra neque convallis egestas <br /><br />

            Non risus tincidunt adipiscing non cursus consectetur convallis eu
            elementum. Tincidunt faucibus turpis vel sed duis integer volutpat.
            Praesent facilisis amet congue ultrices congue dictumst justo in.
            Quisque fermentum id aliquet erat ipsum faucibus a. Sodales sagittis
            aenean gravida adipiscing scelerisque curabitur odio id sagittis.
            Mauris ac morbi lacus suspendisse justo parturient facilisis at.
            Suspendisse eget dictum nullam viverra elementum. <br /><br />

            In convallis ut sed velit nunc scelerisque. Montes vivamus
            scelerisque platea eu quis quis. Vulputate urna dui duis purus.
            Neque vitae habitant feugiat imperdiet mattis sit nunc sit. Sed sit
            pulvinar feugiat dignissim. <br />
            Risus erat platea quam est ullamcorper sit nunc tortor vel. A amet
            semper faucibus tortor urna rhoncus pulvinar blandit. <br /><br />

            Sed lectus mattis fermentum luctus lorem tempus suscipit sed nibh.
            Quisque nulla est enim ullamcorper viverra commodo. Quis malesuada
            pellentesque tincidunt morbi. <br /><br />
          </div>
          <button class="modal-button" @click="closeModal">OK</button>
        </div>
      </div>
      <!-- Modal for privacy policy -->
      <div v-if="isOpen1" class="modal">
        <div class="modal-inner">
          <div class="modal-head">Privacy Policy</div>
          <div class="modal-text">
            <div class="modal-head2">Version 1.0</div>
            Lorem ipsum dolor sit amet consectetur. Massa elementum congue
            vestibulum rhoncus convallis. Nunc pharetra libero vel egestas
            sapien. Semper malesuada nunc lobortis volutpat netus convallis
            ornare risus sed. Lorem at tristique parturient integer scelerisque.
            Integer auctor adipiscing sit viverra leo phasellus nulla tempor
            lectus. Volutpat nam sit vel aliquet tristique cum urna vitae. Nunc
            massa scelerisque viverra neque convallis egestas <br /><br />

            Non risus tincidunt adipiscing non cursus consectetur convallis eu
            elementum. Tincidunt faucibus turpis vel sed duis integer volutpat.
            Praesent facilisis amet congue ultrices congue dictumst justo in.
            Quisque fermentum id aliquet erat ipsum faucibus a. Sodales sagittis
            aenean gravida adipiscing scelerisque curabitur odio id sagittis.
            Mauris ac morbi lacus suspendisse justo parturient facilisis at.
            Suspendisse eget dictum nullam viverra elementum. <br /><br />

            In convallis ut sed velit nunc scelerisque. Montes vivamus
            scelerisque platea eu quis quis. Vulputate urna dui duis purus.
            Neque vitae habitant feugiat imperdiet mattis sit nunc sit. Sed sit
            pulvinar feugiat dignissim. <br />
            Risus erat platea quam est ullamcorper sit nunc tortor vel. A amet
            semper faucibus tortor urna rhoncus pulvinar blandit. <br /><br />

            Sed lectus mattis fermentum luctus lorem tempus suscipit sed nibh.
            Quisque nulla est enim ullamcorper viverra commodo. Quis malesuada
            pellentesque tincidunt morbi. <br /><br />
          </div>
          <button class="modal-button" @click="closeModal1">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import { useUserStore } from "../stores/userStore";
import { useToast } from "vue-toastification";

const toast = useToast();
const userStore = useUserStore();
const route = useRoute();
const firstName = ref("");
const lastName = ref("");
const companyName = ref("");
const referralCode = ref(route.query.ref || "");
const email = ref("");
const password = ref("");
const isAgreed = ref(false);
const passwordVisible = ref(false);
const showModal = ref(false);
const isOpen = ref(false);
const isOpen1 = ref(false);
const strengthLevel = ref(0);
const loading = ref(false);

const isReferralCodeEditable = computed(() => !route.query.ref);
const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};

const hasMinLength = computed(() => password.value.length >= 8);
const hasUppercase = computed(() => /[A-Z]/.test(password.value));
const hasLowercase = computed(() => /[a-z]/.test(password.value));
const hasNumber = computed(() => /\d/.test(password.value));
const hasSpecialChar = computed(() =>
  /[!@#$%^&*(),.?":{}|<>]/.test(password.value)
);

const allRequirementsMet = computed(() => {
  return (
    hasMinLength.value &&
    hasUppercase.value &&
    hasLowercase.value &&
    hasNumber.value &&
    hasSpecialChar.value
  );
});

const isFormValid = computed(() => {
  return (
    firstName.value &&
    lastName.value &&
    companyName.value &&
    email.value &&
    password.value &&
    isAgreed.value &&
    allRequirementsMet.value
  );
});

const handlePasswordInput = () => {
  showModal.value = !allRequirementsMet.value;
  if (password.value === "") {
    showModal.value = false;
  }
  const pwd = password.value;

  if (
    pwd.length >= 8 &&
    /[A-Z]/.test(pwd) &&
    /[0-9]/.test(pwd) &&
    /[!@#$%^&*]/.test(pwd)
  ) {
    strengthLevel.value = 3;
  } else if (pwd.length >= 6 && /[A-Z]/.test(pwd) && /[0-9]/.test(pwd)) {
    strengthLevel.value = 2;
  } else if (pwd.length > 0) {
    strengthLevel.value = 1;
  } else {
    strengthLevel.value = 0;
  }
};

const handleSubmit = async () => {
  loading.value = true;
  await userStore.signup(
    firstName.value,
    lastName.value,
    companyName.value,
    email.value,
    password.value,
    referralCode.value
  );
  loading.value = false;
  firstName.value = "";
  lastName.value = "";
  companyName.value = "";
  email.value = "";
  password.value = "";
  referralCode.value = "";
  isAgreed.value = false;
  console.log("User Data:", userStore.user);
};

const openModal = () => {
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};
const openModal1 = () => {
  isOpen1.value = true;
};

const closeModal1 = () => {
  isOpen1.value = false;
};

const strengthColors = computed(() => {
  return [
    strengthLevel.value >= 1 ? "#fdc23a" : "#DADADA",
    strengthLevel.value >= 2 ? "#fdc23a" : "#DADADA",
    strengthLevel.value >= 3 ? "#fdc23a" : "#DADADA",
  ];
});
</script>




<style scoped>
.container1 {
  width: 100%;
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
}

.left-side {
  flex: 1;
  padding: 40px;
  background-color: #f9f9f9;
  min-width: 300px;
  position: relative;
}

.inner {
  width: 100%;
  max-width: 420px;
  margin: auto;
}

.right-side {
  flex: 1;
  background: linear-gradient(45deg, #571158 100%, #8d348e 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  min-width: 300px;
}

.right-side h2 {
  font-size: 40px;
  margin-top: 63px;
  margin-bottom: 32px;
  font-weight: 800;
  line-height: 41px;
  color: white;
}

.right-side p {
  text-align: center;
  font-size: 19px;
  font-weight: 600;
  line-height: 23px;
  color: #fff;
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

.vault-image {
  max-width: 100%; /* Responsive image */
  height: auto; /* Maintain aspect ratio */
  margin-bottom: 20px; /* Space below the image */
}

.form-container {
  max-width: 420px;
  margin: auto;
}

.form-container h1 {
  font-size: 40px;
  font-weight: 700;
  line-height: 41px;
  margin-bottom: 32px;
  color: #000;
}
.para {
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  color: #000000cc;
  margin-bottom: 27px;
}

.form-container input {
  width: 100%;
  max-width: 413px;
  height: 39px;
  border-radius: 10px;
  border: 1px solid #0000004d;
  background-color: transparent;
  font-size: 14px;
  font-weight: 400;
  line-height: 41px;
  color: black;
  padding: 5px 13px;
}
.form-container input::placeholder {
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
  right: 15px;
  top: 13px;
  color: #571158;
  cursor: pointer;
  width: 20px;
  height: 20px;
}

.eye-icon.visible {
  background-image: url("@/assets/eye-icon.png"); /* Change to visible icon */
}

.button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
}

.continue-button {
  position: relative;
  background: #571158;
  color: #ffffff;
  width: 157px;
  height: 41px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

/* Disabled button style */
.disabled-button {
  background-color: #e5c4e6; /* Lightest purple when disabled */
  cursor: not-allowed; /* Change cursor to indicate disabled */
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 8px;
}
.checkbox-container input {
  width: auto;
  height: auto;
}
.checkbox-container p {
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  color: #2d3643;
}
.checkbox-container p a {
  color: #571158;
}

label {
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  color: #6c757d;
  margin-bottom: 7px;
}
label span {
  background: #571158;
}

footer {
  text-align: left;
  font-size: 0.85rem;
  position: relative;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #ccc;
  align-items: center;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  margin-top: 30px;
}

.ready-partner p {
  margin-top: 22px;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.1px;
  color: #606060;
}
.ready-partner p a,
.already-account p a,
.copyright a {
  text-decoration: none;
  color: #571459;
}
.already-account p {
  margin-top: 28px;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.1px;
  color: #000000;
}

.copyright {
  font-size: 12px;
  font-weight: 400;
  line-height: 19px;
  margin-top: 37px;
  color: #777777cc;
}
.copyright span {
  background: #571459cc;
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

.modal {
  position: fixed;
  inset: 0;
  background: #d9d9d980;
  border: 1px solid #bebebe;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-inner {
  border: 1px solid #d9d9d9;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.1px;
  width: 100%;
  max-width: 874px;
  height: 467px;
  background-color: white;
  border-radius: 10px;
  padding: 22px 15px;
}
.modal-head {
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  color: #000000;
  margin-bottom: 20px;
}
.modal-text {
  border: 1px solid #d9d9d9;
  padding: 12px 16px;
  border-radius: 6px;
  height: 330px;
  overflow: scroll;
  overflow-x: hidden;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.1px;
  text-align: justify;
}
.modal-text::-webkit-scrollbar {
  width: 6px;
}

.modal-text::-webkit-scrollbar-thumb {
  background-color: #571158; /* Thumb color */
  border-radius: 100px; /* Rounded edges */
}

.modal-text::-webkit-scrollbar-track {
  background: #d9d9d9; /* Track color */
  border-radius: 100px;
}
.modal-button {
  cursor: pointer;
  background: #571158;
  margin-top: 16px;
  border-radius: 5px;
  width: 106px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.1px;
  color: white;
  float: right;
  border: none;
}

.modal-head2 {
  font-size: 14px;
  font-weight: 700;
  line-height: 19.1px;
  color: #000000;
  margin-bottom: 16px;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Responsive styles */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .left-side,
  .right-side {
    width: 100%;
    min-width: auto;
    padding: 20px;
  }

  .button-container {
    justify-content: center; /* Center button on mobile */
  }
}

@media (max-width: 480px) {
  .form-container h1 {
    font-size: 1.5rem;
  }

  .form-container input {
    padding: 8px;
  }
}

.right-side .vault-image {
  width: 473px;
  height: 343px;
}

.pass-lines {
  display: flex;
  gap: 5px;
  align-items: center;
}
.pass-lines .line1 {
  height: 4px;
  width: 36px;
  border-radius: 2px;
  background: #fdc23a;
}
.p-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
