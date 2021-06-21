<template>
  <div>
    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="mt-5 md:mt-0 md:col-span-3">
          <form action="#" method="POST">
            <div class="overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6 space-y-6">
                <div class="relative">
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
                  <nuxt-link class="px-8 py-1 absolute right-2 top-2 bg-black text-white font-semibold rounded" to="/comptabilite/general">retour</nuxt-link>
                </div>
                <div class="flex space-x-8 ">
                  <div class="w-1/2 space-y-3">
                    <div v-if="clients">
                      <label
                        for="client_id"
                        class="block text-sm text-gray-700"
                      >
                        client :
                      </label>
                      <select v-model="client_id" id="client_id" @change="onChange($event)">
                            <option value="">Choisir client</option>
                            <option v-for="(client,i) in clients" :key="i" :value="client.id">{{client.name}}</option>
                      </select>
                    </div>
                    <div>
                      <label
                        for="company_website"
                        class="block text-sm text-gray-700"
                      >
                        Montant Versé :
                      </label>
                      <div class="relative mt-2 flex rounded-md items-center">
                        <span
                          class="h-9 absolute inline-flex items-center px-6 text-base py-4 font-bold rounded-l-md border border-r-0 border-gray-300 bg-blue-700 leading-3 text-gray-50"
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
                  </div>
                  <div class="w-1/2 space-y-4">
                  <div class="h-14"></div>
                  <div>
                      <label
                        for="company_website"
                        class="block text-sm text-gray-700"
                      >
                        Garantie locatif :
                      </label>
                      <div class="relative mt-2 flex rounded-md items-center">
                        <span
                          class="h-9 absolute inline-flex items-center px-6 text-base py-4 font-bold rounded-l-md border border-r-0 border-gray-300 bg-blue-700 leading-3 text-gray-50"
                        >
                          $
                        </span>
                        <input
                          type="text"
                          name="company_website"
                          v-model.number="payment.garantie"
                          id="company_website"
                          class="pl-16 flex-1 block w-full rounded-r-md sm:text-sm border-gray-300"
                          placeholder="Garantie locatif"
                        />
                      </div>
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
                  class="inline-flex justify-center py-2 px-20 border-2 hover:text-white shadow-sm text-sm font-medium rounded-md text-white bg-orange-600  focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Annuler
                </button>
                <button
                  @click.prevent="createPay()"
                  class="inline-flex justify-center py-2 px-20 border-2 border-indigo-500 shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
      client_id: "",

     
    };
  },
  computed:{
    clients(){
      return this.$store.state.house.locataires;
    }
  },
 
  mounted() {
    this.getLocataires();
  },
  methods: {
    ...mapActions({
      createPayment: "payment/createPayment",
      getLocataires: "house/getLocataire",
    }),
    onChange(event) {
            console.log({
              ...event.target.value
            },)
        },
    createPay() {
      this.createPayment({
        ...this.payment,
        currency:'USD',
        locataire:this.client_id
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