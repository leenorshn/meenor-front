<template>
  <tr>
    <td class="pl-3 whitespace-nowrap">
      <div class="text-sm text-gray-700">{{ chambre.numero }}</div>
    </td>
    <td class="whitespace-nowrap">
      <div v-if="chambre.locataire" class="flex items-center">
        <div class="flex-shrink-0 h-9 w-9 -m-1 py-1">
          <img
            class="h-9 w-9 rounded-full object-cover object-center"
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
        <h3 class="text-gray-400 text-sm">Pas de locataire</h3>
      </div>
    </td>
    <td class="px-2 whitespace-nowrap">
      <div class="text-xs text-gray-400">{{ chambre.category }}</div>
    </td>
    <td class="px-2 text-left py-4 whitespace-nowrap text-sm text-gray-500">
      <span
        class="
          px-3
          inline-flex
          text-xs
          leading-5
          font-semibold
          rounded-full
          bg-orange-100
          text-green-800
        "
      >
        {{ chambre.price + " USD" }}
      </span>
    </td>
    <td class="px-2 text-center py-4 whitespace-nowrap text-sm text-gray-500">
      <span
        :class="`${
          chambre.isAvalaible
            ? 'bg-green-100 text-green-800'
            : 'bg-red-200 text-red-900'
        }`"
        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
      >
        {{ chambre.isAvalaible ? "Oui" : "Non" }}
      </span>
    </td>
    <td
      class="
        px-2
        py-1
        whitespace-nowrap
        flex
        items-center
        justify-center
        text-sm
        font-medium
      "
    >
      <nuxt-link
        class="
          p-2
          hover:bg-blue-300
          text-gray-400
          hover:text-blue-700
          rounded-full
        "
        :to="`/maison/${chambre.id}/room`"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
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
      <button class="
          p-2
          hover:bg-red-300
          text-gray-400
          hover:text-red-700
          rounded-full
          focus:ring-0
          ring-0
        ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-gray-400"
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
export default {
  props: {
    numero: Number,
    chambre: Object,
  },
  data() {
    return {};
  },
  methods:{
    deleteOneRoom(){
      alert(`chambre:${this.chambre.id}`)
    }
  }
};
</script>