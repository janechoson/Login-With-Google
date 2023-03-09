<template>
  <div class="header">
    <div class="header-form">
      <div class="header-actions">
        <a href="#" @click.prevent="signOutNow()">
          <img class="icon-logout" src="../../assets/logout.png" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMenuStore } from "../stores/menu";
import { getCookie } from "@/plugins/cookies";
import { useAuthStore } from "@/stores/auth";
const useMenu = useMenuStore();
export default defineComponent({
  setup() {
    const userId = getCookie("userId");
    const user = useAuthStore();
    const signOutNow = () => {
      user.logout();
    };
    return { useMenu, signOutNow, userId };
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 82px;
  padding: 0 40px;
  border-bottom: 3px #aaa38e solid;
  background-color: white;

  .header-form {
    display: flex;
    width: 100%;
  }
  .header-form-text {
    display: flex;
    width: max-content;
    h1 {
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 2.5px;
      line-height: 100%;
      margin: 0px 10px 0px 0px;
      padding: 28px 0px;
      color: #333;
    }
    .ncb {
      font-size: 16px;
      font-weight: normal;
      letter-spacing: normal;
      color: #333;
      margin: 0;
      padding: 28px 10px;
    }
  }

  .header-actions {
    display: flex;
    position: absolute;
    right: 60px;
    top: 15px;
    .header-actions-from {
      .header-actions-from-img {
        height: 25px;
        padding-right: 29px;
        border-right: 2px solid #ddd;
      }
      p {
        font-size: 14px;
        line-height: 100%;
        color: #333;
        margin: 0px;
        margin-top: 15px;
      }
    }
    .icon-logout {
      margin-left: 20px;
      height: 24px;
    }
  }
}
</style>
