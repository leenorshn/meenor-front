<template>
    <div>
         <div class="w-11/12 mx-auto">
      <div class="flex py-4 space-x-4">
        <div class="w-1/6 bg-blue-900 shadow rounded-md p-4 space-y-8 h-larger">
          <div class="space-y-4 ml-4">
            <nuxt-link
              class="flex space-x-2 items-center"
              to="/settings/general"
            >
              <h3 class="text-white">General</h3>
            </nuxt-link>
            <nuxt-link
              class="flex space-x-2 items-center"
              to="/settings/account"
            >
             

              <h3 class="text-white">Mon compte</h3></nuxt-link
            >
            <nuxt-link
              class="flex space-x-2 items-center"
              to="/settings/security"
            >
              
              <h3 class="text-white">Securite</h3></nuxt-link
            >
            <nuxt-link
              class="flex space-x-2 items-center"
              to="/settings/users"
            >
              
              <h3 class="text-white">Utilisateurs</h3></nuxt-link
            >
          </div>
          <div class="mt-10 space-y-3">
            <h3 class="text-yellow-500 text-lg font-semibold">Information</h3>
            <p class="text-gray-300 text-sm text-justify">
              En cours de dev
            </p>
          </div>
        </div>
        <div class="w-5/6 shadow rounded bg-white">
          <nuxt-child></nuxt-child>
        </div>
      </div>
    </div>
       
    </div>
</template>