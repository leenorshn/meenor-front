<template>
  <div>
    <div
      class="flex justify-between items-center h-12 px-6 bg-blue-800 rounded-b-md border-t border-gray-300"
    >
      <h3 class="text-gray-50 text-sm capitalize">Detail chambre</h3>
      <nuxt-link
        class="text-white text-sm font-bold bg-blue-500 px-5 py-2 rounded-md"
        :to="`/maison/${$route.params.id}/room/creator`"
        >Ajouter locataire</nuxt-link
      >
    </div>
    <div class="w-full flex">
      <div class="w-1/5 px-1 py-3 h-96 bg-white mt-3 rounded-md space-y-3">
        <div class="px-4">
          <h2 class="text-gray-500 text-sm">Chambre numero</h2>
          <h2 class="text-2xl text-blue-900 font-bold">10</h2>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
          <div class="py-1">
            <div class="border-t border-gray-200"></div>
          </div>
        </div>
        <div class="px-4">
          <h2 class="text-gray-500 text-sm">Batiment</h2>
          <h2 class="text-lg text-blue-900 font-semibold">Nom du batiment</h2>
          <h2 class="text-sm">Niveau: 3</h2>
        </div>
        
        <div class="hidden sm:block" aria-hidden="true">
          <div class="py-1">
            <div class="border-t border-gray-200"></div>
          </div>
        </div>
        <div class="px-4">
        <div class="flex space-x-4 items-center">
          <h2 class="text-gray-500 text-sm">type</h2>
          <h2 class="text-lg text-blue-900 font-semibold">Apartement</h2>
        </div>
        <div class="flex space-x-4 items-center">
          <span class="text-gray-500 text-sm">Taille</span>
          <h2 class="text-base text-blue-900 font-bold">Medium</h2>
        </div>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
          <div class="py-1">
            <div class="border-t border-gray-200"></div>
          </div>
        </div>
        <div class="px-4">
        <div class="flex space-x-4 items-center">
          <span class="text-gray-500 text-sm">Prix: </span>
          <h2 class="text-lg text-blue-900 font-semibold">75 $
              <span class="text-gray-500 text-xs"> /mois</span>
          </h2>
        </div>
        <h2 class="text-lg text-greenP font-semibold flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          <span class="block">Disponible</span>
        </h2>
        </div>
      </div>
      <div class="flex-1 px-1 py-2 mt-2 mx-2 ">
          <div class="-my-2 overflow-x-auto  w-full">
              <div
                class="py-2 align-middle inline-block min-w-full"
              >
                <div
                  class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
                >
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-200">
                      <tr>
                        <th
                          scope="col"
                          class="px-4 py-3 flex justify-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                            />
                          </svg>
                        </th>
                        <th
                          scope="col"
                          class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Client
                        </th>
                        <th
                          scope="col"
                          class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Chambre
                        </th>
                        <th
                          scope="col"
                          class="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Prix/mois
                        </th>
                        <th
                          scope="col"
                          class="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Durée
                        </th>
                        <th
                          scope="col"
                          class="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Montant versé
                        </th>
                        <th
                          scope="col"
                          class="text-center text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3"
                        >
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <payment-card v-for="(n, i) in 8" :key="i" :numero="i" />
                    </tbody>
                  </table>
                  <!-- <pre>{{user}}</pre> -->
                </div>
              </div>
            </div>
      </div>
    </div>
  </div>
</template>