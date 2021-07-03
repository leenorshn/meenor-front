<template>
    <div>
        <div class="py-3 px-6 bg-blue-800 rounded-t-md shadow flex justify-between">
            <div class="flex items-center space-x-4 text-blue-50">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
                <h3 class="text-blue-50 font-semibold tracking-wide text-lg">Utilisateurs</h3>
            </div>
            <nuxt-link to="/settings/users/newUser" class="text-white px-6 py-1 bg-blue-500 rounded-md">Nouveau</nuxt-link>
        </div>
        <div>
           <div class="overflow-hidden border-b border-gray-200 sm:rounded-b-lg">
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
                      User
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
                      Phone
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
                      Role
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
                  <user-item
                    v-for="(n, i) in users"
                    :client="n"
                    :key="i"
                  />
                </tbody>
              </table>
            </div>
        </div>

    </div>
</template>

<script>
import UserItem from '../../../components/UserItem.vue'
import { mapActions } from "vuex";
export default {
  components: { UserItem },
    data(){
        return{
            
        }
    },
    computed:{
    users(){
      return this.$store.state.company.company.users;
    }
  },
  methods:{
    ...mapActions({getCompany:"company/getCompany"})
  },
  mounted(){
    this.getCompany()
  }
}
</script>