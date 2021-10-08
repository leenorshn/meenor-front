<template>
   <tr>
    <td class="px-6 py-4 whitespace-nowrap">{{sortie.id.substring(0,6)}}</td>
    <td class="px-6 py-4 text-center whitespace-nowrap">{{sortie.amount+" $"}}</td>
    <td
      class="px-4 py-4 text-sm text-center text-gray-500 whitespace-nowrap"
    >
      {{sortie.bonRef}}
    </td>
    <td
      class="px-4 py-4 text-sm text-center text-gray-500 whitespace-nowrap"
    >
     {{sortie.personRef}}
    </td>
    <td
      class="px-4 py-4 text-sm text-center text-gray-500 whitespace-nowrap"
    >
     {{sortie.libele}}
    </td>
    
    <td
      class="px-4 py-4 text-sm text-center text-gray-500 whitespace-nowrap"
    >
      {{$moment(Date(sortie.createdAt)).format("DD-MMM-YYYY") }}
    </td>
    
  </tr>
</template>

<script>
export default {
    props:{
        sortie:Object,
    },
    
}
</script>