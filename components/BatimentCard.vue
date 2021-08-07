<template>
  <div class="">
    <div class="whitespace-nowrap">
      <div class="flex items-center justify-between">
        <div class="flex-shrink-0 w-20 h-20 py-0">
          <img
            class="object-cover object-center w-20 h-20"
            src="ndako.svg"
            alt=""
          />
        </div>
        <div class="ml-4">
          <div class="text-sm font-semibold text-gray-900">
            {{ batiment.name }}
          </div>
          <div class="text-xs text-gray-500">
            {{ batiment.address.city }}
          </div>
        </div>
        <button
        class="inset-0 p-2 text-gray-400 rounded-full hover:bg-blue-300 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700"
        aria-hidden="true"
       @click="selected"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
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
      </div>
    </div>
    
  </div>
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