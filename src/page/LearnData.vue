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
        :rows="studentWatchTimes"
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
        style="height: auto; margin: 20px"
        flat
        bordered
        title=" 影片觀看總次數 "
        :rows="totalWatchTimes"
        :columns="watchTimesColumns"
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
    sortable: true, // sort 箭頭
  },
  { name: "one", align: "center", label: "One", field: "one" },
  { name: "two", align: "center", label: "Two", field: "two" },
  { name: "three", align: "center", label: "Three", field: "three" },
  { name: "four", align: "center", label: "Four", field: "four" },
];

const accountSourceCount = (account, num) => {
  const accountWatchTimes = studentWatchTimes.filter((s) => s.name === account);
  if (accountWatchTimes[0]) {
    accountWatchTimes[0][num]++;
    accountWatchTimes[0].total = accountTotalWatchTimes(accountWatchTimes[0]);
   }
};

const accountTotalWatchTimes = (account) => {
  return ["one", "two", "three", "four"].reduce(
    (sum, key) => sum + account[key],
    0
  );
};

const studentWatchTimes = reactive([
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

const watchTimesColumns = [
  { name: "total", align: "center", label: "Total", field: "total" },
  { name: "one", align: "center", label: "One", field: "one" },
  { name: "two", align: "center", label: "Two", field: "two" },
  { name: "three", align: "center", label: "Three", field: "three" },
  { name: "four", align: "center", label: "Four", field: "four" },
];

const totalOneWatchTimes = studentWatchTimes.reduce(
  (sum, item) => sum + item.one,
  0
);
const totalTwoWatchTimes = studentWatchTimes.reduce(
  (sum, item) => sum + item.two,
  0
);
const totalThreeWatchTimes = studentWatchTimes.reduce(
  (sum, item) => sum + item.three,
  0
);
const totalFourWatchTimes = studentWatchTimes.reduce(
  (sum, item) => sum + item.four,
  0
);

const totalWatchTimes = reactive([
  {
    total: 417,
    one: totalOneWatchTimes,
    two: totalTwoWatchTimes,
    three: totalThreeWatchTimes,
    four: totalFourWatchTimes,
  },
]);

// const totalWatchTimes = reactive([
//   studentWatchTimes.reduce((total, item) => {
//     total.one += item.one || 0;
//     total.two += item.two || 0;
//     total.three += item.three || 0;
//     total.four += item.four || 0;
//     return total
//   })
// ]);

const pagination = ref({
  rowsPerPage: 5,
});
</script>
