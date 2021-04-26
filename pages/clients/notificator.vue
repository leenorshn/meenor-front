<template>
  <div class="flex space-x-4 py-6">
    <div class="w-4/5">
      <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->

      <div class="mt-10 sm:mt-0">
        <div class="">
          <div class="mt-5 md:mt-0">

            <form action="#" method="POST" class="space-y-3">
                <div class="flex space-x-4">
                    <label for="forText"></label>
                    <textarea id="forText" cols="20" rows="2" class="w-4/5" placeholder="Entrez votre message"></textarea>
                    <button class="flex justify-between items-center h-10 w-10 bg-blue-800 hover:text-blue-700 text-white rounded-full hover:bg-blue-200">
                      <div class="p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                        />
                      </svg>
                      </div>
                    </button>
                  </div>
              <div class="overflow-y-auto max-h-screen">
                  <h3 class="ml-4 mb-2 text-gray-500">Liste des messages</h3>
                <div class="px-4 py-1 relative bg-white w-4/5 ml-4 sm:p-6 rounded-md">
                  <h2 class="text-xl text-blue-700 font-semibold">titre de message</h2>
                  <p class="text-gray-500">Contenu du message en diffusion, broadcast</p>
                  <h4 class="absolute right-3 bottom-2 font-medium text-blue-800">12h:30</h4>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/5">
      <nuxt-link
        to="/clients"
        class="px-20 py-2 text-gray-50 bg-black rounded-md"
        >Retour</nuxt-link>
        <div class="my-6">
            <h3 class="text-blue-800 font-bold text-xl">Info:</h3>
            <p class="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Magni officiis provident dolore repellat fugit explicabo, dolor, amet 
                obcaecati aperiam odit quos laudantium quidem ipsam! 
                Dolores pariatur suscipit repellendus numquam soluta.
            
            </p>
        </div>
    </div>
  </div>
</template>