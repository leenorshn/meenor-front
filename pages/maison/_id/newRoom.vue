<template>
  <div class="w-8/12 mx-auto">
    <div>
      <div class="space-y-6">
        <h4 class="pt-4 font-semibold">Quelle type de location voulez-vous creer?</h4>
        					

        <div class="flex items-center justify-around w-1/2 group py-2">
          <div>
            <input type="radio" id="isLivingRoom" value="apartement" class="rounded-full h-5 w-5 mr-4" v-model="typeLocation" />
            <label for="isLivingRoom">C'est un apartement</label>
          </div>
          <div>
            <input type="radio" id="isShop" value="boutique" class="rounded-full h-5 w-5 mr-4" v-model="typeLocation" />
            <label for="isShop">C'est une boutique</label>
          </div>
        </div>
      </div>
      <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
          <div class="border-t-2 border-gray-200"></div>
        </div>
      </div>
      <div class="w-full">
        <div class="flex space-x-4 items-center w-full">
          <div class="flex flex-col w-1/3">
            <label for="numero">Numero</label>
            <input class="" type="text" placeholder="numero de la chambre" />
          </div>
          <div class="flex flex-col w-1/3">
            <label for="numero">Numero</label>
            <input class="" type="text" placeholder="numero de la chambre" />
          </div>
          <div class="flex flex-col w-1/3">
            <label for="numero">Numero</label>
            <input class="" type="text" placeholder="numero de la chambre" />
          </div>
          
        </div>
        <div v-if="typeLocation=='boutique'" class="flex flex-col">
            <label for="numero">Numero</label>
            <input type="text" class="w-1/3" placeholder="numero de la chambre" />
          </div>

        <div class="py-6 space-y-2">
            <h4>Autres Information</h4>
          <div>
            <input type="checkbox" />
            <label for="hasPower">Il ya du courant</label>
          </div>
          <div>
            <input type="checkbox" />
            <label for="hasWater">Il ya de l'eau</label>
          </div>
          <div>
            <input type="checkbox" class="" />
            <label for="isAvailable">Est disponible</label>
          </div>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
          <div class="border-t-2 border-gray-200"></div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeLocation: true,
    };
  },
};
</script>