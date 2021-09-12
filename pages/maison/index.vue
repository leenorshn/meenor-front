<template>
  <div class="">
    
        <div class="mt-6">
          <div class="">
            <div
              class="container mx-auto overflow-hidden bg-white border-b border-gray-200 divide-y divide-gray-300 shadow md:max-w-3xl lg:max-w-4xl sm:rounded-lg"
            >
              
              <nuxt-link
                class="block w-full"
                v-for="(bat, i) in batiments"
                :key="i"
                :to="`/maison/${bat.id}`"
              >
                <batiment-card :batiment="bat" />
              </nuxt-link>
            </div>
          </div>
      
    </div>

    <!-- <div class="w-3/4">
      <DetailHouse v-if="batiment" :batiment="batiment" />
      <div
        v-else
        class="flex flex-col items-center justify-center px-8 py-8 space-y-3 bg-white rounded-md shadow "
      >
        <h2 class="text-3xl font-semibold text-blue-700">
          Aucune selection
        </h2>
        <div>
          <img src="/../ndako.svg" class="w-32 h-32" alt="">
        </div>
        <p class="text-xl text-gray-500">
          Le detail de la maison selectionnée sera ici 
        </p>
      </div>
    </div> -->
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  middleware: "isAuth",
  data() {
    return {
      cities: [],
      hire: true,
      batiment: null,
    };
  },
  mounted() {
    this.loadBatiment();
  },
  computed: {
    // ...mapState({batiments:'batiment/batiments'}),
    batiments() {
      return this.$store.state.batiment.batiments;
    },
  },
  methods: {
    ...mapActions({ loadBatiment: "batiment/loadBatiment" }),
    batt(t) {
      console.log("Cliqued");
      this.batiment = t;
    },
  },
};
</script>