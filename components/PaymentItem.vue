<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">{{item.id.substring(0,6)}}</td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-900">Entré</div>
    </td>
    <td class="px-6 text-center py-4 whitespace-nowrap">{{item.amount}}</td>
    <td
      class="px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500"
    >
      Payment locatif
    </td>
    <td
      class="px-4 py-4  text-center whitespace-nowrap text-sm text-gray-500"
    >
      {{"Le "+$moment(item.createdAt).format("DD-MM-YYYY")}}
    </td>
    <td
      class="px-6 py-2 text-gray-500 whitespace-nowrap text-right text-sm font-medium"
    >
      <div class="flex justify-center">
        <button
          class="w-9 h-9 flex justify-center items-center rounded-full hover:bg-blue-200 hover:text-blue-600"
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
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
        <nuxt-link
          to="/"
          class="w-9 h-9 flex justify-center items-center rounded-full hover:bg-blue-200 hover:text-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
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
      </div>
    </td>
  </tr>
</template>
<script>
export default {
  props:{
    item:Object
  }
}
</script>