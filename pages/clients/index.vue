<template>
  <div class="flex space-x-4 py-6">
    <div class="w-3/4 bg-white shadow rounded-md">
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div class="overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Client
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-center text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Messagerie
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-center text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
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
          class="
            text-blue-600
            flex
            text-base
            border-b-2
            w-24
            border-transparent
            hover:border-blue-500
          "
        >
          <Icon :iconName="`u-new`"/>

          Nouveau</nuxt-link
        >
        <nuxt-link
          to="/clients/notificator"
          class="
            text-blue-600
            flex
            text-base
            border-b-2
            w-32
            border-transparent
            hover:border-blue-500
          "
        >
          <Icon :iconName="`notify`"/>
          Notifications</nuxt-link
        >
      </div>
      <div
        class="
          h-24
          relative
          bg-blue-700
          shadow-md
          rounded-md
          my-5
          flex
          items-center
          justify-center
        "
      >
        <div class="flex items-baseline justify-center space-x-2">
          <Icon :iconName="`users`"/>
          <h2 class="text-2xl text-white font-semibold">
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
              {{ city }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
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
  data() {
    return {
      cities: [
        "Butembo",
        "Beni",
        "Bunia",
        "Kasindi",
        "Goma",
        "Kisangani",
        "Kinshasa",
      ],
      houses: ["Galerie GTB-BUBO", "Galerie GTB-Beni", "Galerie GTB Bunia"],
    };
  },
};
</script>