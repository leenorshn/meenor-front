<template>
  <tr>
    <td class="whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-20 w-24 py-0">
          <img
            class="h-20 w-24 object-cover object-center rounded"
            src="ndako.svg"
            alt=""
          />
        </div>
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">{{batiment.name}}</div>
          <div class="text-sm text-gray-500">
            {{batiment.address.city}}/{{batiment.address.local}}
          </div>
        </div>
      </div>
    </td>
    <td class="px-3 py-4 whitespace-nowrap">
      <div class="text-xs text-gray-400">Nbre Niveaux</div>
      <div class="text-sm text-gray-700">{{batiment.totaleNiveaux}}</div>
    </td>
    <td class="px-3 py-4 whitespace-nowrap">
      <div class="text-xs text-gray-400">Nbre Chambre</div>
      <div class="text-sm text-gray-700">{{batiment.totalRooms}}</div>
    </td>
    <td class="px-2 text-center py-4 whitespace-nowrap text-sm text-gray-500">
      <span
        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
      >
        Active
      </span>
    </td>
    <td
      class="px-2 py-4 whitespace-nowrap flex items-center justify-center text-sm font-medium"
    >
      <nuxt-link
        class="p-2 hover:bg-red-200 text-gray-400 hover:text-red-700 rounded-full"
        :to="`/maison/${batiment.id}/edit`"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-center"
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
        class="p-2 hover:bg-blue-300 text-gray-400 hover:text-blue-700 rounded-full"
        :to="`/maison/${batiment.id}`"
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
    </td>
  </tr>
</template>

<script>
export default {
  props:{
    batiment:Object
  }
}
</script>