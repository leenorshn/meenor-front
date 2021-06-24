<template>
    <div class="w-1/4">
        <div v-for="(n,i) in notifications" :key="i">
           <notif :notification="n"/>
        </div>

    </div>
</template>
<script>
import { mapState } from "vuex";
import Notif from './Notif.vue';
export default {
  components: { Notif },
    computed:{
        ...mapState(["notifications"])
    }
}
</script>