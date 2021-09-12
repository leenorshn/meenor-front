<template>
  <tr>
    <td class="px-2 py-6 bg-greenP whitespace-nowrap">
      <div class="text-sm font-bold text-white">{{"chambre "+ chambre.numero }}</div>
    </td>
    <td class="whitespace-nowrap">
      <div v-if="chambre.locataire" class="flex items-center">
        <div class="flex-shrink-0 py-1 m-1 h-9 w-9">
          <img
            class="object-cover object-center rounded-full h-9 w-9"
            src="/profile.png"
            alt=""
          />
        </div>
        <div class="ml-4">
          <div class="text-xs font-medium text-gray-900">
            {{ chambre.locataire.name }}
          </div>
          <div class="text-xs text-gray-400">{{ chambre.locataire.phone }}</div>
        </div>
      </div>
      <div v-else class="flex items-center">
        <nuxt-link to="/clients" class="px-4 py-2 font-semibold text-blue-700 bg-white border border-gray-300 rounded-md">Ajouter locataire</nuxt-link>
          
        
      </div>
    </td>
    <td class="px-2 whitespace-nowrap">
      <div class="text-xs text-gray-400">{{ chambre.category }}</div>
    </td>
    <td class="px-2 py-4 text-sm text-left text-gray-500 whitespace-nowrap">
      <span class="text-xs font-normal text-gray-400">taux</span>
      <span
        class="inline-flex px-3 text-xs font-semibold leading-5 text-green-800 bg-orange-100 rounded-full "
      >
        {{ chambre.price + " USD" }}

      </span>
      
    </td>
    <td class="px-2 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
      <span
        :class="`${
          chambre.isAvalaible
            ? 'bg-green-100 text-green-800'
            : 'bg-red-200 text-red-900'
        }`"
        class="inline-flex px-2 text-xs font-semibold leading-5 rounded-full"
      >
        {{ chambre.isAvalaible ? "Disponible" : "Occupée" }}
      </span>
    </td>
    <td
      class="flex items-center justify-center px-2 py-4 text-sm font-medium whitespace-nowrap"
    >
      <nuxt-link
        class="hidden p-2 text-gray-400 rounded-full hover:bg-blue-300 hover:text-blue-700"
        to=""
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      </nuxt-link>
      <nuxt-link
        class="hidden p-2 text-gray-400 rounded-full md:flex hover:bg-blue-300 hover:text-blue-700"
        :to="`/maison/${batimentId}/room/${chambre.id}`"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      </nuxt-link>
      <button
        class="p-2 text-gray-400 rounded-full hover:bg-red-300 hover:text-red-700 focus:ring-0 ring-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </td>
  </tr>
</template>

<script>
import RoomToUseModal from "./RoomToUseModal.vue";
export default {
  components:{
RoomToUseModal
  },
  props: {
    numero: Number,
    batimentId:String,
    chambre: Object,
  },
  data() {
    return {
      userModalIsShown:false
    };
  },
  methods: {
    deleteOneRoom() {
      //this.alert(`chambre:${this.chambre.id}`)
    },

    closeModel(){
      this.$emit('showModel',false)
    }
  },
};
</script>