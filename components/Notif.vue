<template>
  <div class="h-24 rounded-md m-4 w-full flex justify-between items-center p-2" :class="`${notification.type=='error'?'bg-orange-500':'bg-greenP'}`">
    <div v-if="notification.type=='error'">
        <!-- error image in res -->
    </div>
    <div v-else>
        <!-- image done -->
    </div>
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