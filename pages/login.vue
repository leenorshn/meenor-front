<template>
  <div class="flex h-screen w-screen">
     <div class="w-2/5 flex flex-col justify-center bg-blue-800 relative">
        <h2 class="absolute text-center text-7xl text-yellow-400 mt-6 inset-0">B-online</h2>
        <img src="imagelogin.jpg" alt="" class="bg-gradient-to-br mt-4 from-bluegrey-300 to-indigo-600">
    </div>
    <div class="flex-1 flex flex-col justify-between items-center h-full bg-bluegrey-200">
        <NuxtLink to="/register" class="absolute right-0 m-4 focus:outline-none focus:ring-none focus:text-green hover:font-bold hover:text-lg">Avez-vous un compte?</NuxtLink>
      <div class=" w-3/4 px-16 mx-auto my-auto py-14">
        <h2 class="text-blue-800 text-3xl font-semibold">Connectez-vous pour travailer</h2>
        <form class="">
          <div class="mt-4">
            <label for="email" class="text-gray-500 mb-2"
              >Email:</label
            >
            <input
              id="email"
              type="text"
              placeholder="Adresse email"
              class="w-full rounded-md border mt-1 border-gray-100 placeholder-gray-400 focus:border-gray-200 outline-none"
            />
          </div>

          
          <div class="mt-2">
            <label for="password" class="text-gray-500 mb-2"
              >Mot de passe:</label
            >
            <input
              id="password"
              type="password"
              placeholder="votre mot de passe securise"
              class="w-full rounded-md mt-1 focus:outline-none focus:border-indigo-200 focus:ring focus:ring-indigo-400 border border-gray-100 placeholder-gray-400 outline-none"
            />
          </div>
          <div class="mt-4 flex justify-end">
            
             <a class="text-blue-500 underline text-right" href="#"> Mot de passe oublié?</a> 
          </div>
          
          <div class="flex justify-center mt-8">
            <NuxtLink to="/" class="px-16 py-4 bg-blue-800 focus:ring-none  text-white font-bold text-sm uppercase rounded-md">Connexion</NuxtLink>
          </div>
          
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"Login",
    layout:'auth'
};
</script>

<style>
</style>