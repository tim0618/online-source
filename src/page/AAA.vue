<template>
  <div>
    <div style="font-size: 30px;">計時器</div>
    <q-btn label="打開 Dialog" @click="openDialog" />
    <q-dialog v-model="dialogVisible" @show="startTiming" @hide="stopTiming">
      <q-card>
        <q-card-section>
          <div class="text-h6">這是一個 Dialog</div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="關閉" @click="dialogVisible = false" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <div v-if="watchTime > 0">Dialog 已開啟：{{ watchTime }} 秒</div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const dialogVisible = ref(false);
    const watchTime = ref(0);
    let startTime = 0;

    const openDialog = () => {
      dialogVisible.value = true;
    };

    const startTiming = () => {
      startTime = Date.now(); // 記錄打開時間
    };

    const stopTiming = () => {
      const endTime = Date.now();
      watchTime.value = Math.floor((endTime - startTime) / 1000); // 計算秒數
    };

    return {
      dialogVisible,
      watchTime,
      openDialog,
      startTiming,
      stopTiming,
    };
  },
};
</script>
