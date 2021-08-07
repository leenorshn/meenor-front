<template>
  <div class="flex pt-4 mx-4 space-x-3">
    <div class="mb-24">
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto ">
          <div
            class="inline-block min-w-full py-2 align-middle "
          >
            <div
              class="container mx-auto overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"
            >
              <div
                class="flex items-center justify-between h-16 px-3 bg-blue-900"
              >
                <h3 class="text-xl font-semibold text-white">Mes maisons</h3>
                <div>
                  <nuxt-link
                    to="/maison/new"
                    class="px-4 py-1 bg-blue-400 rounded text-blue-50"
                    >Nouveau</nuxt-link
                  >
                </div>
              </div>
              <table class="min-w-full divide-y divide-gray-200">
                <tbody class="bg-white divide-y divide-gray-200">
                  <!-- <button  v-for="(bat, i) in batiments" :key="i" @click="batt(bat)"> -->
                  <batiment-card
                   
                    :batiment="bat"
                    v-for="(bat, i) in batiments" 
                    :key="i" 
                   @selected="batt"
                    
>
                 
                 </batiment-card>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-3/4">
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
    </div>
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
    batt(t){
      console.log("Cliqued");
      this.batiment=t;
    }
  },
};
</script>