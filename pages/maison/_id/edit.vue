<template>
    <div>
        <div class="bg-blue-600 text-white py-2 px-4 w-full rounded-b">
            edit-header
        </div>
        <div class="bg-white h-96">
            <div class="w-2/3 mx-auto bg-blue-100 h-96 py-5 px-16 space-y-3">
                <div class="w-80">
                    <label for="house_name" class="block text-sm text-gray-500"
                      >Nom du batiment:</label
                    >
                    <input
                      type="text"
                       
                      id="house_name"
                      placeholder="Ex: Immeuble X"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div class="w-80">
                    <label for="city" class="block text-sm text-gray-500"
                      >Ville:</label
                    >
                    <input
                      type="text"
                       
                      id="city"
                      placeholder="Ex: Goma"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div class="w-80">
                    <label for="first_name" class="block text-sm text-gray-500"
                      >Adresse locale:</label
                    >
                    <textarea
                      type="text"
                       
                      id="first_name"
                      placeholder="Ex: Com. Xx , Av. Yy n-Z"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                    <div class="flex py-2 w-full space-x-6">
                        <button class="px-8 py-2 rounded bg-orange-600 text-white">Annuler</button>
                        <button class="px-8 py-2 rounded bg-blue-600 text-white">Modifier</button>
                    </div>
            </div>
        </div>
    </div>
</template>