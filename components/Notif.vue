<template>
  <div
    class="h-24 rounded-md m-4 w-full flex justify-around items-center p-2"
    :class="`${notification.type == 'error' ? 'bg-orange-500' : 'bg-greenP'}`"
  >
    <div v-if="notification.type == 'error'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
    <div v-else>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    </div>
    <div class="text-white text-lg font-semibold">
      {{ notification.message }}
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    notification: Object,
  },
  data() {
    return {
      timeOut: null,
    };
  },
  created() {
    this.timeOut = setTimeout(() => {
      this.removeNotification(this.notification);
    }, 5000);
  },
  beforeDestroy() {
    clearTimeout(this.timeOut);
  },
  methods: {
    ...mapActions(["removeNotification"]),
  },
};
</script>