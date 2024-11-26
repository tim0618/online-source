<template>
  <div>
    <manage-all-data @sourceCount="accountSourceCount" />
  </div>

  <div style="border: 1px black solid">
    <div class="q-pa-md">
      <q-table
        style="height: 400px; margin: 20px"
        flat
        bordered
        title=" 學生影片觀看次數 "
        :rows="studentViews"
        :columns="studentColumns"
        row-key="index"
        virtual-scroll
        v-model:pagination="pagination"
        :rows-per-page-options="[0]"
      />
    </div>
  </div>
  <div style="border: 1px black solid">
    <div class="q-pa-md">
      <q-table
        style="height: 400px; margin: 20px"
        flat
        bordered
        title=" 學生影片觀看時間 "
        :rows="studentViewTimes"
        :columns="studentColumns"
        row-key="index"
        virtual-scroll
        v-model:pagination="pagination"
        :rows-per-page-options="[0]"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import ManageAllData from "../components/ManageAllData.vue";

const studentColumns = [
  {
    name: "name",
    align: "center",
    required: true,
    label: "Name",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "total",
    align: "center",
    label: "Total",
    field: "total",
    sortable: true,
  }, // sort 箭頭
  ,
  { name: "one", align: "center", label: "One", field: "one" },
  { name: "two", align: "center", label: "Two", field: "two" },
  { name: "three", align: "center", label: "Three", field: "three" },
  { name: "four", align: "center", label: "Four", field: "four" },
];

const studentViews = reactive([
  {
    name: "Tim",
    total: 0,
    one: 0,
    two: 0,
    three: 0,
    four: 0,
  },
  {
    name: "Henry",
    total: 112,
    one: 13,
    two: 37,
    three: 43,
    four: 19,
  },
  {
    name: "Buzz",
    total: 46,
    one: 10,
    two: 23,
    three: 6,
    four: 7,
  },
  {
    name: "JL",
    total: 16,
    one: 3,
    two: 6,
    three: 4,
    four: 3,
  },
  {
    name: "Charlie",
    total: 22,
    one: 1,
    two: 4,
    three: 9,
    four: 7,
  },
  {
    name: "Matt",
    total: 4,
    one: 4,
    two: 0,
    three: 0,
    four: 0,
  },
  {
    name: "Apple",
    total: 28,
    one: 2,
    two: 8,
    three: 10,
    four: 8,
  },
  {
    name: "Boris",
    total: 17,
    one: 2,
    two: 8,
    three: 5,
    four: 2,
  },
  {
    name: "FuSoon",
    total: 151,
    one: 25,
    two: 51,
    three: 49,
    four: 26,
  },
  {
    name: "Tina",
    total: 22,
    one: 6,
    two: 5,
    three: 7,
    four: 4,
  },
]);

const studentViewTimes = reactive([
  {
    name: "Tim",
    total: 0,
    one: 0,
    two: 0,
    three: 0,
    four: 0,
  },
]);

const accountSourceCount = (account, num, watchTime) => {
  console.log("AAA", watchTime.value);
  const accountTimes = studentViews.filter((s) => s.name === account);
  const accountViewTimes = studentViewTimes.filter((s) => s.name === account);

  if (accountTimes[0]) {
    accountTimes[0][num]++;
    accountTimes[0].total = accountTotalWatchViews(accountTimes[0]);

    accountViewTimes[0][num] += watchTime.value;
    accountViewTimes[0].total = accountTotalWatchViews(accountViewTimes[0]);
  }
};

const accountTotalWatchViews = (account) => {
  return ["one", "two", "three", "four"].reduce(
    (sum, key) => sum + account[key],
    0
  );
};

const pagination = ref({
  rowsPerPage: 5,
});
</script>
