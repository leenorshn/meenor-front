<template>
  <div class="w-8/12 mx-auto">
    <div>
      <div class="space-y-6">
        <h4 class="pt-4 font-semibold">
          Quelle type de location voulez-vous creer?
        </h4>

        <div class="flex items-center justify-around w-1/2 group py-2">
          <div>
            <input
              type="radio"
              id="isLivingRoom"
              value="apartement"
              class="rounded-full h-5 w-5 mr-4"
              v-model="typeLocation"
            />
            <label for="isLivingRoom">C'est un apartement</label>
          </div>
          <div>
            <input
              type="radio"
              id="isShop"
              value="boutique"
              class="rounded-full h-5 w-5 mr-4"
              v-model="typeLocation"
            />
            <label for="isShop">C'est une boutique</label>
          </div>
        </div>
      </div>
      <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
          <div class="border-t-2 border-gray-200"></div>
        </div>
      </div>
      <div class="w-full">
        <div class="flex space-x-4 items-center w-full">
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
            <input v-model="room.price" type="number" placeholder="Ex: 100$" />
          </div>
          <div v-if="typeLocation == 'boutique'" class="flex flex-col w-1/3">
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
              v-model="room.hasPower"
              class="rounded h-4 w-4 mr-4"
              type="checkbox"
            />
            <label for="hasPower">Il ya du courant</label>
          </div>
          <div>
            <input
              v-model="room.hasWater"
              class="rounded h-4 w-4 mr-4"
              type="checkbox"
            />
            <label for="hasWater">Il ya de l'eau</label>
          </div>
          <div>
            <input
              v-model="room.isAvailable"
              class="rounded h-4 w-4 mr-4"
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
            class="px-8 py-2 bg-orange-600 rounded-md text-white"
          >
            Annulez
          </button>

          <button
            @click.prevent="enregisterApartement()"
            v-if="typeLocation == 'apartement'"
            class="px-8 py-2 bg-blue-600 rounded-md text-white"
          >
            Enregistrer Apartement
          </button>
          <button
            @click.prevent="enregisterShop()"
            v-else
            class="px-8 py-2 bg-blue-600 rounded-md text-white"
          >
            Enregistrer Shop
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeLocation: "apartement",
      room: {},
    };
  },
  methods: {
    async enregisterApartement() {
       alert( this.$route.params.id)
       try {
          const res = await this.$apollo.mutate({
              mutation: authenticateUserGql,
              variables: credentials
          }).then(({data}) => data && data.authenticateUser)
          await this.$apolloHelpers.onLogin(res.token)
      } catch (e) {
          console.error(e)
      }
    },
    async enregisterShop() {},
    annuler() {
      this.typeLocation = "apartement";
      this.room = {};
    },
  },
};
</script>