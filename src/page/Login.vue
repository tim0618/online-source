<template>
  <div class="login">
    <q-input v-model="account" label="Account"></q-input>
    <q-input v-model="password" label="Password"></q-input>
    <q-btn @click="login" color="white" text-color="black" label="LOGIN" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const account = ref("");
const password = ref("");
const loginData = ref({});

const login = () => {
  loginData.value = accountList.find(function (x) {
    return x.account == account.value;
  });

  if (account.value && password.value) {
    if (loginData.value) {
      localStorage.setItem("account", loginData.value.account);
      localStorage.setItem("role", loginData.value.role);
      router.push("/index"); // 直接跳轉到 '/index'
    } else {
      console.log("查無此帳號");
    }
  } else {
    console.log("請輸入帳密");
  }
};

const accountList = [
  { account: "admin", password: "", role: "admin" },
  { account: "admin1", password: "", role: "admin" },
  { account: "user", password: "", role: "student" },
  { account: "user1", password: "", role: "student" },
  { account: "user2", password: "", role: "student" },
  
  { account: "Tim", password: "", role: "student" },
  { account: "Henry", password: "", role: "student" },
  { account: "Buzz", password: "", role: "student" },
  { account: "JL", password: "", role: "student" },
  { account: "Charlie", password: "", role: "student" },
  { account: "Matt", password: "", role: "student" },
  { account: "Apple", password: "", role: "student" },
  { account: "Boris", password: "", role: "student" },
  { account: "FuSoon", password: "", role: "student" },
  { account: "Tina", password: "", role: "student" },
];
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
