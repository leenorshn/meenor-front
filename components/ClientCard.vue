<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
          <img class="h-10 w-10 rounded-full" :src="client.avatar" alt="" />
        </div>
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">{{ client.name }}</div>
          <div class="text-sm text-gray-400">{{ client.phone }}</div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div v-if="client.room" class="text-sm text-gray-900">
        Chambre n-{{ client.room.numero }}
      </div>
      <nuxt-link class="hover:bg-gray-100 inline-flex items-center  hover:ring-2 hover:ring-blue-500 text-blue-700 font-semibold px-5 p-2 rounded-md" :to="`/clients/${client.id}/affectator`">
      <Icon :iconName="`pencil`"/>
      <span>Associer</span></nuxt-link>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <span
        class="
          px-2
          inline-flex
          text-xs
          leading-5
          font-semibold
          rounded-full
          bg-green-100
          text-green-800
        "
      >
        Active
      </span>
    </td>
    <td
      class="
        px-6
        py-4
        flex
        justify-center
        items-center
        whitespace-nowrap
        text-sm text-gray-500
      "
    >
      <nuxt-link
        class="
          w-9
          h-9
          flex
          justify-center
          items-center
          rounded-full
          hover:bg-blue-200
          hover:text-blue-600
        "
        :to="`/clients/${client.id}`"
      >
       <Icon :iconName="`chat`"/>
      </nuxt-link>
    </td>
    <td
      class="
        px-6
        py-2
        text-gray-500
        whitespace-nowrap
        text-right text-sm
        font-medium
      "
    >
      <div class="flex justify-center">
        
        <nuxt-link :to="`/clients/${client.id}`" class="
            w-9
            h-9
            flex
            justify-center
            items-center
            rounded-full
            hover:bg-blue-200
            hover:text-blue-600">
         <Icon :iconName="`vue`"/>
        </nuxt-link>
        <button
          class="
            w-9
            h-9
            flex
            justify-center
            items-center
            rounded-full
            hover:bg-red-200
            hover:text-red-700
          "
        >
         <Icon :iconName="`delete`"/>
        </button>
        
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    client: Object,
  },
};
</script>