import { defineStore } from "pinia";
import { getToken, getMe } from "@/services/auth/index";
import { setCookie, getCookie, eraseCookie } from "@/plugins/cookies";
import { ref } from "vue";
import router from "@/router";

export const useAuthStore = defineStore("authStore", () => {
  const user = ref({});

  const loggedIn = ref<boolean>(
    getCookie("loggedIn") && getCookie("loggedIn") !== "false" ? true : false
  );
  const login = async (dataLogin: { user_id: string; password: string }) => {
    try {
      const data = await getToken(dataLogin);
      if (data) {
        loggedIn.value = true;
        setCookie("loggedIn", true, 1);
        setCookie("token", data, 1);
        await getProfile();
        return loggedIn.value;
      }
    } catch (error: any) {
      return { error: error.response.data };
    }
  };

  const loginGoogle = async (token: string | undefined) => {
    try {
      if (token) {
        loggedIn.value = true;
        setCookie("loggedIn", true, 1);
        setCookie("token", token, 1);
        await getProfile();
        return loggedIn.value;
      }
    } catch (error: any) {
      return { error: error.response.data };
    }
  };

  const getProfile = async () => {
    // try {
    //   const data = await getMe();
    //   if (data) {
    //     setCookie("userId", data.user_id, 1);
    //     user.value = data;
    //     loggedIn.value = true;
    //     setCookie("loggedIn", true, 1);
    //   }
    // } catch (error) {
    //   logout();
    //   loggedIn.value = false;
    //   setCookie("loggedIn", false, 1);
    //   user.value = {};
    // }
  };

  const logout = () => {
    router.push("/sign_in");
    loggedIn.value = false;
    setCookie("loggedIn", String(false), 1);
    eraseCookie("token");
    eraseCookie("userId");
    user.value = {};
    return true;
  };
  return { login, loggedIn, user, getProfile, logout, loginGoogle };
});
