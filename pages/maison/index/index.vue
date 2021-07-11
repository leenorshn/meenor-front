<template>
    <div>
           <div class="flex  bg-white  shadow overflow-auto relative">
      <div class="h-20 w-20 flex-shrink-0">
        <img
          class="h-full w-20"
          src="/../ndako.svg"
          alt=""
        />
      </div>
      <div class="p-4">
        <h2 class="text-2xl text-blue-800 font-bold tracking-wide">
          {{ batiment.name }}
        </h2>
        
      </div>
      <div
        class="p-4 flex  items-center space-x-4 w-1/3"
      >
        <div>
          <h5 class="text-xs text-gray-400">Adresse</h5>
        <h5 class="text-base text-gray-600 font-semibold">
          {{ batiment.address.city }}/{{ batiment.address.local }}
        </h5>
        </div>
        
        
      </div>
      
    </div>
    <div v-if="batiment.totaleNiveaux == 0">
      <div
        class="w-1/2 bg-white mt-16 rounded-md shadow-md mx-auto p-4 space-y-3"
      >
        <h3 class="text-gray-600 text-2xl font-semibold">Information</h3>
        <div class="flex space-x-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
            />
          </svg>
          <p class="text-gray-500 text-sm">
            Ce batiment ne contient pas encore un niveau, veillez le creer pour
            mieux gerer votre batiment.
          </p>
        </div>
        <button

          v-if="!isNiveauEdit"
          class="w-32 text-blue-600 text-lg block border-b-2 border-transparent hover:border-blue-500"
          @click.prevent="showCreateNiveau()"
          >Creer un niveau</button>
        <div v-else>
          <input type="text" v-model="niveau" placeholder="niveau">
          <button class="text-blue-600 text-lg block border-b-2 border-transparent hover:border-blue-500">Save</button>
        </div>
      </div>
    </div>
    <div v-for="(n, i) in batiment.niveaux" :key="i">
    <!-- <pre>{{batiment.niveaux[i].rooms}}</pre> -->
      <h3 class="text-blue-600 text-sm mb-1">Niveau ({{ i }})</h3>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
            >
              <table class="min-w-full divide-y divide-gray-200">
               
                    <tbody class="bg-white divide-y divide-gray-200">
                    <chambre-item
                      v-for="(m, f) in batiment.niveaux[i].rooms"
                      :key="f"
                      :numero="f"
                      :chambre="m"
                    />
                    </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-end">
        <nuxt-link
          class="w-48 mt-1 text-blue-600 text-lg inline border-b-2 border-transparent hover:border-blue-500"
          :to="`/maison/${n.id}/newRoom`"
          >Ajouter une chambre</nuxt-link
        >
      </div>
    </div>
    </div>
</template>

<script>
export default {
    props:["batiment"]
}
</script>