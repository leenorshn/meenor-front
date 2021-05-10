<template>
  <div class="flex space-x-4 py-6">
    <div class="w-3/4 bg-white shadow-md rounded-md">
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div class="overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Client
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Messagerie
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <client-card v-for="(n, i) in locataires" :client="n" :key="i" />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/4">
      <div class="flex flex-col pl-6 space-y-2">
        <nuxt-link
          to="/clients/notificator"
          class="text-blue-600 flex text-base border-b-2 w-32 border-transparent hover:border-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          Notifications</nuxt-link
        >
      </div>
      <div
        class="h-24 relative bg-blue-700 shadow-md rounded-md my-5 flex items-center justify-center"
      >
        <div class="flex items-baseline justify-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-200 absolute left-2 top-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h2 class="text-2xl text-white font-semibold">240</h2>
          <span class="text-sm text-gray-200"> locataires</span>
        </div>
      </div>
      <div>
        <h3 class="mx-4 text-gray-500">
          Vous pouvez faire une selection basé sur des criteres ci-dessous:
        </h3>
        <div class="flex flex-col mx-4 my-3">
          <label for="city" class="text-sm text-gray-400">Par ville</label>
          <select class="text-sm shadow" name="" id="city">
            <option value="">Toutes</option>
            <option v-for="(city, i) in cities" :key="i" :value="city">
              {{ city }}
            </option>
          </select>
        </div>
        <div class="flex flex-col mx-4 my-3">
          <label for="etage" class="text-sm text-gray-400">Par Imebleu</label>
          <select class="text-sm shadow" name="" id="city">
            <option class="py-4" value="">Toutes</option>
            <option v-for="(house, i) in houses" :key="i" :value="house">
              {{ house }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import gql from "graphql-tag";
export default {
  apollo: {
    locataires: {
      query: gql`
        query {
          locataires {
            id
            name
            avatar
            phone
            room {
              id
              numero
            }
          }
        }
      `,
    },
  },

  data() {
    return {
      cities: [
        "Butembo",
        "Beni",
        "Bunia",
        "Kasindi",
        "Goma",
        "Kisangani",
        "Kinshasa",
      ],
      houses: ["Galerie GTB-BUBO", "Galerie GTB-Beni", "Galerie GTB Bunia"],
    };
  },
};
</script>