<template>
  <tr>
    <td class="whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-20 w-20 py-0">
          <img
            class="h-20 w-20 object-cover object-center"
            src="ndako.svg"
            alt=""
          />
        </div>
        <div class="ml-4">
          <div class="text-base font-bold text-gray-900">
            {{ batiment.name }}
          </div>
          <div class="text-xs text-gray-500">
            {{ batiment.address.city }}/{{ batiment.address.local }}
          </div>
        </div>
      </div>
    </td>
    <td
      class="
        px-2
        py-4
        whitespace-nowrap
        flex
        items-center
        justify-center
        text-sm
        font-medium
      "
    >
      <!-- <button @click="deleteHouse()" class="p-2 hover:bg-orange-700 text-gray-400 hover:text-white rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
      </button> -->

      <button
        class="
          p-2
          hover:bg-blue-300
          text-gray-400
          hover:text-blue-700
          rounded-full
          focus:outline-none
          focus:ring-2
          focus:ring-blue-700
        "
       @click="selected"
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </td>
  </tr>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    batiment: Object,
  },
  methods: {
    ...mapActions({ deleteBatiment: "batiment/deleteBatiment" }),
    async deleteHouse() {
      this.deleteBatiment(this.batiment.id);
    },
    selected(){
      this.$emit('selected',this.batiment)
    }
  },
};
</script>