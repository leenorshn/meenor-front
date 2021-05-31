<template>
    <div class="flex items-end space-x-3">
      <div class="h-16 w-4/5 border border-gray-200 rounded-md flex p-2 space-x-4">
        <div class="flex-shrink-0">
          <div class="w-12 h-12 rounded-full flex justify-center items-center bg-indigo-100">
            <img src="/money.svg" alt="" class="w-8 h-8">
          </div>
        </div>
        
        <div class="flex justify-between w-full">
          <div class="">
            <h3 class="text-blue-700 text-xl tracking-tight font-semibold">
              {{account.name}}
            </h3>
            <p class="text-sm text-gray-500">
              {{account.__typename}}
            </p>
          </div>
          <h4>#{{account.id.substring(18)}}-A</h4>
        </div>
      </div>
      <div class="space-y-2">
        <button to="/" class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-500"
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
          <span class="text-blue-500 text-sm">Effacer</span>
        </button>
        <nuxt-link to="/" class="flex text-gray-500">
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
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
          <span class="text-blue-500 text-sm">editer</span>
        </nuxt-link>
      </div>
    </div>
</template>
<script>
export default {
  props:{
    account:Object,
  }
}
</script>