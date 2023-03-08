<template>
  <div class="side-bar">
    <div id="idCheck" class="side-bar-form">
      <div class="side-bar-menu">
        <div class="side-bar-group"><label>契約管理機能メニュー</label></div>
        <div
          v-for="item in contracts"
          :key="item.key"
          class="side-bar-item"
          @click="$router.push(item.route)"
        >
          <h1 @click.prevent="handleClick(item)">{{ item.title }}</h1>
        </div>
      </div>

      <div class="side-bar-menu">
        <div class="side-bar-group"><label>ログ機能メニュー</label></div>
        <div
          v-for="item in logs"
          :key="item.key"
          class="side-bar-item"
          @click="$router.push(item.route)"
        >
          <h1 @click.prevent="handleClick(item)">{{ item.title }}</h1>
        </div>
      </div>

      <div class="side-bar-menu">
        <div class="side-bar-group"><label>管理者機能メニュー</label></div>
        <div
          v-for="item in manage"
          :key="item.key"
          class="side-bar-item"
          @click="$router.push(item.route)"
        >
          <h1 @click.prevent="handleClick(item)">{{ item.title }}</h1>
        </div>
      </div>

      <div v-if="idCheckMenu === true" class="side-bar-menu">
        <div class="side-bar-group"><label>その他機能メニュー</label></div>
        <div
          v-for="item in encrypt"
          :key="item.key"
          class="side-bar-item"
          @click="$router.push(item.route)"
        >
          <h1 @click.prevent="handleClick(item)">{{ item.title }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, onMounted, ref } from "vue";
import { useMenuStore } from "../../layouts/stores/menu";
import { useRoute } from "vue-router";
import { getMessage } from "@/services/auth/index";
import { getCookie } from "@/plugins/cookies";

const contracts = [
  {
    key: "1",
    group: "契約管理機能",
    title: "契約検索",
    route: "/contract_search",
  },
  {
    key: "2",
    group: "契約管理機能",
    title: "登録更新結果",
    route: "/contract_regist",
  },
  {
    key: "3",
    group: "契約管理機能",
    title: "ウォッチ契約管理",
    route: "/contract_watch",
  },
];

const logs = [
  {
    key: "4",
    group: "ログ機能",
    title: "バッチログ",
    route: "/log_batch",
  },
  {
    key: "5",
    group: "ログ機能",
    title: "操作ログ",
    route: "/log_operation",
  },
  {
    key: "6",
    group: "ログ機能",
    title: "月次チェック",
    route: "/log_check",
  },
];

const manage = [
  {
    key: "7",
    group: "管理者機能",
    title: "ユーザー管理",
    route: "/manage_user",
  },
];

const guardroute = [
  {
    key: "8",
    group: "契約管理機能",
    title: "契約詳細・変更",
    route: "/contract_search_report/:id",
  },
  {
    key: "9",
    group: "管理者機能",
    title: "ユーザー登録",
    route: "/manage_user_regist",
  },
  {
    key: "10",
    group: "契約管理機能",
    title: "ウォッチリスト管理",
    route: "/contract_watch_list",
  },

  {
    key: "11",
    group: "管理者機能",
    title: "ユーザー更新",
    route: "/manage_user_update/:id",
  },
];

const encrypt = [
  {
    key: "12",
    group: "その他機能",
    title: "暗号化・復号化",
    route: "/encrypt_decrypt",
  },
];

export default defineComponent({
  setup() {
    const route = useRoute();
    const useMenu = useMenuStore();
    const parentPath = useRoute();
    const idCheckMenu = ref<boolean>(false);
    const roleType = getCookie("roleType");

    watch(
      () => parentPath.path,
      () => {
        const items = [contracts, logs, manage, guardroute];
        const currentItem = items.reduce(
          (acc: any, item) =>
            acc || item.find((i) => i.route === parentPath.path),
          null
        );
        if (currentItem) {
          useMenu.currentLabelRouter = currentItem.title;
          useMenu.currentLabelGroup = currentItem.group;
        }
      },
      { immediate: true }
    );

    const handleClick = (item: any) => {
      useMenu.currentLabelRouter = item.title;
      useMenu.currentLabelGroup = item.group;
    };

    onMounted(async () => {
      if (roleType === "A") {
        // 管理者のみは暗号化・復号化機能を使用可能
        idCheckMenu.value = true;
      } else {
        const isCheckRole: any = document.getElementById("idCheck");
        isCheckRole.style.height = "460px";
      }
    });
    return {
      contracts,
      manage,
      logs,
      route,
      useMenu,
      handleClick,
      parentPath,
      guardroute,
      encrypt,
      idCheckMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
.side-bar {
  .side-bar-form {
    width: 260px;
    height: 550px;
    border-radius: 4px;
    padding: 20px;
    border: 1px #999 solid;
    background-color: #fff;
    .side-bar-menu {
      margin-bottom: 30px;
      .side-bar-group {
        margin: 0 0 5px 0;
        text-align: center;
        background-color: #444;
        color: #fff;
        padding: 1px 10px;
        width: 218px;
        label {
          font-size: 14px;
          line-height: 100%;
        }
      }
      .side-bar-item {
        padding: 8px;
        margin-bottom: 5px;
        border-bottom: 1px #ddd solid;
        cursor: pointer;
        h1 {
          line-height: 100%;
          cursor: pointer;
          margin: 0;
          border-width: 0;
          text-align: left;
          font-size: 14px;
          width: 100%;
          font-weight: 300;
          letter-spacing: 1px;
        }
      }
      .side-bar-item:hover {
        background: white;
        color: rgb(204, 196, 196);
      }
    }
  }
}
</style>

<style>
*:not(.side-bar-group) {
  box-sizing: border-box;
}
</style>
