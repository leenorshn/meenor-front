<template>
  <div>
    <div class="flex items-center justify-between px-4 py-2 rounded-t-md">
      <h3 class="text-xl font-bold text-blue-700">Mouvement compte</h3>
      
    <nuxt-link class="px-4 py-1 text-white bg-orange-600 rounded" to="/comptabilite/payment">Ajouter payment</nuxt-link>
    </div>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="overflow-hidden border-b border-gray-200">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-100">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  
                 id
                </th>
                <th
                  scope="col"
                  class="px-6 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  client
                </th>
                <th
                  scope="col"
                  class="px-6 py-2 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                >
                  Montant( $ )
                </th>
                <th
                  scope="col"
                  class="px-6 py-2 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                >
                  Type
                </th>
                 <th
                  scope="col"
                  class="px-6 py-2 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                >
                  Bon (ref)
                </th>
                <th
                  scope="col"
                  class="px-6 py-2 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                >
                  Duree
                </th>
                <th
                  scope="col"
                  class="px-6 py-2 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                >
                  Date
                </th>
                <th
                  scope="col"
                  class="px-6 py-2 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
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