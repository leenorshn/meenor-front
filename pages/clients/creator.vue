<template>
  <div class="flex space-x-4 py-6">
    <div class="w-4/5">
      <div class="mt-10 sm:mt-0">
        <div class="">
          <div class="mt-5 md:mt-0 ">
            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div>
                    <label class="block ml-3 text-sm font-medium text-gray-700">
                      Photo
                    </label>
                    <div class="mt-1 flex items-center">
                      <span
                        class="inline-block h-20 w-20 rounded-full overflow-hidden bg-gray-100"
                      >
                        <svg
                          class="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </span>
                      <button
                        type="button"
                        class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Change
                      </button>
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-white sm:p-6">
                  <div class="flex space-x-4">
                    <div class="w-2/5">
                      <label
                        for="first_name"
                        class="block text-sm font-medium text-gray-700"
                        >Nom et postnom:</label
                      >
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        placeholder="Ex: Jeanno marteau"
                        class="mt-1 focus:ring-indigo-500  focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="w-1/3">
                      <label
                        for="last_name"
                        class="block text-sm font-medium text-gray-700"
                        >Prenom:</label
                      >
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        placeholder="Depunt"
                        autocomplete="family-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    
                    
                  </div>
                  <div class="w-full flex py-4 space-x-4">
                    <div class="w-2/5">
                      <label
                        for="email_address"
                        class="block text-sm font-medium text-gray-700"
                        >Phone:</label
                      >
                      <input
                        type="text"
                        name="email_address"
                        id="email_address"
                        autocomplete="email"
                        placeholder="Ex:  +243 97823 . . 57"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>                    
                    </div>
                </div>
                
                
                   <div
                class="px-4 py-3 mt-10 bg-gray-50 text-right sm:px-6 flex space-x-4 items-center justify-end"
              >
                <button
                  type="submit"
                  class="inline-flex justify-center py-2 px-20 border-2 hover:text-white border-indigo-500 shadow-sm text-sm font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  class="inline-flex justify-center py-2 px-20 border-2 border-indigo-500 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Valider
                </button>
              </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/5">
      <nuxt-link to="/clients" class="px-8 py-2 text-gray-50 bg-black rounded-md"
        >Retour</nuxt-link
      >
    </div>
  </div>
</template>