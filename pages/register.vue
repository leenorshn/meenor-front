<template>
  <div class="flex h-screen w-screen">
    <div
      class="w-2/5 flex items-center px-8 justify-center bg-blue-800 relative"
    >
      <div class="">
        <h2 class="text-center text-7xl text-gray-50 mt-6">Meenor</h2>
        <p class="text-center text-xl text-gray-200 mt-6">
          Creer votre compte pour gerer en toute liberte vos multiples revenus
          locatif, d'une facon tres facile. Soyez au controle de vos revenus
          locatifs
        </p>
      </div>
    </div>
    <div class="flex-1 bg-gray-200">
      <div class="px-24 mx-auto my-auto py-14 relative">
        <h2 class="text-blue-800 text-3xl font-semibold">Creer un compte</h2>
        <form>
          <div class="mt-4 w-2/3">
            <label for="entrepriseName" class="text-gray-500 mb-2"
              >Votre entreprise:</label
            >
            <input
              id="entrepriseName"
              type="text"
              v-model="company.name"
              placeholder="nom de l'entreprise"
              class="w-full rounded-md border mt-1 border-gray-100 placeholder-gray-400 focus:border-gray-200 outline-none"
            />
          </div>

          <div class="flex justify-between space-x-2 mt-4">
            <div class="w-2/3">
              <label for="entrepriseCity" class="text-gray-500 mb-2"
                >Votre ville:</label
              >
              <input
                id="entrepriseCity"
                type="text"
                v-model="company.address.city"
                placeholder="Ex: Butembo"
                class="w-full rounded-md mt-1 border border-gray-100 placeholder-gray-400 focus:border-gray-200 outline-none"
              />
            </div>
          </div>
          <div class="flex justify-between space-x-2 mt-4">
            <div class="w-2/3">
              <label for="entreprisePhone" class="text-gray-500 mb-2"
                >Numero de telephone:</label
              >
              <input
                id="entreprisePhone"
                type="text"
                v-model="company.phone"
                placeholder="Numero de telephone"
                class="w-full rounded-md mt-1 border border-gray-100 placeholder-gray-400 focus:border-gray-200 outline-none"
              />
            </div>
          </div>
          <div class="mt-4 w-2/3">
            <label for="entreprisePassword" class="text-gray-500 mb-2"
              >Mot de passe:</label
            >
            <input
              id="entreprisePassword"
              type="password"
              v-model="company.password"
              placeholder="votre mot de passe securise"
              class="w-full rounded-md mt-1 focus:outline-none focus:border-indigo-200 focus:ring focus:ring-indigo-400 border border-gray-100 placeholder-gray-400 outline-none"
            />
          </div>
          <div class="mt-4">
            <input type="checkbox" id="user-case" class="" />
            <span
              >Acceptez les
              <a class="text-blue-500 underline" href="#"> conditions</a>
              d'utilisation</span
            >
          </div>
          <div class="flex justify-center mt-8">
            <button
              @click.prevent="registerCompany()"
              class="px-16 py-4 bg-blue-800 text-white font-bold text-sm uppercase rounded-md"
            >
              Creer compte
            </button>
          </div>
        </form>
        <div class="h-16 w-6/12 p-4 text-white bg-red-500 rounded-md absolute right-8 top-16">
            {{error}} 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  layout: "auth",
  data() {
    return {
      company: {
        address: {
          city: "",
          local: "Aucun",
        },
      },
      error:""
    };
  },
  methods: {
    ...mapActions(["register"]),
    registerCompany() {
      if (
        this.company.name &&
        this.company.address.city &&
        this.company.phone &&
        this.company.password
      ) {
        this.register(this.company)
          .then((d) => {
            this.$router.push("/login");
          })
          .catch((err) => {
            console.log(err);
          });
      }else{
          this.error="Error veillez remplir le formulaire correctement."
      }
    },
  },
};
</script>

<style>
</style>