<template>
  <div>
    <div class="flex my-2 bg-white rounded-md shadow overflow-auto">
      <div class="h-32 w-32 flex-shrink-0">
        <img
          class="h-full w-32"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
          alt=""
        />
      </div>
      <div class="p-4">
        <h2 class="text-2xl text-blue-800 font-bold tracking-wide">
          Galerie kalitex
        </h2>
        <h5 class="text-xs text-gray-400">Adresse</h5>
        <h5 class="text-base text-gray-600 font-semibold">
          Butembo rue kin proche du rond point bayoli
        </h5>
      </div>
      <div
        class="p-4 flex justify-around items-center space-x-4 w-1/3 border-l-2 border-r-2 border-gray-100"
      >
        <div>
          <h5 class="text-xs text-gray-400">Niveau</h5>
          <h2 class="text-2xl text-blue-800 font-bold tracking-wide">3</h2>
        </div>
        <div>
          <h5 class="text-xs text-gray-400">locataire</h5>
          <h2 class="text-2xl text-blue-800 font-bold tracking-wide">32</h2>
        </div>
        <div>
          <h5 class="text-xs text-gray-400">Boutique</h5>
          <h2 class="text-2xl text-blue-800 font-bold tracking-wide">35</h2>
        </div>
      </div>
      <div class="p-4 flex flex-col justify-around w-1/4">
        <div class="flex justify-between items-center">
          <h2 class="text-sm text-blue-800 font-bold tracking-wide">Actions</h2>
          <div class="flex bg-gray-800 text-white rounded py-1 px-6 space-x-3">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 flex"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          <nuxt-link
            class=""
            to="/maison"
          >
            
            Retour</nuxt-link
          >
          </div>

        </div>
        <nuxt-link
          class="w-32 text-blue-600 text-lg inline border-b-2 border-transparent hover:border-blue-500"
          to="/"
          >Creer un niveau</nuxt-link
        >
      </div>
    </div>
    <div v-for="(n,i) in 4" :key="i">
        <h3 class="text-blue-600 text-lg mb-1">Niveau ({{i}})</h3>
        <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
            >
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Chambre
                    </th>
                    <th
                      scope="col"
                      class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Locataire
                    </th>
                     <th
                      scope="col"
                      class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Durée
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      type
                    </th>
                    <th
                      scope="col"
                      class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      prix/mois
                    </th>
                    <th
                      scope="col"
                      class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                     Montant payé
                    </th>
                    <th
                      scope="col"
                      class="text-center text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                   
                        <chambre-item v-for="(n,i) in 3" :key="i" :numero="i"/>
                        
                   
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-end">
          <nuxt-link class="w-48 mt-1 text-blue-600 text-lg inline border-b-2 border-transparent hover:border-blue-500" to="/">Ajouter une chambre</nuxt-link>
      </div>
    </div>
    <div class="h-24"></div>
  </div>
</template>