<template>
  <div>
    <div class="flex justify-between items-center px-4 py-2 rounded-t-md">
      <h3 class="text-xl text-blue-700 font-bold">Mouvement compte</h3>
      
    <nuxt-link class="px-4 py-1 rounded text-white bg-orange-600" to="/comptabilite/payment">Ajouter payment</nuxt-link>
    </div>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden border-b border-gray-200">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-100">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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
                      d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                    />
                  </svg>
                </th>
                <th
                  scope="col"
                  class="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Operation
                </th>
                <th
                  scope="col"
                  class="px-6 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Montant( $ )
                </th>
                <th
                  scope="col"
                  class="px-6 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Compte
                </th>
                 <th
                  scope="col"
                  class="px-6 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Garantie
                </th>
                <th
                  scope="col"
                  class="px-6 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  class="px-6 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <payment-item v-for="(n, i) in payments" :item="n" :key="i" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
   computed:{
     payments(){
       return this.$store.state.payment.payments;
     },
    entree(){
      var msgTotal = this.payments.reduce(function(prev, cur) {
  return prev + cur.amount;
}, 0);
return msgTotal;
    }
  },
  mounted(){
    this.loadPay()
  },
  methods:{
    ...mapActions({loadPay:"payment/loadPayment"})
  }


};
</script>