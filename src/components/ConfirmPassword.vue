<template>
  <div class="container">
    <!-- Left side with form -->
    <div class="sign-in">
      <div class="sign-in-inner">
        <div>
          <h1>Reset Password</h1>
          <p style="font-size: 14px; color: #898282">
            Please enter your new password
          </p>

          <form @submit.prevent="handleSubmit" class="form">
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
            <div class="checkbox-container">
              <input
                type="checkbox"
                style="border-color: #571158"
                v-model="isAgreed"
                required
                @change="handleBtn()"
              />
              <p>
                I agree to the
                <a href="#" @click="openModal">Terms and Conditions</a> and
                <a href="#" @click="openModal1">Privacy Policy</a>.
              </p>
            </div>

            <div style="display: flex; justify-content: end">
              <button
                type="submit"
                class="sign-in-button"
                :class="[
                  isCheck ? 'ena-btn' : 'dis-btn',
                  { 'loading-btn': loading },
                ]"
                :disabled="!isCheck || loading"
                @click="handleContinue"
              >
                <div v-if="loading" class="btn-loader"></div>
                <span v-else>Continue</span>
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

    <!-- Modal for terms and conditions -->
    <div v-if="isOpen" class="modal">
      <div class="modal-inner">
        <div class="modal-head">Terms and Conditions</div>
        <div class="modal-text">
          Lorem ipsum dolor sit amet consectetur. Massa elementum congue
          vestibulum rhoncus convallis. Nunc pharetra libero vel egestas sapien.
          Semper malesuada nunc lobortis volutpat netus convallis ornare risus
          sed. Lorem at tristique parturient integer scelerisque. Integer auctor
          adipiscing sit viverra leo phasellus nulla tempor lectus. Volutpat nam
          sit vel aliquet tristique cum urna vitae. Nunc massa scelerisque
          viverra neque convallis egestas <br /><br />

          Non risus tincidunt adipiscing non cursus consectetur convallis eu
          elementum. Tincidunt faucibus turpis vel sed duis integer volutpat.
          Praesent facilisis amet congue ultrices congue dictumst justo in.
          Quisque fermentum id aliquet erat ipsum faucibus a. Sodales sagittis
          aenean gravida adipiscing scelerisque curabitur odio id sagittis.
          Mauris ac morbi lacus suspendisse justo parturient facilisis at.
          Suspendisse eget dictum nullam viverra elementum. <br /><br />

          In convallis ut sed velit nunc scelerisque. Montes vivamus scelerisque
          platea eu quis quis. Vulputate urna dui duis purus. Neque vitae
          habitant feugiat imperdiet mattis sit nunc sit. Sed sit pulvinar
          feugiat dignissim. <br />
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
          vestibulum rhoncus convallis. Nunc pharetra libero vel egestas sapien.
          Semper malesuada nunc lobortis volutpat netus convallis ornare risus
          sed. Lorem at tristique parturient integer scelerisque. Integer auctor
          adipiscing sit viverra leo phasellus nulla tempor lectus. Volutpat nam
          sit vel aliquet tristique cum urna vitae. Nunc massa scelerisque
          viverra neque convallis egestas <br /><br />

          Non risus tincidunt adipiscing non cursus consectetur convallis eu
          elementum. Tincidunt faucibus turpis vel sed duis integer volutpat.
          Praesent facilisis amet congue ultrices congue dictumst justo in.
          Quisque fermentum id aliquet erat ipsum faucibus a. Sodales sagittis
          aenean gravida adipiscing scelerisque curabitur odio id sagittis.
          Mauris ac morbi lacus suspendisse justo parturient facilisis at.
          Suspendisse eget dictum nullam viverra elementum. <br /><br />

          In convallis ut sed velit nunc scelerisque. Montes vivamus scelerisque
          platea eu quis quis. Vulputate urna dui duis purus. Neque vitae
          habitant feugiat imperdiet mattis sit nunc sit. Sed sit pulvinar
          feugiat dignissim. <br />
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
</template>

<script setup>
import { ref, computed } from "vue";
import axios from "axios";
import { useToast } from "vue-toastification";
import { useRoute } from "vue-router";

const toast = useToast();
const loading = ref(false);
const password = ref("");
const isAgreed = ref(false);
const passwordVisible = ref(false);
const isOpen = ref(false);
const isOpen1 = ref(false);
const showModal = ref(false);
const token = ref(null);
const route = useRoute();
const isCheck = ref(false);
const strengthLevel = ref(0);

const handleBtn = () => {
  isCheck.value = !isCheck.value;
};
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

token.value = route.query.token;
const handleSubmit = async () => {
  loading.value = true;
  try {
    const response = await axios.post(
      `http://127.0.0.1:5000/api/confirm_reset_password/${token.value}`,
      {
        new_password: password.value,
      }
    );

    console.log(response.data);
    toast.success("Password Reset successful!");
    if (response.status === 200) {
      setTimeout(() => {
        window.location.href = "/signin";
      }, 1000);
    }
    password.value = "";
    isAgreed.value = false;
  } catch (error) {
    await toast.error("Invalid or expired token!");
    setTimeout(() => {
      window.location.href = "/reset-password";
    }, 2000);
    isAgreed.value = false;
  }
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

.sign-in-inner {
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
  font-weight: 400;
  line-height: 19.1px;
  color: #6c757d;
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

.password-group {
  position: relative;
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

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 8px;
}
.checkbox-container input {
  width: auto;
}
.checkbox-container p {
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  color: #2d3643;
  margin-bottom: 0;
}
.checkbox-container p a {
  color: #571158;
  text-decoration: none;
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
.dis-btn {
  background-color: #e5c4e6;
  cursor: not-allowed;
}
.ena-btn {
  cursor: pointer;
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
