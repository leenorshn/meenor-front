<template>
  <div>
    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="mt-5 md:mt-0 md:col-span-3">
          <form action="#" method="POST">
            <div class="overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6 space-y-6">
                <div>
                  <h1 class="text-2xl text-indigo-700 tracking-wide">
                    Paiement facture locatif
                  </h1>
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
                <div class="flex space-x-8">
                  <div class="w-1/2">
                    <div>
                      <label
                        for="type_location"
                        class="block text-sm text-gray-700"
                        >Telephone du locataire ou code de la chambre</label
                      >
                      <div class="relative">
                        <input
                          type="text"
                          id="type_location"
                          v-model="phone_client"
                          placeholder="Telephone ou #code chambre"
                          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                        <button
                          class="flex items-center space-x-2 absolute right-0 top-0 text-gray-50 bg-blue-600 rounded-r -m-b-1 px-3 py-2"
                          @click.prevent="getLocataire()"
                        >
                          <h3
                            class="font-semibold text-base tracking-tight leading-5"
                          >
                            Rechercher
                          </h3>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div v-if="locataire" class="p-4">
                      
                      <h3 class="text-sm text-gray-500">
                        room:
                        <span class="text-gray-700 font-semibold">
                          {{locataire.room?locataire.room.numero:""}}</span>
                      </h3>
                      <h3 class="text-base text-gray-700">client</h3>
                      <h3 class="text-sm text-gray-500">
                        ID: 
                        <span class="text-gray-700 font-semibold">{{locataire.id}}</span>
                      </h3>
                      <h3 class="text-sm text-gray-500">
                        name:
                        <span class="text-gray-700 font-semibold">{{locataire.name}}</span>
                      </h3>
                    </div>
                    <div v-else>
                      <h3>Aucune selection effectuer</h3>
                    </div>
                  </div>
                  <div class="w-1/2 space-y-6">
                    <div>
                      <label
                        for="company_website"
                        class="block text-sm text-gray-700"
                      >
                        Montant Versé :
                      </label>
                      <div class="relative mt-2 flex rounded-md items-center">
                        <span
                          class="h-9 absolute inline-flex items-center px-6 text-base py-4 font-bold rounded-l-md border border-r-0 border-gray-300 bg-indigo-500 leading-3 text-gray-50"
                        >
                          $
                        </span>
                        <input
                          type="text"
                          name="company_website"
                          v-model.number="payment.amount"
                          id="company_website"
                          class="pl-16 flex-1 block w-full rounded-r-md sm:text-sm border-gray-300"
                          placeholder="Montant verse"
                        />
                      </div>
                    </div>
                    <div>
                      <label for="state" class="block text-sm text-gray-700"
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

                    <div>
                      <label
                        for="postal_code"
                        class="block text-sm text-gray-700"
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
              </div>
              <div
                class="px-4 py-3 bg-gray-50 text-right sm:px-6 flex space-x-4 items-center justify-end"
              >
                <button
                  @click.prevent="annuler()"
                  class="inline-flex justify-center py-2 px-20 border-2 hover:text-white border-indigo-500 shadow-sm text-sm font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
        <!-- <pre>{{$store.state.house.locataires}}</pre> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  layout: "account",
  data() {
    return {
      payment: {},
      phone_client: "",
      locataire:{}
    };
  },
 
  mounted() {
    this.getLocataires();
  },
  methods: {
    ...mapActions({
      createPayment: "payment/createPayment",
      getLocataires: "house/getLocataire",
    }),
    createPay() {
      this.createPayment({
        ...this.payment,
        room:this.locataire.room.id,
        locataire:this.locataire.id
      });
      this.annuler();
    },
    annuler() {
      this.payment = {};
      this.phone_client = "";
      this.locataire={}
    },
    getLocataire() {
      const t= this.$store.state.house.locataires.find((el) =>
        el.phone.includes(this.phone_client)
      );
      this.locataire=t;
    },
  },
};
</script>