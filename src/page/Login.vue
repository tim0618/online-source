<template>
  <div class="login">
    <q-input v-model="account" label="Account"></q-input>
    <q-input v-model="password" label="Password"></q-input>
    <q-btn @click="login" color="white" text-color="black" label="LOGIN" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter();


const account = ref("");
const password = ref("");
const login = () => {
  if (account.value && password.value) {
    localStorage.setItem("account", account.value);
    localStorage.setItem("role", "admin");
    router.push('/index');  // 直接跳轉到 '/index'
  }
};


</script>

<style>
.login {
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
