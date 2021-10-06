<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">{{item.id.substring(0,6)}}</td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="inline-block p-1 text-sm text-gray-900 bg-green-100 rounded-md ">{{item.locataire.name}}</div>
    </td>
    <td class="px-6 py-4 text-center whitespace-nowrap">{{item.amount+" $"}}</td>
    <td
      class="px-4 py-4 text-sm text-center text-gray-500 whitespace-nowrap"
    >
      {{item.typePayment}}
    </td>
    <td
      class="px-4 py-4 text-sm text-center text-gray-500 whitespace-nowrap"
    >
     {{item.refBond}}
    </td>
    <td
      class="px-4 py-4 text-sm text-center text-gray-500 whitespace-nowrap"
    >
      {{$moment(Date(item.createdAt)).format("DD-MM-YYYY") }}
    </td>
    <td
      class="px-6 py-2 text-sm font-medium text-right text-gray-500 whitespace-nowrap"
    >
      <div class="flex justify-center">
        <button
        @click.prevent="deletePay()"
          class="flex items-center justify-center rounded-full w-9 h-9 hover:bg-orange-200 hover:text-orange-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
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
       
      </div>
    </td>
  </tr>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props:{
    item:Object
  },
  methods:{
    ...mapActions({deletePayment:"payment/deletePayment"}),
    deletePay(){
      this.deletePayment(this.item.id);
    }
  }
}
</script>