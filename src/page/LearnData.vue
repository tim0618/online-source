<template>
  <div>
    <manage-all-data />
  </div>

  <div style="border: 1px black solid">
    <div class="q-pa-md">
      <q-table
        style="height: 400px"
        flat
        bordered
        title=" 使用者影片觀看次數 "
        :rows="rows"
        :columns="columns"
        row-key="index"
        virtual-scroll
        v-model:pagination="pagination"
        :rows-per-page-options="[0]"
      />
    </div>
  </div>

  <div style="border: 1px black solid">
    <p>影片觀看總次數</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ManageAllData from "../components/ManageAllData.vue";

const columns = [
  {
    name: "index",
    label: "#",
    field: "index",
  },
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Total",
    field: "calories",
    sortable: true, // sort 箭頭
  },
  { name: "one", label: "One", field: "one" },
  { name: "two", label: "Two", field: "two" },
  { name: "three", label: "Three", field: "three" },
  { name: "four", label: "Four", field: "four" },
];

const seed = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    one: 6.0,
    two: 24,
    three: 4.0,
    four: 87,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    one: 9.0,
    two: 37,
    three: 4.3,
    four: 129,
  },
  {
    name: "Eclair",
    calories: 262,
    one: 16.0,
    two: 23,
    three: 6.0,
    four: 337,
  },
  {
    name: "Cupcake",
    calories: 305,
    one: 3.7,
    two: 67,
    three: 4.3,
    four: 413,
  },
  {
    name: "Gingerbread",
    calories: 356,
    one: 16.0,
    two: 49,
    three: 3.9,
    four: 327,
  },
  {
    name: "Jelly bean",
    calories: 0,
    one: 0,
    two: 0,
    three: 0,
    four: 0,
  },
  // {
  //   name: "Lollipop",
  //   calories: 392,
  //   one: 0.2,
  //   two: 98,
  //   three: 0,
  //   four: 38,
  // },
  // {
  //   name: "Honeycomb",
  //   calories: 408,
  //   one: 3.2,
  //   two: 87,
  //   three: 6.5,
  //   four: 562,
  // },
  // {
  //   name: "Donut",
  //   calories: 452,
  //   one: 25.0,
  //   two: 51,
  //   three: 4.9,
  //   four: 326,
  // },
  // {
  //   name: "KitKat",
  //   calories: 518,
  //   one: 26.0,
  //   two: 65,
  //   three: 7,
  //   four: 54,
  // },
];

let rows = ref([]);

onMounted(() => {
  // for (let i = 0; i < 10; i++) {
  rows.value = rows.value.concat(seed.slice(0).map((r) => ({ ...r })));
  // }
  rows.value.forEach((row, index) => {
    row.index = index;
  });
});

const pagination = ref({
  rowsPerPage: 5,
});
</script>
