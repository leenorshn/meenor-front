<template>
  <div class="h-24 rounded-md m-4 w-full bg-greenP flex">
    <div></div>
    <div class="text-white text-xl font-semibold">{{ notification.message }}</div>
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