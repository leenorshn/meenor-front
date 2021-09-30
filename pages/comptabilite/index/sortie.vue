<template>
  <div>
    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="mt-5 md:mt-0 md:col-span-3">
          <form action="#" method="POST">
            <div class="overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 space-y-6 bg-white sm:p-6">
                <div>
                  <h1 class="text-3xl font-semibold tracking-wide text-indigo-700">
                    Retrait 
                  </h1>
                  <p class="text-sm text-gray-500">
                    Veillez bien souvre les etapes de haut vers le bas pour
                    enregistrer une sortie
                  </p>
                  <div class="hidden sm:block" aria-hidden="true">
                    <div class="py-5">
                      <div class="border-t border-gray-200"></div>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col items-center space-y-4">
                  <div class="w-1/2">
                    <label
                      for="company_website"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Montant demandé :
                    </label>
                    <div
                      class="relative flex items-center mt-2 rounded-md shadow-sm"
                    >
                      <span
                        class="absolute inline-flex items-center px-6 py-6 text-sm font-bold leading-3 bg-indigo-500 border border-r-0 border-gray-300 h-9 rounded-l-md text-gray-50"
                      >
                        $
                      </span>
                      <input
                        type="text"
                        name="company_website"
                        v-model="sortie.amount"
                        id="company_website"
                        class="flex-1 block w-full pl-16 border-gray-300 rounded-r-md sm:text-sm"
                        placeholder="Montant demandé"
                      />
                    </div>
                  </div>

                    <div class="w-1/2">
                    <label
                      for="state"
                      class="block text-sm font-medium text-gray-700"
                      >Libele</label
                    >
                    <input
                      id="country"
                      placeholder="Libele"
                      type="text"
                      v-model="sortie.libele"
                      autocomplete="country"
                      class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                      
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
                      placeholder="Ex: victor H."
                      id="postal_code"
                      autocomplete="postal-code"
                      class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                class="flex items-center justify-end px-4 py-3 space-x-4 text-right bg-gray-50 sm:px-6"
              >
                <button
                  @click.prevent="annulerSortie()"
                  class="inline-flex justify-center px-20 py-2 text-sm font-medium bg-orange-600 rounded-md shadow-sm text-indigo-50 hover:text-white focus:outline-none "
                >
                  Annuler
                </button>
                <button
                 @click.prevent="validerSortie()"
                  class="inline-flex justify-center px-20 py-2 text-sm font-medium text-white bg-indigo-600 border-2 border-indigo-500 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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