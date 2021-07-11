<template>
  <div class="pt-4 flex space-x-3">
    <div class="w-1/4 mb-24">
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
            >
              <table class="min-w-full divide-y divide-gray-200">
                
                <tbody class="bg-white divide-y divide-gray-200">
                  <batiment-card v-for="(bat, i) in batiments" :batiment="bat" :key="i" />

                  <!-- More people... -->
                </tbody>
              </table>
              <!-- <pre>{{batiments}}</pre> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-3/4">
        <nuxt-child></nuxt-child>
      </div>
  </div>
</template>
<script>

import { mapState,mapActions } from "vuex";
export default {
  middleware:'isAuth',
    data(){
        return{
           cities:[],
           hire:true,
        }
    },
    mounted(){
    this.loadBatiment()
    },
    computed:{
     // ...mapState({batiments:'batiment/batiments'}),
      batiments(){
        return this.$store.state.batiment.batiments;
      }
    },
    methods:{
      ...mapActions({loadBatiment:"batiment/loadBatiment"})
    }
}
</script>