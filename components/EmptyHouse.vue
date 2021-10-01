<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col items-center justify-center text-center">
    <img src="/ndako.svg" alt="" class="w-24 h-24">
    <h3 class="mt-2 text-sm font-medium text-gray-900">Pas de maison</h3>
    <p class="mt-1 text-sm text-gray-500">
      Vous n'avez pas encore creer un immeuble a gerer
    </p>
    <div class="mt-6">
      <nuxt-link to="/maison/new" type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Ajouter maison
      </nuxt-link>
    </div>
  </div>
</template>

<script>


export default {
  
}
</script>