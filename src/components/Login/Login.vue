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
                class="form-input"
                v-model:value="form_login.user_name"
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
                class="form-input"
                v-model:value="form_login.user_password"
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
          <h1>Sign in with</h1>

          <a-button class="bt-google">
            <img
              src="../../assets/images/google-logo.png"
              class="logo-google"
            />
            <label> Google</label></a-button
          >
        </section>
      </div>
    </div>

    <div class="form-regist">
      <section class="form-bt-signin">
        <a-button class="bt-sign-up" @click="handleSignUp">Sign Up</a-button>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { RULES } from "@/services/contants/rules";

interface FormLogin {
  user_name: string;
  user_password: string;
}
export default defineComponent({
  name: "Login",
  setup() {
    const form_login = ref<any>({
      user_name: "",
      user_password: "",
    });

    const isCheckRemember = ref<boolean>(false);
    const router = useRouter();

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
     * handle Sign Up
     */
    const handleSignUp = () => {
      router.push("/register");
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
      isCheckRemember,
      handleSignUp,
      handleSubmitLogin,
      handleRemember,
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
      h1 {
        font-size: 16px;
        font-weight: 600;
      }
      .bt-google {
        height: 40px;
        width: 140px;
        .logo-google {
          height: 30px;
        }
      }
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

.form-item {
  margin: 0px;
}
</style>
