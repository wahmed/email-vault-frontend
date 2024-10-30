import { createRouter, createWebHistory } from "vue-router";
import SignIn from "../components/LoginPage.vue";
import SignUp from "../components/SignupForm.vue";
import ResetPassword from "../components/ResetPassword.vue";
import EmailVerification from "../components/EmailVerification.vue";
import EmailSent from "../components/EmailSent.vue";
import EmailVerified from "../components/EmailVerified.vue";
import ConfirmPassword from "../components/ConfirmPassword.vue";

const routes = [
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: ResetPassword,
  },
  {
    path: "/confirm-reset-password",
    name: "ConfirmResetPassword",
    component: ConfirmPassword,
  },
  {
    path: "/email-verification",
    name: "EmailVerification",
    component: EmailVerification,
  },
  {
    path: "/email-sent",
    name: "EmailSent",
    component: EmailSent,
  },
  {
    path: "/email-verified",
    name: "EmailVerified",
    component: EmailVerified,
  },
  {
    path: "/",
    redirect: "/signin", // Redirect to SignIn by default
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
