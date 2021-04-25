<template>
  <div class="flex px-2 pt-4 pb-8">
    <div class="w-3/4 pr-4">
      <div class="flex space-x-4">
        <div class="w-1/3 bg-white h-72 rounded-md"></div>
        <div class="w-2/3 bg-white h-72 rounded-md"></div>
      </div>
      <div class="grid grid-cols-3 py-4 gap-x-3">
        <div class="bg-blue-800 h-28 rounded-md relative flex justify-center items-center">
          <h3 class="text-sm text-gray-100 absolute right-2 top-1">Solde actuel</h3>
          <h3 class="text-3xl text-white">27 400 <span class="text-lg">$</span></h3>
        </div>
        <div class="bg-red-500 h-28 rounded-md relative flex justify-center items-center">
          <h3 class="text-sm text-gray-100 absolute right-2 top-1">Sortie (hebdo.)</h3>
          <h3 class="text-3xl text-white">5025 <span class="text-lg">$</span></h3>
        </div>
        <div class="bg-green-500 h-28 rounded-md relative flex justify-center items-center">
          <h3 class="text-sm text-gray-100 absolute right-2 top-1">Prevision (ans)</h3>
          <h3 class="text-3xl text-white">152 500 <span class="text-lg">$</span></h3>
        </div>
      </div>
      <h3 class="text-blue-600 text-lg mb-1">Dernier paiements</h3>
      <div class="h-96 w-full rounded-md">
        <div>
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
                      <payment-card v-for="(n, i) in 6" :key="i" :numero="i" />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full flex justify-end">
            <nuxt-link
              class="w-16 my-2 text-blue-600 text-sm inline border-b-2 border-transparent hover:border-blue-500"
              to="/"
              >Voir plus</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <!-- right-side  -->
    <calender-block />
  </div>
</template>

<script>
import CalenderBlock from "../../components/CalenderBlock.vue";
export default {
  components: { CalenderBlock },
};
</script>