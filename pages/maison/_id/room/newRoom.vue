<template>
  <div class="w-8/12 mx-auto">
    <div>
      <div class="space-y-6">
        <div class="flex items-center justify-between">
<h4 class="pt-4 font-semibold">
          Quelle type de location voulez-vous creer?
        </h4>
        <nuxt-link :to="`/maison`" class="px-8 py-1 mt-2 text-white bg-black rounded">retour</nuxt-link>
        </div>
        

        <div class="flex items-center justify-around w-full py-2 group">
          <div>
            <input
              type="radio"
              id="isLivingRoom"
              value="APARTEMENT"
              class="w-5 h-5 mr-4 rounded-full"
              v-model="typeLocation"
            />
            <label for="isLivingRoom">C'est un apartement</label>
          </div>
          <div>
            <input
              type="radio"
              id="isShop"
              value="BOUTIQUE"
              class="w-5 h-5 mr-4 rounded-full"
              v-model="typeLocation"
            />
            <label for="isShop">C'est une boutique</label>
          </div>
          <div>
            <input
              type="radio"
              id="isShop"
              value="KIOSQUE"
              class="w-5 h-5 mr-4 rounded-full"
              v-model="typeLocation"
            />
            <label for="isShop">C'est une kiosque</label>
          </div>
          <div>
            <input
              type="radio"
              id="isShop"
              value="ETALAGE"
              class="w-5 h-5 mr-4 rounded-full"
              v-model="typeLocation"
            />
            <label for="isShop">C'est une etalage</label>
          </div>
        </div>
      </div>
      <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
          <div class="border-t-2 border-gray-200"></div>
        </div>
      </div>
      <div class="w-full">
        <div class="flex items-center w-full space-x-4">
          <div class="flex flex-col w-1/3">
            <label class="my-2" for="numero">Numero</label>
            <input
              v-model="room.numero"
              class=""
              type="text"
              placeholder="numero de la chambre"
            />
          </div>
          <div class="flex flex-col w-1/3">
            <label class="my-2" for="numero">Prix/mensuel</label>
            <input
              v-model.number="room.price"
              type="number"
              placeholder="Ex: 100$"
            />
          </div>
          <div class="flex flex-col w-1/3">
            <label class="my-2" for="format">Forma de location</label>
            <select v-model="room.format" id="format">
              <option value="MEDIUM">Normale</option>
              <option value="SMALL">Petite porte</option>
              <option value="DOUBLE">Double porte</option>
            </select>
          </div>
        </div>

        <div class="py-6 space-y-2">
          <h4 class="text-sm font-bold">Autres Information</h4>
          <div>
            <input
              v-model="hasPower"
              class="w-4 h-4 mr-4 rounded"
              :value="true"
              type="checkbox"
            />
            <label for="hasPower">Il ya du courant</label>
          </div>
          <div>
            <input
              v-model="hasWater"
              class="w-4 h-4 mr-4 rounded"
              :value="true"
              type="checkbox"
            />
            <label for="hasWater">Il ya de l'eau</label>
          </div>
          <div>
            <input
              v-model="isAvalaible"
              class="w-4 h-4 mr-4 rounded"
              :value="true"
              type="checkbox"
            />
            <label for="isAvailable">Est disponible</label>
          </div>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
          <div class="py-5">
            <div class="border-t-2 border-gray-200"></div>
          </div>
        </div>
        <div class="flex justify-end space-x-5">
          <button
            @click.prevent="annuler()"
            class="px-8 py-2 text-white bg-orange-600 rounded-md"
          >
            Annulez
          </button>

          <button
            @click.prevent="enregisterApartement()"
            class="px-8 py-2 text-white bg-blue-600 rounded-md"
          >
            Enregistrer 
          </button>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      typeLocation: "APARTEMENT",
      room: {},
      hasPower: false,
      hasWater: false,
      isAvalaible: false,
    };
  },
  methods: {
    ...mapActions({
      createRoom: "house/createRoom",
    }),
    async enregisterApartement() {
      try {
        this.createRoom({
          format: this.room.format,
          category:this.typeLocation,
          niveau: this.$route.params.id,
          numero: this.room.numero,
          hasPower: this.hasPower,
          hasWater: this.hasWater,
          isAvalaible: this.isAvalaible,
          price: this.room.price
        });

        this.annuler();
      } catch (e) {
        this.annuler();
        console.error(e);
      }
    },
    annuler() {
      this.typeLocation = "APARTEMENT";
      this.room = {};
      this.hasPower = false;
      this.hasWater = false;
      this.isAvalaible = false;
    },
  },
};
</script>