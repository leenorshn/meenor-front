<template>
  <div>
  
    <div>
      <div class="w-2/3 mx-auto">
        <div class="mt-5 md:mt-0 md:col-span-2">
            <h1 class=" font-semibold mb-1">Nouveau utilisateur</h1>
          <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-4 sm:p-6">
                <div class=" pb-2 flex items-center space-x-reverse space-x-4">
                 
               <label for="" class="text-gray-500 order-last"
                    >Choisir l'image 
                  </label>   
      <div
      v-if="!url"
        class="
          order-first
          flex
          items-center
          h-32
          w-32
          border-2 border-dashed border-gray-400
          rounded-full
        "
      >
        <div
          class="
            w-full
            h-full
            flex
            justify-center
            items-center
            inset-0
            rounded-full
            cursor-pointer
            bg-gray-50
          "
          @click="onPickFile"
        >
          <div class="flex items-start text-gray-500">
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          
        </div>
        <input
          type="file"
          style="display: none"
          ref="fileInput"
          accept="image/*"
          @change="onFilePicked"
        />
        
      </div>
       
   
                  <div v-else>
                    <img :src="url" alt="" class="w-64 h-64 object-cover" />
                  </div>
                </div>
                <div class="col-span-6">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Identite</label
                  >
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autocomplete="street-address"
                    placeholder="Nom complet"
                    v-model="user.name"
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
                <div class="col-span-6">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Phone number</label
                  >
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    v-model="user.phone"
                    autocomplete="phone"
                    placeholder="Phone number"
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
                <div class="col-span-6">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Role</label
                  >
                  <select v-model="user.role" id="">
                    <option value="admin">Admin</option>
                    <option value="agent">Agent</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>
              <div class="px-4 py-4 bg-gray-50 text-right space-x-4 ">
                <button
                 @click.prevent="annuler()"
                  class="
                    inline-flex
                    justify-center
                    py-2
                    px-12
                    border border-transparent
                    shadow-sm
                    text-sm
                    font-medium
                    rounded-md
                    text-white
                    bg-orange-500
                    hover:bg-orange-700
                    focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                  "
                >
                  Annuler
                </button>
                <button
                  @click.prevent="createUser()"
                  class="
                    inline-flex
                    justify-center
                    py-2
                    px-12
                    border border-transparent
                    shadow-sm
                    text-sm
                    font-medium
                    rounded-md
                    text-white
                    bg-indigo-500
                    hover:bg-indigo-700
                    focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                  "
                >
                  Enregister
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { IMAGE_UPLOAD_QUERY } from "~/apollo/image_gql";
import { mapActions } from "vuex";
export default {
  data(){
    return{
      user:{
        password:"123456"
      },
      url:null
    }
  },
  methods:{
    ...mapActions({newUser:"users/createUser"}),
    createUser(){
      this.newUser({
        ...this.user,
        avatar:this.url
      })
    },
    annuler() {
      this.locataire = {};
      this.url=null;
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    async onFilePicked(event) {
      const files = event.target.files;
      if(!files) return;
      console.log(files);

      const { data } = await this.$apollo.mutate({
        mutation: IMAGE_UPLOAD_QUERY,
        variables: {
          file: files[0],
        },
        awaitRefetchQueries: true,
      });
      console.log(data);
      this.url = data.uploadFile.url;
    },
  }
}
</script>