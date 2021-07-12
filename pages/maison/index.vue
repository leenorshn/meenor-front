<template>
  <div class="pt-4 flex space-x-3">
    <div class="w-1/4 mb-24">
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              class="
                shadow
                overflow-hidden
                border-b border-gray-200
                sm:rounded-lg
              "
            >
              <div
                class="h-16 bg-blue-900 px-3 flex justify-between items-center"
              >
                <h3 class="text-white text-2xl font-semibold">Mes maisons</h3>
                <div>
                  <nuxt-link
                    to="/maison/new"
                    class="px-4 text-blue-50 py-1 bg-blue-400 rounded"
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
        class="
          flex flex-col
          px-8
          py-8
          items-center
          space-y-3
          justify-center
          bg-white
          shadow
          rounded-md
        "
      >
        <h2 class="text-3xl text-blue-700 font-semibold">
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