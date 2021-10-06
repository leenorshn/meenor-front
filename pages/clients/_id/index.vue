<template>
  <div class="flex max-w-6xl mx-auto space-x-3">
    <div class="w-9/12">
      <div
        class="relative flex items-center w-full h-24 px-4 py-2 mt-4 space-x-8 bg-blue-900 rounded-md "
      >
        <div>
          <img src="/../profile.png" alt="" class="w-20 h-20 rounded-full" />
        </div>
        <!-- <pre>{{locataire}}</pre> -->
        <div>
          <h3 class="text-xl font-semibold text-white">{{locataire.name}}</h3>
          <h3 class="text-gray-100">{{locataire.phone}}</h3>
        </div>
        <div class="absolute right-3">
          <nuxt-link
            to="/clients"
            class="px-8 py-2 text-white bg-blue-500 rounded-md"
          >
            retour
          </nuxt-link>
        </div>
      </div>
      <div class="flex flex-col justify-center bg-white">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-100">
            <tr>
              <th
                scope="col"
                class="px-6 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase "
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
                    d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                  />
                </svg>
              </th>
              <th
                scope="col"
                class="px-6 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase "
              >
                Client
              </th>
              <th
                scope="col"
                class="px-6 py-2 text-xs font-medium tracking-wider text-center text-gray-500 uppercase "
              >
                Montant( $ )
              </th>
              <th
                scope="col"
                class="px-6 py-2 text-xs font-medium tracking-wider text-center text-gray-500 uppercase "
              >
                Type
              </th>
              <th
                scope="col"
                class="px-6 py-2 text-xs font-medium tracking-wider text-center text-gray-500 uppercase "
              >
                Bon
              </th>
              <th
                scope="col"
                class="px-6 py-2 text-xs font-medium tracking-wider text-center text-gray-500 uppercase "
              >
                Date
              </th>
              <th
                scope="col"
                class="px-6 py-2 text-xs font-medium tracking-wider text-center text-gray-500 uppercase "
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <payment-item v-for="(n, i) in locataire.payments" :item="n" :key="i" />
          </tbody>
        </table>
      </div>
    </div>
    <div class="w-3/12 mt-4 space-y-4">
      <div
        class="flex items-center justify-center h-24 space-x-4 font-semibold text-white bg-blue-900 rounded "
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
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
        <h3>Messagerie</h3>
      </div>
      <div class="relative">
        <textarea v-model="message_content" id="" cols="10" rows="5"></textarea>
        <button
          class="absolute py-2 text-white bg-blue-800 rounded-md px-14 right-2 top-40"
        >
          Envoyer
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import {QUERY_LOCATAIRE} from "../../../apollo/locataire_gql"
export default {
  async asyncData({app,params}){
    let client = app.apolloProvider.defaultClient
   const res=await client.query({query:QUERY_LOCATAIRE, variables:{
     id:params.id
   }})
        .then(({ data }) => {
         return data && data.locataire
        })



        return {
          locataire:res
        }
  },

  data() {
    return {
      message_content: "",
    };
  },
  // computed: {
  //   payments() {
  //     return this.$store.state.payment.payments;
  //   },
  //   entree() {
  //     var msgTotal = this.payments.reduce(function (prev, cur) {
  //       return prev + cur.amount;
  //     }, 0);
  //     return msgTotal;
  //   },
  // },
  // mounted() {
  //   this.loadPay();
  // },
  // methods: {
  //   ...mapActions({ loadPay: "payment/loadPayment" }),
  // },
};
</script>