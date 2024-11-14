<template>
  <q-btn rounded color="primary" label="新增" @click="addSource" />
  <q-btn rounded color="primary" label="修改" @click="editSource" />
  <q-btn rounded color="primary" label="刪除" />

  <div class="manageAllData">
    <manage-all-data />
  </div>
</template>

<script setup>
import ManageAllData from "../components/ManageAllData.vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const addSource = () => {
  $q.dialog({
    title: "Add Source",
    message: "router",
    prompt: {
      model: "",
      isValid: (val) => val.length > 2, // Validate
      type: "text",
    },
    cancel: true,
    persistent: false,
  });
};

const editSource = () => {
  $q.dialog({
    title: "Editor Source",
    message: "router",
    prompt: {
      model: "",
      isValid: (val) => val.length > 2, // Validate
      type: "text",
    },
    cancel: true,
    persistent: false,
  });
};
</script>

<style>
.manageAllData {
  display: flex;
}
</style>
