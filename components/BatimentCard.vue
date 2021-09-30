<template>
  
                <li  class="flex ">
                        <div class="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                            <img :src="`/ndako.svg`" :alt="`house img`" class="object-cover object-center w-full h-full" />
                          </div>

                          <div class="flex flex-col flex-1 ml-4">
                            <div>
                              <div class="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <a :href="batiment.id">
                                    {{ batiment.name }}
                                  </a>
                                </h3>
                                
                              </div>
                              <p class="mt-1 text-sm text-gray-500">
                                {{ batiment.address.city }}/{{ batiment.address.local }}
                              </p>
                            </div>
                            <div class="flex items-end justify-between flex-1 text-sm">
                              <p class="text-gray-500">Etage{{batiment.totaleNiveaux>1?"s":""}} <span class="font-semibold text-black">{{ batiment.totaleNiveaux }}</span> -- Chambre{{batiment.totalRooms>1?"s":""}} <span class="font-semibold text-black">{{ batiment.totalRooms }}</span></p>

                              <div class="flex">
                                <button type="button" class="mr-5 font-medium text-indigo-600 hover:text-indigo-500">voir</button>
                                <button type="button" class="mr-5 font-medium text-orange-600 hover:text-orange-500">Remove</button>
                              </div>
                              
                            </div>
                          </div>
                        </li>
                     

</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    batiment: Object,
  },
  methods: {
    ...mapActions({ deleteBatiment: "batiment/deleteBatiment" }),
    async deleteHouse() {
      this.deleteBatiment(this.batiment.id);
    },
    selected(){
      this.$emit('selected',this.batiment)
    }
  },
};
</script>