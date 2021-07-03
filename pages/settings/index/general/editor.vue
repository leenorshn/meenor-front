<template>
  <div>
    


    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-1 md:gap-6 px-12">
        <div class="mt-5 md:mt-0 md:col-span-2">
          <div class="px-4 py-6 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Information General
            </h3>
          </div>
          <form action="#" method="POST">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-12 py-5 bg-white">
                <div class="flex flex-col space-y-6">
                  <div class="flex space-x-4">
                      <div class="w-1/2">
                    <label
                      for="first-name"
                      class="block text-sm font-medium text-gray-700"
                      >Denomination</label
                    >
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="
                        mt-1
                        focus:ring-indigo-500
                        focus:border-indigo-500
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                    />
                  </div>
                  <div class="w-1/4">
                    <label
                      for="email-address"
                      class="block text-sm font-medium text-gray-700"
                      >Rccm</label
                    >
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      placeholder="R-C-C-M"
                      class="
                        mt-1
                        focus:ring-indigo-500
                        focus:border-indigo-500
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                    />
                  </div>
                  <div class="w-1/4">
                    <label
                      for="email-address"
                      class="block text-sm font-medium text-gray-700"
                      >Id national</label
                    >
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      placeholder="Id-nat"
                      class="
                        mt-1
                        focus:ring-indigo-500
                        focus:border-indigo-500
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                    />
                  </div>
                  </div>

                  <div class="col-span-6">
                    <label
                      for="street-address"
                      class="block text-sm font-medium text-gray-700"
                      >Votre adresse</label
                    >
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autocomplete="street-address"
                      placeholder="L'adresse de l'entreprise"
                      class="
                        mt-1
                        focus:ring-indigo-500
                        focus:border-indigo-500
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                    />
                  </div>
                <div class=" flex w-full space-x-4">
                    <div class="w-1/2">
                    <label
                      for="city"
                      class="block text-sm font-medium text-gray-700"
                      >Phone</label
                    >
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Ex: +243 84 999 . . ."
                      class="
                        mt-1
                        focus:ring-indigo-500
                        focus:border-indigo-500
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                    />
                  </div>

                  <div class="w-1/2">
                    <label
                      for="state"
                      class="block text-sm font-medium text-gray-700"
                      >Email</label
                    >
                    <input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="exemple@gmail.com"
                      class="
                        mt-1
                        focus:ring-indigo-500
                        focus:border-indigo-500
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                    />
                  </div>
                </div>
               
                <div class="">
              <label for="about" class="block text-sm font-medium text-gray-700">
                description
              </label>
              <div class="mt-1">
                <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Detail ici ...."></textarea>
              </div>
              <p class="mt-2 text-sm text-gray-500">
                Brief description pour l'entreprise.
              </p>
            </div>
             </div>
              </div>
              
              <div class="px-12 py-3 bg-gray-50 text-right space-x-4">
                <nuxt-link
                  to="/settings/general"
                  class="
                    inline-flex
                    justify-center
                    py-2
                    px-20
                    border border-transparent
                    shadow-sm
                    text-sm
                    font-medium
                    rounded-md
                    text-white
                    bg-orange-600
                    hover:bg-orange-700
                    focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                  "
                >
                  Annuler
                </nuxt-link>
                <button
                  type="submit"
                  class="
                    inline-flex
                    justify-center
                    py-2
                    px-20
                    border border-transparent
                    shadow-sm
                    text-sm
                    font-medium
                    rounded-md
                    text-white
                    bg-indigo-600
                    hover:bg-indigo-700
                    focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                  "
                >
                  Enregistrer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>