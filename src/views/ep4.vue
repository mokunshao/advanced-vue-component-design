<template>
  <div>
    <button @click="modalOpen = true">Open</button>
    <announcement-modal :show="modalOpen" @close="modalOpen = false"
      >modal</announcement-modal
    >
  </div>
</template>

<script>
import AnnouncementModal from '../components/AnnouncementModal.vue';

export default {
  components: {
    AnnouncementModal,
  },
  name: 'ep4',
  data() {
    return { modalOpen: false };
  },
};
</script>
