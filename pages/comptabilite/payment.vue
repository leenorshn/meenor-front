<template>
  <div>
    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="mt-5 md:mt-0 md:col-span-3">
          <form action="#" method="POST">
            <div class="overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6 space-y-6">
                <div>
                  <h1 class="text-2xl text-indigo-700 tracking-wide">Paiement facture locatif</h1>
                  <p class="text-gray-500 text-sm">
                    Veillez bien souvre les etapes de haut vers le bas pour
                    enregistrer un payment
                  </p>
                  <div class="hidden sm:block" aria-hidden="true">
                  <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                  </div>
                </div>
                </div>
                
                
                <div class="flex space-x-4">
                  <div class="w-1/3">
                    <label
                      for="type_location"
                      class="block text-sm  text-gray-700"
                      >Telephone du locataire ou code de la chambre</label
                    >
                    <input
                      type="text"
                      id="type_location"
                      v-model="phone_client"
                      placeholder="Telephone du locataire ou code de la chambre"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div class="w-1/2">
                  <label
                    for="company_website"
                    class="block text-sm text-gray-700"
                  >
                    Montant Versé :
                  </label>
                  <div
                    class="relative mt-2 flex rounded-md shadow-sm items-center"
                  >
                    <span
                      class="h-9 absolute inline-flex items-center px-6 text-base py-4 font-bold rounded-l-md border border-r-0 border-gray-300 bg-indigo-500 leading-3 text-gray-50"
                    >
                      $
                    </span>
                    <input
                      type="text"
                      name="company_website"
                      v-model="payment.amount"
                      id="company_website"
                      class="pl-16 flex-1 block w-full rounded-r-md sm:text-sm border-gray-300"
                      placeholder="Montant verse"
                    />
                  </div>
                </div>
                <div class="flex space-x-4">
                  <div class="w-1/3">
                    <label
                      for="state"
                      class="block text-sm  text-gray-700"
                      >Date de debut</label
                    >
                    <input
                      type="date"
                      name="state"
                      v-model="payment.fromDate"
                      id="state"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="w-1/3">
                    <label
                      for="postal_code"
                      class="block text-sm  text-gray-700"
                      >Date de fin</label
                    >
                    <input
                      type="date"
                      name="postal_code"
                      v-model="payment.toDate"
                      id="postal_code"
                      autocomplete="postal-code"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 flex space-x-4 items-center justify-end">
                  <button
                  @click.prevent="annuler()"
                  class="inline-flex justify-center py-2 px-20 border-2 hover:text-white border-indigo-500 shadow-sm text-sm font-medium rounded-md text-indigo-700  bg-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Annuler
                </button>
                <button
                  @click.prevent="createPay()"
                  class="inline-flex justify-center py-2 px-20 border-2 border-indigo-500 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Confirmer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  layout: "account",
  data(){
    return{
      payment:{},
      phone_client:""
    }

  },
  methods:{
    ...mapActions({createPayment:'payment/createPayment'}),
    createPay(){
      this.createPayment({});
    },
    annuler(){
      this.payment={}
      this.phone_client=""
    }
  }
};
</script>