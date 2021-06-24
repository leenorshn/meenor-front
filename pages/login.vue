<template>
  <div class="flex h-screen w-screen">
    <div
      class="
        w-2/5
        flex flex-col
        items-center
        justify-center
        bg-blue-800
        relative
      "
    >
      <img src="/homem.jpeg" alt="" />
      <div class="">
        <h2 class="text-center text-3xl text-gray-50 mt-6">
          ETS MULUMBI RANGI
        </h2>
        <p class="text-center text-xl text-gray-200 mt-6">
          systeme de gestion des revenus locatif
        </p>
      </div>
    </div>
    <div
      class="
        flex-1 flex flex-col
        justify-between
        items-center
        h-full
        bg-bluegrey-200
      "
    >
      <!-- <NuxtLink to="/register" class="absolute right-0 m-4 focus:outline-none focus:ring-none focus:text-green hover:font-bold hover:text-lg">Avez-vous un compte?</NuxtLink> -->
      <div class="w-3/4 px-16 mx-auto my-auto py-14">
        <h2 class="text-blue-800 text-3xl font-semibold">
          Connectez-vous pour travailer
        </h2>
        <form class="">
          <div class="mt-4">
            <label for="email" class="text-gray-500 mb-2">Phone:</label>
            <input
              id="email"
              type="text"
              v-model="credential.phone"
              placeholder="phone"
              class="
                w-full
                rounded-md
                border
                mt-1
                border-gray-100
                placeholder-gray-400
                focus:border-gray-200
                outline-none
              "
            />
          </div>

          <div class="mt-2">
            <label for="password" class="text-gray-500 mb-2"
              >Mot de passe:</label
            >
            <input
              id="password"
              type="password"
              v-model="credential.password"
              placeholder="votre mot de passe securise"
              class="
                w-full
                rounded-md
                mt-1
                focus:outline-none
                focus:border-indigo-200
                focus:ring focus:ring-indigo-400
                border border-gray-100
                placeholder-gray-400
                outline-none
              "
            />
          </div>
          <div
            v-if="inProcess"
            wire:loading
            class="
              fixed
              top-0
              left-0
              right-0
              bottom-0
              w-full
              h-screen
              z-50
              overflow-hidden
              bg-gray-700
              opacity-75
              flex flex-col
              items-center
              justify-center
            "
          >
            <div
              class="
                loader
                ease-linear
                rounded-full
                border-4 border-t-4 border-gray-200
                h-12
                w-12
                mb-4
              "
            ></div>
            <h2 class="text-center text-white text-xl font-semibold">
              Loading...
            </h2>
            <p class="w-1/3 text-center text-white">
              This may take a few seconds, please don't close this page.
            </p>
          </div>

          <div class="flex justify-center mt-8">
            <button
              @click.prevent="loginUser()"
              class="
                px-16
                py-4
                bg-blue-800
                focus:ring-none
                text-white
                font-bold
                text-sm
                uppercase
                rounded-md
              "
            >
              Connexion
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  layout: "auth",
  data() {
    return {
      credential: {},
      inProcess:false,
    };
  },
  methods: {
    ...mapActions(["login"]),
    loginUser() {
      this.inProcess=true
      this.login({ ...this.credential })
        .then((d) => {
          this.$router.push({ path: "/dashbord" });
          this.inProcess=false
        })
        .catch((error) => {
          this.inProcess=false
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>