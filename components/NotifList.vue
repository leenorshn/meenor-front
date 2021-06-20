<template>
    <div class="w-1/3">
        <div v-for="(n,i) in notifications" :key="i">
            {{n}}
        </div>

    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    computed:{
        ...mapState(["notifications"])
    }
}
</script>