<template>
  <div class="wrapper">
    <button @click="modalOpen = true">Open</button>
    <announcement-modal-4
      :show="modalOpen"
      @close="modalOpen = false"
      :prevent-background-scrolling="true"
      >modal</announcement-modal-4
    >
  </div>
</template>

<script>
import AnnouncementModal4 from '../components/AnnouncementModal4.vue';

export default {
  components: {
    AnnouncementModal4,
  },
  name: 'ep5',
  data() {
    return { modalOpen: true };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 50vh;
  margin-bottom: 200vh;
}
</style>
