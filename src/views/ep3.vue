<template>
  <div>
    <date-picker v-model="date"></date-picker>
    <date-picker v-model="date2" format="MMM D YYYY"></date-picker>
    <date-picker
      v-model="date3"
      format="YYYY年MM月D日"
      :options="{ firstDay: 1 }"
    ></date-picker>
  </div>
</template>

<script>
import DatePicker from '../components/DatePicker.vue';

export default {
  name: 'ep3',
  components: {
    DatePicker,
  },
  data() {
    return {
      date: '2018-09-09',
      date2: '2015-01-19',
      date3: '2019-10-1',
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
