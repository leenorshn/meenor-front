<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
          <img class="h-10 w-10 rounded-full" src="/profile.png" alt="" />
        </div>
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">{{ client.name }}</div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-gray-600">
      
        {{client.phone}}
      
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
        {{client.role}}
      </span>
    </td>
    
    <td
      class="
        px-6
        py-2
        text-gray-500
        whitespace-nowrap
        text-center text-sm
        font-medium
      "
    >
      
        
        <nuxt-link :to="`/clients/${client.id}`" class="
            px-4 py-1
            

            rounded-full
            hover:bg-blue-200
            hover:text-blue-600">
          changer
        </nuxt-link>
        
        

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