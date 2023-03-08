<template>
  <div class="container">
    <div class="login-box">
      <div id="login">
        <div class="logo">
          <img id="title" src="../assets/images/ttl_bmwgroup.png" />
          <img id="symbol" src="../assets/images/logo_bmwgroup.png" />
        </div>
        <div class="headline">
          <h1 class="h1-container">NCB Reporing Tool</h1>
        </div>
        <div class="form-input">
          <a-form
            :model="formState"
            name="normal_login"
            class="login-form"
            @finish="handleFinish"
          >
            <a-form-item
              name="user_id"
              :rules="[
                { required: true, message: 'ユーザー名を入力してください!' },
              ]"
            >
              <a-input v-model:value="formState.user_id" placeholder="ユーザID">
                <template #prefix>
                  <UserOutlined class="site-form-item-icon" />
                </template>
              </a-input>
            </a-form-item>

            <a-form-item
              name="password"
              :rules="[
                { required: true, message: 'パスワードを入力してください!' },
              ]"
            >
              <a-input-password
                v-model:value="formState.password"
                placeholder="パスワード"
              >
                <template #prefix>
                  <LockOutlined class="site-form-item-icon" />
                </template>
              </a-input-password>
            </a-form-item>
            <div v-if="err" class="messeger-err">
              <img src="../assets/images/icon_error_red.png" class="img-err" />
              {{ err ? err : "" }}
            </div>
            <a-form-item :wrapper-col="{ offset: 0, span: 16 }">
              <a-button type="primary" html-type="submit">ログイン</a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
      <div class="copyright">&#169; 2022, BMW Japan Finance Corp.</div>
    </div>
  </div>
</template>
<script lang="ts">
// @ts-nocheck
import { defineComponent, reactive, ref } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import { getCookie } from "@/plugins/cookies";
interface FormState {
  user_id: string;
  password: string;
}
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();
    const err = ref("");
    const formState = reactive<FormState>({
      user_id: "",
      password: "",
    });
    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };
    const handleFinish = async (formState: { user_id: ""; password: "" }) => {
      const { error } = await authStore.login(formState);
      if (!error) return router.push("/contract_search");
      err.value = error.content;
    };
    if (getCookie("loggedIn") === "true") {
      return router.push("/contract_search");
    }

    return {
      formState,
      err,
      onFinishFailed,
      handleFinish,
    };
  },
});
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.login-box {
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
}
#login {
  width: 100%;
  margin: 10vh auto 20px;
  border: 1px #ddd solid;
  border-radius: 6px;
  padding: 30px 50px;
  background-color: #fff;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 30%);
}
.logo {
  width: 100%;
  padding: 0 0 32px;
  #symbol {
    margin-left: 48px;
  }
}
.headline {
  .h1-container {
    font-size: 25px;
    line-height: 100%;
    margin-bottom: 10px;
  }
}
.ant-btn-primary {
  width: 100%;
  max-width: 200px;
  background-color: #aaa38e;
  color: #fff;
  min-width: 100px;
  padding: 6px;
  border: 0px;
}
.ant-btn-primary:hover {
  transition: all 0.5s;
  background-color: #000;
}
.login-form {
  margin-top: 30px;
}
.messeger-err {
  color: red;
  font-size: 14px;
  line-height: 140%;
  height: 30px;
  .img-err {
    height: 16px;
  }
}
.form-input {
  max-width: 400px;
  button {
    margin-top: 10px;
  }
}
</style>
<route lang="yaml">
meta:
  name: "login"
  layout: guest-layout
</route>
