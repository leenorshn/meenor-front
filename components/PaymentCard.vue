<template>
    <tr>
    
    <td class="pl-3 text-center px-3  whitespace-nowrap">
      <div class="text-sm text-gray-700">{{numero}}</div>
    </td>
    <td class="whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-9 w-9 -m-1 py-1">
          <img
            class="h-9 w-9 rounded-full object-cover object-center"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
            alt=""
          />
        </div>
        <div class="ml-4">
          <div class="text-xs font-medium text-gray-900">Blaise tonton</div>
          <div class="text-xs text-gray-400">
            0978132342
          </div>
        </div>
      </div>
    </td>
    <td class="px-2  whitespace-nowrap">
      <div class="text-xs text-green-700 font-medium">Boutique 4</div>
      <div class="text-xs text-gray-400">Galerie 2/ niveau-1</div>
    </td>
    
    <td class="px-2 text-center py-4 whitespace-nowrap text-sm text-gray-500">
      <span
        class="px-3  inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-green-800"
      >
        150 $
      </span>
    </td>
    <td class="pl-3  text-center whitespace-nowrap">
      <div class="text-xs text-gray-500 font-bold">9</div>
      
    </td>
    
    <td class="px-2 text-center py-4 whitespace-nowrap text-sm text-gray-500">
      <span
        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
      >
        1350 $
      </span>
    </td>
    <td
      class="px-2 py-1 whitespace-nowrap flex items-center justify-center text-sm font-medium"
    >
      {{Date.now()}}
    </td>
    
  </tr>
</template>

<script>
export default {
    props:{
        numero:Number,
    }
}
</script>