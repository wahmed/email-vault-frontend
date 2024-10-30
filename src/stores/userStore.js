// src/stores/userStore.js
import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";

export const useUserStore = defineStore("user", () => {
  const user = ref(JSON.parse(localStorage.getItem("user")) || null); // Load user from localStorage
  const toast = useToast();
  const sentEmail = ref(JSON.parse(localStorage.getItem("email")));
  const signup = async (
    firstName,
    lastName,
    companyName,
    email,
    password,
    referralCode = null
  ) => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/signup", {
        first_name: firstName,
        last_name: lastName,
        company_name: companyName,
        email: email,
        password: password,
        referral_code: referralCode,
      });

      user.value = response.data;
      let userData = {
        first_name: firstName,
        last_name: lastName,
        company_name: companyName,
        email: email,
        password: password,
        referral_code: referralCode,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      window.location.href = "/email-verification";
    } catch (error) {
      handleError(error);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/login", {
        email,
        password,
      });
      let userData = {
        email: email,
        password: password,
      };
      user.value = response.data;
      localStorage.setItem("user", JSON.stringify(userData));
      toast.success("Signin successful!");
    } catch (error) {
      toast.error("Invalid email or password!");
    }
  };

  const logout = () => {
    user.value = null; // Clear user from state
    localStorage.removeItem("user"); // Remove user from localStorage
    alert("Logout successful!");
  };

  const handleError = (error) => {
    if (error.response) {
      console.error("Error:", error.response.data);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error:", error.message);
    }
    toast.error("Email already used");
  };

  const getEmail = () => {
    return user.value ? user.value.email : null;
  };

  const setEmail1 = (email) => {
    localStorage.setItem("email", JSON.stringify(email));
  };
  const getEmail1 = () => {
    return sentEmail;
  };

  return { user, signup, login, logout, getEmail, setEmail1, getEmail1 };
});
