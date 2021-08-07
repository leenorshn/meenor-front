<template>
  <div>
    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="mt-5 md:mt-0 md:col-span-3">
          <form action="#" method="POST">
            <div class="overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 space-y-6 bg-white sm:p-6">
                <div class="relative">
                  <h1 class="text-2xl tracking-wide text-indigo-700">
                    Paiement facture locatif
                  </h1>
                  <p class="text-sm text-gray-500">
                    Veillez bien souvre les etapes de haut vers le bas pour
                    enregistrer un payment
                  </p>
                  <div class="hidden sm:block" aria-hidden="true">
                    <div class="py-5">
                      <div class="border-t border-gray-200"></div>
                    </div>
                  </div>
                  <nuxt-link class="absolute px-8 py-1 font-semibold text-white bg-black rounded right-2 top-2" to="/comptabilite/general">retour</nuxt-link>
                </div>
                <div class="flex flex-col">
                  <div class="flex items-center w-full space-x-3">
                    <div v-if="clients" class="flex-1">
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
                    <div class="flex-1">
                      <label
                        for="company_website"
                        class="block text-sm text-gray-700"
                      >
                        Montant Versé :
                      </label>
                      <div class="relative flex items-center mt-1 rounded-md">
                        
                        <input
                          type="text"
                          name="company_website"
                          v-model.number="payment.amount"
                          id="company_website"
                          class="flex-1 block w-full py-3 pl-16 border-gray-300 rounded-r-md sm:text-sm"
                          placeholder="Montant verse"
                        />
                      </div>
                    </div>
                    <div v-if="clients" class="w-48">
                      <label
                        for="client_id"
                        class="block text-sm text-gray-700"
                      >
                        pour :
                      </label>
                      <select v-model="typePayment" id="client_id">
                            <option value="">Type de paiement</option>
                            <option value="avance">Avance</option>
                            <option value="paymentTotal">Payment comptant</option>
                            <option value="garantie">Garantie</option>
                      </select>
                    </div>
                  </div>
                  <div class="flex w-full px-4 space-x-5">
                  
                  <div class="w-1/2">
                      <label for="state" class="block text-sm text-gray-700"
                        >Date de debut</label
                      >
                      <input
                        type="date"
                        name="state"
                        v-model="payment.fromDate"
                        id="state"
                        class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>  
                    

                    <div class="w-1/2">
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
                        class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="flex items-center justify-end px-4 py-3 space-x-4 text-right bg-gray-50 sm:px-6"
              >
                <button
                  @click.prevent="annuler()"
                  class="inline-flex justify-center px-20 py-2 text-sm font-medium text-white bg-orange-600 border-2 rounded-md shadow-sm hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Annuler
                </button>
                <button
                  @click.prevent="createPay()"
                  class="inline-flex justify-center px-20 py-2 text-sm font-medium text-white bg-blue-700 border-2 border-indigo-500 rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
  data() {
    return {
      payment: {},
      client_id: "",
      typePayment:""
     
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
        locataire:this.client_id,
        typePayment:this.typePayment
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