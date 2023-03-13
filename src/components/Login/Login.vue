<template>
  <main class="login-container">
    <div class="form-login-container">
      <div class="form-login">
        <section>
          <a-form :model="form_login">
            <a-form-item
              class="form-item"
              :name="['user_name']"
              :rules="[{ validator: rules.email, trigger: 'change' }]"
            >
              <a-input
                v-model:value="form_login.user_name"
                class="form-input"
                placeholder="Email or number phone"
            /></a-form-item>
          </a-form>
        </section>

        <section>
          <a-form :model="form_login">
            <a-form-item
              class="form-item"
              :name="['user_password']"
              :rules="[{ validator: rules.required, trigger: 'change' }]"
            >
              <a-input
                v-model:value="form_login.user_password"
                class="form-input"
                placeholder="Password"
                type="password"
            /></a-form-item>
          </a-form>
        </section>

        <section class="form-bt-login">
          <a-button class="bt-login" @click="handleSubmitLogin(form_login)"
            >Login</a-button
          >
        </section>

        <section>
          <a-checkbox
            v-model:checked="isCheckRemember"
            @change="handleRemember(form_login)"
            >Remember me</a-checkbox
          >
        </section>

        <section class="login-orther">
          <GoogleSignInButton
            class="bt-google"
            @success="handleLoginSuccess"
            @error="handleLoginError"
          ></GoogleSignInButton>
        </section>
      </div>
    </div>

    <div class="form-regist">
      <section class="form-bt-signin">
        <a-button class="bt-sign-up" @click="handleSignUp">Sign Up</a-button>
      </section>
    </div>

    <a-modal
      v-model:visible="isModalSignUp"
      class="modal-signup"
      title="Đăng Ký"
      :footer="null"
      :closable="false"
    >
      <div class="modal-form-content">
        <div>
          <a-form class="form-content-1"
            ><a-form-item class="form-content-item-name"
              ><a-input class="form-content-item-input" placeholder="Họ"
            /></a-form-item>
            <a-form-item class="form-content-item"
              ><a-input
                class="form-content-item-input"
                placeholder="Tên" /></a-form-item
          ></a-form>

          <a-form
            ><a-form-item class="form-content-item"
              ><a-input
                class="form-content-item-input"
                placeholder="Số điện thoại hoặc Email"
            /></a-form-item>
            <a-form-item class="form-content-item"
              ><a-input
                class="form-content-item-input"
                type="password"
                placeholder="Mật Khẩu" /></a-form-item
          ></a-form>

          <h1 class="text-description">Ngày sinh</h1>
          <a-form class="form-content-characteristic">
            <a-form-item class="form-content-item"><a-input /></a-form-item>
            <a-form-item class="form-content-item"><a-input /></a-form-item>
            <a-form-item class="form-content-item"><a-input /></a-form-item
          ></a-form>

          <h1 class="text-description">Giới tính</h1>
          <a-form class="form-content-characteristic"
            ><a-form-item class="form-content-item"><a-input /></a-form-item>
            <a-form-item class="form-content-item"><a-input /></a-form-item>
            <a-form-item class="form-content-item"><a-input /></a-form-item
          ></a-form>
        </div>
      </div>

      <div class="form-bt-signup">
        <a-button class="bt-sign-up">Đăng ký</a-button>
      </div>
    </a-modal>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { RULES } from "@/services/contants/rules";
import {
  GoogleSignInButton,
  type CredentialResponse,
} from "vue3-google-signin";
import { useAuthStore } from "@/stores/auth";
import { getCookie } from "@/plugins/cookies";

interface FormLogin {
  user_name: string;
  user_password: string;
}
export default defineComponent({
  name: "Login",
  // components: { GoogleSignInButton },
  setup() {
    const form_login = ref<any>({
      user_name: "",
      user_password: "",
    });

    const isCheckRemember = ref<boolean>(false);
    const router = useRouter();
    const authStore = useAuthStore();
    const isModalSignUp = ref<boolean>(false);

    /*
     * handle Remember me
     */
    const handleRemember = (form: FormLogin) => {
      if (isCheckRemember.value) {
        localStorage.setItem("user_name", form.user_name);
        localStorage.setItem("user_password", form.user_password);
      } else {
        localStorage.removeItem("user_name");
        localStorage.removeItem("user_password");
      }
    };

    /*
     * handle Login
     */
    const handleSubmitLogin = async (form: FormLogin) => {
      // handle call api login
      router.push("/new_feed");
    };

    /*
     * Sign with Google
     */
    const handleLoginSuccess = async (response: CredentialResponse) => {
      const { credential } = response;
      await authStore.loginGoogle(credential);
      if (getCookie("loggedIn") === "true") {
        return router.push("/new_feed");
      }
    };
    const handleLoginError = async () => {
      console.log("error");
    };

    /*
     * handle Sign Up
     */
    const handleSignUp = () => {
      isModalSignUp.value = true;
    };

    onMounted(() => {
      if (localStorage.getItem("user_name")) {
        isCheckRemember.value = true;
        form_login.value.user_name = localStorage.getItem("user_name");
        form_login.value.user_password = localStorage.getItem("user_password");
      }
    });

    return {
      form_login,
      isModalSignUp,
      isCheckRemember,
      handleSignUp,
      handleSubmitLogin,
      handleRemember,
      handleLoginSuccess,
      handleLoginError,
      rules: RULES,
    };
  },
});
</script>

<style lang="scss" scoped>
.login-container {
  width: 350px;
  height: 450px;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  .form-login-container {
    .form-login {
      padding: 20px;
      .form-bt-login {
        display: flex;
        justify-content: center;
        .bt-login {
          width: 100%;
          height: 50px;
          color: #fff;
          font-size: 18px;
          border-radius: 5px;
          background-color: #1877f2;
          margin-bottom: 10px;
        }
      }

      .form-input {
        height: 50px;
        border-radius: 5px;
        margin-bottom: 20px;
      }
    }

    .login-orther {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 80px;
      border: 1px solid #dadde1;
      border-radius: 5px;
      margin-top: 10px;
    }
  }

  .form-regist {
    .form-bt-signin {
      display: flex;
      justify-content: center;
      .bt-sign-up {
        width: 60%;
        height: 50px;
        color: #fff;
        font-size: 18px;
        border-radius: 5px;
        background-color: #42b72a;
      }
    }
  }
}

.modal-signup {
  .modal-form-content {
    .form-content-1 {
      display: flex;
    }
    .form-content-characteristic {
      display: flex;
    }
  }
  .form-bt-signup {
    display: flex;
    justify-content: center;
    .bt-sign-up {
      width: 60%;
      height: 50px;
      color: #fff;
      font-size: 18px;
      border-radius: 5px;
      background-color: #42b72a;
    }
  }
}

.form-content-item-input {
  border-radius: 5px;
  height: 40px;
  width: 100%;
}

.form-content-item {
  margin-bottom: 20px;
}

.form-content-item-name {
  margin-bottom: 20px;
  margin-right: 10px;
}

.form-item {
  margin: 0px;
}

.text-description {
  margin-bottom: 0px;
  font-size: 12px;
}
</style>

<style>
.ant-modal-content {
  width: 450px;
  height: 550px;
}
</style>
