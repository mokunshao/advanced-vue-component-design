<template>
  <div>
    <button @click="modalOpen = true">Open</button>
    <button @click="modalOpen2 = true">Open2</button>
    <button @click="modalOpen3 = true">Open3</button>
    <announcement-modal :show="modalOpen" @close="modalOpen = false"
      >modal</announcement-modal
    >
    <announcement-modal-2 :show="modalOpen2" @close="modalOpen2 = false"
      >modal</announcement-modal-2
    >
    <announcement-modal-3 :show="modalOpen3" @close="modalOpen3 = false"
      >modal</announcement-modal-3
    >
  </div>
</template>

<script>
import AnnouncementModal from '../components/AnnouncementModal.vue';
import AnnouncementModal2 from '../components/AnnouncementModal2.vue';
import AnnouncementModal3 from '../components/AnnouncementModal3.vue';

export default {
  components: {
    AnnouncementModal,
    AnnouncementModal2,
    AnnouncementModal3,
  },
  name: 'ep4',
  data() {
    return { modalOpen: false, modalOpen2: false, modalOpen3: false };
  },
};
</script>
