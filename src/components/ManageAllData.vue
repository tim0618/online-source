<template>
  <div class="manageAllData">
    <div class="q-pa-md" v-for="n in 4" :key="n">
      <q-card class="my-card">
        <q-video
          src="https://www.youtube.com/embed/mr5W8MqW0Mg?si=x_1VXyL3O9YQDFTY"
        />
        <q-card-section>
          <div class="text-h6">First</div>
          <div class="text-subtitle2">by Chun Ting</div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<style scoped>
.manageAllData{
    display: flex;
    border: 1px black solid;
}
.my-card{
    width: 100%;
    max-width: 300px;
}
</style>
