<template>
  <div class="flex max-w-6xl py-6 mx-auto space-x-4">
    <div class="w-3/4 bg-white rounded-md shadow">
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
          >
            <div class="overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase "
                    >
                      Client
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase "
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase "
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase "
                    >
                      Messagerie
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase "
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <client-card
                    v-for="(n, i) in locataires"
                    :client="n"
                    :key="i"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/4">
      <div class="flex flex-col pl-6 space-y-2">
        <nuxt-link
          to="/clients/creator"
          class="flex w-24 text-base text-blue-600 border-b-2 border-transparent  hover:border-blue-500"
        >
          <Icon :iconName="`u-new`"/>

          Nouveau</nuxt-link
        >
        <nuxt-link
          to="/clients/notificator"
          class="flex w-32 text-base text-blue-600 border-b-2 border-transparent  hover:border-blue-500"
        >
          <Icon :iconName="`notify`"/>
          Notifications</nuxt-link
        >
      </div>
      <div
        class="relative flex items-center justify-center h-24 my-5 bg-blue-700 rounded-md shadow-md "
      >
        <div class="flex items-baseline justify-center space-x-2">
          <Icon :iconName="`users`"/>
          <h2 class="text-2xl font-semibold text-white">
            {{ locataires.length }}
          </h2>
          <span class="text-sm text-gray-200"> locataires</span>
        </div>
      </div>
      <div>
        <h3 class="mx-4 text-gray-500">
          Vous pouvez faire une selection basé sur des criteres ci-dessous:
        </h3>
        <div class="flex flex-col mx-4 my-3">
          <label for="city" class="text-sm text-gray-400">Par ville</label>
          <select class="text-sm shadow" name="" id="city">
            <option value="">Toutes</option>
            <option v-for="(city, i) in cities" :key="i" :value="city">
              {{ city.city }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import gql from 'graphql-tag';
import { mapActions } from "vuex";
export default {
  apollo:{
    cities:{
      query:gql`
        query{
          cities{
            id
            city
          }
        }
      `
    },
    // batiments:{
    //   query:gql`
    //     batiments{
    //       id
    //       name
    //     }
    //   `
    // }
  },
  mounted(){
    this.getLocataire()
  },
  computed:{
    locataires(){
      return this.$store.state.house.locataires;
    }
  },
 methods:{
   ...mapActions({getLocataire:"house/getLocataire"})
 },
  
};
</script>