<template>
  <div class="bg-gray-100 min-h-screen">
    <nav-bar />
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
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
              <h3 class="text-white">general</h3>
            </nuxt-link>
            <nuxt-link
              class="flex space-x-2 items-center"
              to="/comptabilite/payment"
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
              <h3 class="text-white">Paiement</h3>
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
              <h3 class="text-white">Compte</h3></nuxt-link
            >
          </div>
          <div class="mt-10 space-y-3">
            <h3 class="text-yellow-500 text-lg font-semibold">Information</h3>
            <p class="text-gray-300 text-sm text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              repellendus, nobis eum enim assumenda blanditiis tempora maxime ex
              asperiores. Et quis, veniam delectus nam maxime odio error
              voluptatibus. Architecto, fugiat.
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

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
