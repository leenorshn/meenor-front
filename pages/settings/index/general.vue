<template>
  <div class="bg-white p-4 rounded-md shadow">
    <div class="flex justify-between">
      <h2 class="text-xl font-bold text-blue-800">General</h2>
      <nuxt-link
        to="/settings/general/editor"
        class="rounded-md bg-blue-800 text-white px-5 py-2 hover:bg-blue-400"
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
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      </nuxt-link>
    </div>
    <div class="space-y-8">
      <div class="flex items-center space-x-6">
        <div class="font-semibold text-black text-lg">Nomination:</div>
        <div>{{company.name}}</div>
      </div>
      <div class="flex items-center space-x-16">
        <div class="font-semibold text-black text-lg">RCCM:</div>
        <div>{{company.rccm}}</div>
      </div>
      <div class="flex items-center space-x-16">
        <div class="font-semibold text-black text-lg">Id-Nat:</div>
        <div>{{company.id_nat}}</div>
      </div>
      <div>
        <div class="font-semibold text-lg">Adresse:</div>
        <div class="text-gray-500">
         {{company.address.city}}/ {{company.address.local}}
        </div>
      </div>
      <div>
        <div class="font-semibold text-black text-lg">Contacts:</div>
        <div class="ml-4">
          <h2 class="font-semibold text-gray-700 text-lg">
            Email:   <span class="ml-4 text-sm font-normal text-gray-600">{{company.contacts.email}}</span>
          </h2>
          <h2 class="font-semibold text-gray-700 text-lg">
            Phone: <span class="ml-2 text-sm font-normal text-gray-600">{{company.contacts.email}}</span>
          </h2>
        </div>
       
      </div>
      <div>
        <div class="font-semibold text-black text-lg">Detail:</div>
        <h4 class="text-gray-500">{{company.description}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed:{
    company(){
      return this.$store.state.company.company;
    }
  },
  methods:{
    ...mapActions({getCompany:"company/getCompany"})
  },
  mounted(){
    this.getCompany()
  }
}
</script>