<template>
    <div>
         <div class="w-11/12 mx-auto">
      <div class="flex py-4 space-x-4">
        <div class="w-1/5 bg-blue-900 shadow rounded-md p-4 space-y-8 h-larger">
          <div class="space-y-4 ml-4">
            <nuxt-link
              class="flex space-x-2 items-center"
              to="/comptabilite/general"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <h3 class="text-white">Payment</h3>
            </nuxt-link>
            <nuxt-link
              class="flex space-x-2 items-center"
              to="/comptabilite/sortie"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>

              <h3 class="text-white">Sortie</h3></nuxt-link
            >
            <nuxt-link
              class="flex space-x-2 items-center"
              to="/comptabilite/account"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <h3 class="text-white">Rapports</h3></nuxt-link
            >
          </div>
          <div class="mt-10 space-y-3">
            <h3 class="text-yellow-500 text-lg font-semibold">Information</h3>
            <p class="text-gray-300 text-sm text-justify">
              En cours de dev
            </p>
          </div>
        </div>
        <div class="w-4/5 shadow rounded bg-white">
          <nuxt-child></nuxt-child>
        </div>
      </div>
    </div>
       
    </div>
</template>