<template>
  <div class="bg-white rounded-md shadow-md h-full">
    <div class="px-4 py-3 bg-blue-900 rounded-t-md text-yellow-50 space-x-4 flex">
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
          d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
        />
      </svg>
      <h2 class=" text-yellow-50 font-semibold text-lg">Secutité</h2>
    </div>
    <div>
        <div class="flex h-96 flex-col items-center justify-center">
            <h4 class="text-lg text-left py-4 font-semibold">Modifier votre mot de passe</h4>
            <div class="w-1/2 flex flex-col justify-center items-center">
                <input type="text" class="w-80 bg-gray-100" placeholder="Mot de passe" >
                <button
                 class="px-4 w-80 mt-5 py-2 bg-blue-600 text-blue-50 rounded-md">Modifier</button>
            </div>
        </div>
    </div>
  </div>
</template>