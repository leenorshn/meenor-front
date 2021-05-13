<template>
  <div>
    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="mt-5 md:mt-0 md:col-span-3">
          <form action="#" method="POST">
            <div class="overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6 space-y-6">
                <div>
                  <h1 class="text-3xl font-semibold text-indigo-700 tracking-wide">
                    Retrait 
                  </h1>
                  <p class="text-gray-500 text-sm">
                    Veillez bien souvre les etapes de haut vers le bas pour
                    enregistrer une sortie
                  </p>
                  <div class="hidden sm:block" aria-hidden="true">
                    <div class="py-5">
                      <div class="border-t border-gray-200"></div>
                    </div>
                  </div>
                </div>

                <div class="flex items-center space-x-4">
                  <div class="w-1/2">
                    <label
                      for="company_website"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Montant demandé :
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
                        v-model="sortie.amount"
                        id="company_website"
                        class="pl-16 flex-1 block w-full rounded-r-md sm:text-sm border-gray-300"
                        placeholder="Montant demandé"
                      />
                    </div>
                  </div>

                  <div class="w-1/4">
                    <label
                      for="country"
                      class="block text-sm font-medium text-gray-700"
                      >Moyen</label
                    >
                    <select
                      id="country"
                      name="country"
                      v-model="sortie.moyen"
                      autocomplete="country"
                      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="cash">Cash</option>
                      <option value="bank">Check bancaire</option>
                    </select>
                  </div>
                </div>

                <div class="flex space-x-5 items-center">
                    <div class="w-1/2">
                    <label
                      for="state"
                      class="block text-sm font-medium text-gray-700"
                      >Compte</label
                    >
                    <select
                      id="country"
                      name="country"
                      v-model="sortie.account"
                      autocomplete="country"
                      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option v-for="(acc,i) in accounts" :key="i" :value="acc.id">{{acc.name}}</option>
                      
                    </select>
                  </div>
                  <div class="w-1/2">
                    <label
                      for="postal_code"
                      class="block text-sm font-medium text-gray-700"
                      >Personne de reference:</label
                    >
                    <input
                      type="text"
                      name="postal_code"
                      id="postal_code"
                      autocomplete="postal-code"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  
                </div>
              </div>
              <div class="hidden sm:block" aria-hidden="true">
                    <div class="py-5">
                      <div class="border-t border-gray-200"></div>
                    </div>
                  </div>
              <div
                class="px-4 py-3  bg-gray-50 text-right sm:px-6 flex space-x-4 items-center justify-end"
              >
                <button
                  @click="annulerSortie()"
                  class="inline-flex justify-center py-2 px-20 border-2 border-indigo-500 shadow-sm text-sm font-medium rounded-md text-indigo-700 hover:text-white bg-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Annuler
                </button>
                <button
                 @click="validerSortie()"
                  class="inline-flex justify-center py-2 px-20 border-2 border-indigo-500 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Valider
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
import { ACCOUNT_QUERY } from "~/apollo/payment_gql.js";
export default {
  layout: "account",
  apollo:{
    accounts:{
      query:ACCOUNT_QUERY
    }
  },
  data(){
    return {
      sortie:{}
    }
  },
  method:{
    ...mapActions({createSortie:'payment/createSortie'}),
    annulerSortie(){
      this.sortie={}
    },
    validerSortie(){

      this.createSortie({
        ...sortie,
      });

      this.annulerSortie();
    },

  }
};
</script>