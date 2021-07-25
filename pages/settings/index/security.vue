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
    <div class="h-full">
        <div v-if="!isChanged" class="flex h-96 flex-col items-center justify-center">
            <h4 class="text-lg text-left py-4 font-semibold">Modifier votre mot de passe</h4>
            <div class="w-1/2 flex flex-col justify-center items-center">
                <input type="text" v-model="password" class="w-80 bg-gray-100" placeholder="Mot de passe" >
                <button
                @click.prevent="changePass"
                 class="px-4 w-80 mt-5 py-2 bg-blue-600 text-blue-50 rounded-md">Modifier</button>
            </div>
        </div>
        <div v-else class="h-full">
            <div class="flex flex-col space-y-4 items-center justify-center h-full">
              <h4 class="text-2xl text-greenP font-semibold">Mot de passe changé avec success</h4>
            
              <button @click="isChanged=false" class="text-blue-600 bg-blue-100 rounded-md px-6 py-2 font-semibold">changer encore</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {CHANGE_PASS} from "~/apollo/user_gql"
export default {
  data(){
    return {
      password:"",
      isChanged:false,
      error:''
    }
  },
  methods:{
  async  changePass(){
    
    try {
        const res = await this.$apollo
        .mutate({ mutation: CHANGE_PASS, variables: {password:this.password} })
        .then(({ data }) => {
          console.log(data);
          return data && data.changePassword;
        });
      if(res){
        this.isChanged=true
      }
      this.password=""

    } catch (error) {
        console.log(error);
       this.error="echec de modification"
    }
    }
  }
}
</script>