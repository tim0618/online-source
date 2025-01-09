<template>
  <!-- @show：當組件（如彈窗、對話框）被顯示時觸發。例如，開啟對話框時執行某些初始化操作。 -->
  <!-- @hide：當組件被隱藏時觸發。例如，關閉對話框時停止某些動作或清理數據。 -->

  <div class="manageAllData">
    <div class="q-pa-md">
      <q-btn class="myCard" @click="oneVisible = true">
        <img
          class="btn-image"
          src="https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg"
          alt="Image"
        />
      </q-btn>
    </div>
    <div class="q-pa-md">
      <q-btn class="myCard" @click="twoVisible = true">
        <img
          class="btn-image"
          src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg"
          alt="Image"
      /></q-btn>
    </div>
    <div class="q-pa-md">
      <q-btn class="myCard" @click="threeVisible = true"
        ><img
          class="btn-image"
          src="https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg"
          alt="Image"
        />
      </q-btn>
    </div>
    <div class="q-pa-md">
      <q-btn class="myCard" @click="fourVisible = true"
        ><img
          class="btn-image"
          src="https://images.pexels.com/photos/5910768/pexels-photo-5910768.jpeg"
          alt="Image"
        />
      </q-btn>
    </div>
  </div>

  <q-dialog v-model="oneVisible" @show="startTiming" persistent>
    <q-card>
      <q-card-section>
        <div class="text-h6">哈囉我是第一</div>
      </q-card-section>
      <q-card-actions alige="right">
        <q-btn flat label="關閉" @click="source('one')" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-dialog v-model="twoVisible" @show="startTiming">
    <q-card>
      <q-card-section>
        <div class="text-h6">哈囉我是第二</div>
      </q-card-section>
      <q-card-actions alige="right">
        <q-btn flat label="關閉" @click="source('two')" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-dialog v-model="threeVisible" @show="startTiming">
    <q-card>
      <q-card-section>
        <div class="text-h6">哈囉我是第三</div>
      </q-card-section>
      <q-card-actions alige="right">
        <q-btn flat label="關閉" @click="source('three')" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-dialog v-model="fourVisible" @show="startTiming">
    <q-card>
      <q-card-section>
        <div class="text-h6">哈囉我是第四</div>
      </q-card-section>
      <q-card-actions alige="right">
        <q-btn flat label="關閉" @click="source('four')" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue";

const oneVisible = ref(false);
const twoVisible = ref(false);
const threeVisible = ref(false);
const fourVisible = ref(false);

const watchTime = ref(0);
let startTime = 0;

const startTiming = () => {
  startTime = Date.now(); // 記錄打開時間
};

// 生命週期錯誤
// const stopTiming = () => {
//   const endTime = Date.now();
//   watchTime.value = Math.floor((endTime - startTime) / 1000); // 計算秒數
// };

const emit = defineEmits(["sourceCount"]);

const source = (sourceNum) => {
  oneVisible.value = false;
  twoVisible.value = false;
  threeVisible.value = false;
  fourVisible.value = false;
  const endTime = Date.now();
  watchTime.value = Math.floor((endTime - startTime) / 1000);

  const account = localStorage.getItem("account");
  emit("sourceCount", account, sourceNum, watchTime);

  // console.log(account + "課程" + num + "觀看+1");
};
</script>

<style scoped>
.manageAllData {
  display: flex;
  border: 1px black solid;
  flex-wrap: wrap;
}
.myCard {
  width: 250px;
  height: 200px;
  border: 1px solid black;
  background-color: cornflowerblue;
}
.btn-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 確保圖片完全填滿且不變形 */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
/* @media (max-width: 960px) {
  .myCard {
    width: 100%;
    max-width: 350px;
  }
} */
</style>
