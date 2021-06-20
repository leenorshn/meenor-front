<template>
    <div class="w-1/3">
        <div v-for="(n,i) in notifications" :key="i">
            <div class="h-24 rounded-md m-4 w-full bg-greenP">
            {{n}}
            </div>
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