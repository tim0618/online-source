<template>
  <div>
    <h1><b>學習心得版:</b></h1>
    <input v-model="inputValue" />
    <br />
    *可同時多開分頁進行填寫
  </div>
</template>

<script setup>
import { debounce } from "lodash";
import { ref, watch } from "vue";

const channel = new BroadcastChannel("test");
const inputValue = ref("");

const debouncedPostMessage = debounce((newValue) => {
  channel.postMessage({ Value: newValue });
});

watch(inputValue, (newValue) => {
  debouncedPostMessage(newValue);
});

channel.onmessage = (event) => {
  inputValue.value = event.data.Value;
};
</script>
