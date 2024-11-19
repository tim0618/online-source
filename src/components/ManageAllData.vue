<template>
  <div class="manageAllData">
    <div class="q-pa-md">
      <div class="my-card" @click="source(1)"></div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["sourceCount"]);

const source = (num) => {
  const account = localStorage.getItem("account");
  emit("sourceCount", account, num);

  // console.log(account + "課程" + num + "觀看+1");
};
</script>

<style scoped>
.manageAllData {
  display: flex;
  border: 1px black solid;
  flex-wrap: wrap;
}
.my-card {
  width: 300px;
  height: 300px;
  border: 1px solid black;
  background-color: cornflowerblue;
}

/* @media (max-width: 960px) {
  .my-card {
    width: 100%;
    max-width: 350px;
  }
} */
</style>

<!-- <q-card class="my-card">
        <q-video
          src="https://www.youtube.com/embed/mr5W8MqW0Mg?si=x_1VXyL3O9YQDFTY"
        />
        <q-card-section>
          <div class="text-h6">First</div>
          <div class="text-subtitle2">by Chun Ting</div>
        </q-card-section>
      </q-card> -->
