<template>
  <div>
    <q-layout
      view="lHh Lpr lff"
      container
      style="height: 100vh"
      class="shadow-2 rounded-borders"
    >
      <q-header elevated class="bg-cyan-10" style="height: 8vh">
        <q-toolbar>
          <q-toolbar-title>歡迎來到 TT 心靈課程 ~~</q-toolbar-title>
          <button @click="logout">登出</button>
        </q-toolbar>
      </q-header>

      <q-drawer show-if-above :width="250" :breakpoint="400">
        <q-scroll-area
          style="
            height: calc(100% - 200px);
            margin-top: 200px;
            border-right: 1px solid #ddd;
          "
        >
          <q-list padding>
            <router-link class="navbar" to="/Index">
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="inbox" />
                </q-item-section>
                <q-item-section> 首頁 </q-item-section>
              </q-item>
            </router-link>

            <router-link class="navbar" to="/LearnData">
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="send" />
                </q-item-section>
                <q-item-section> 學習專區 </q-item-section>
              </q-item>
            </router-link>

            <router-link class="navbar" to="/Experience">
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="drafts" />
                </q-item-section>
                <q-item-section> 學習心得 </q-item-section>
              </q-item>
            </router-link>

            <router-link class="navbar" to="/ManageData">
              <q-item active clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="drafts" />
                </q-item-section>
                <q-item-section> 資源管理 </q-item-section>
              </q-item>
            </router-link>

            <router-link class="navbar" to="/AAA">
              <q-item active clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="inbox" />
                </q-item-section>
                <q-item-section> 酷專區 </q-item-section>
              </q-item>
            </router-link>

            <!-- <q-expansion-item
              :content-inset-level="0.5"
              expand-separator
              icon="star"
              label="數據管理"
            >
              <router-link class="navbar" to="/LearnData">
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="send" />
                  </q-item-section>
                  <q-item-section> 學習數據 </q-item-section>
                </q-item>
              </router-link>

              <router-link class="navbar" to="/TrafficData">
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="send" />
                  </q-item-section>
                  <q-item-section> 流量數據 </q-item-section>
                </q-item>
              </router-link>
            </q-expansion-item> -->

          </q-list>
        </q-scroll-area>

        <q-img
          class="absolute-top"
          src="https://cdn.quasar.dev/img/material.png"
          style="height: 200px"
        >
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="70px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <div class="text-weight-bold">Chun Ting , Kuo</div>
            <div>@TryGiBy</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <RouterView />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import { useRouter } from "vue-router";
const router = useRouter();

const logout = () => {
  localStorage.clear();
  router.push("/");
};
</script>

<style>
.navbar {
  color: black;
  text-decoration: none;
}
</style>
