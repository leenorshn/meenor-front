<template>
  <div class="p-4 bg-white rounded-md shadow">
    <div class="flex justify-between">
      <h2 class="text-xl font-bold text-blue-800">General</h2>
      <nuxt-link
        to="/settings/general/editor"
        class="px-5 py-2 text-white bg-blue-800 rounded-md hover:bg-blue-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      </nuxt-link>
    </div>
    <div class="space-y-8">
      <div class="flex items-center space-x-6">
        <div class="text-lg font-semibold text-black">Nomination:</div>
        <div>{{company.name}}</div>
      </div>
      <div class="flex items-center space-x-16">
        <div class="text-lg font-semibold text-black">RCCM:</div>
        <div>{{company.rccm}}</div>
      </div>
      <div class="flex items-center space-x-16">
        <div class="text-lg font-semibold text-black">Id-Nat:</div>
        <div>{{company.id_nat}}</div>
      </div>
      <div>
        <div class="text-lg font-semibold">Adresse:</div>
        <div class="text-gray-500">
         {{company.address.city}}/ {{company.address.local}}
        </div>
      </div>
      <div>
        <div class="text-lg font-semibold text-black">Contacts:</div>
        <div class="ml-4">
          <h2 class="text-lg font-semibold text-gray-700">
            Email:   <span class="ml-4 text-sm font-normal text-gray-600"></span>
          </h2>
          <h2 class="text-lg font-semibold text-gray-700">
            Phone: <span class="ml-2 text-sm font-normal text-gray-600">{{company.phone}}</span>
          </h2>
        </div>
       
      </div>
      <div>
        <div class="text-lg font-semibold text-black">Detail:</div>
        <h4 class="text-gray-500">{{company.description}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
 async asyncData({ app }) {
    let client = app.apolloProvider.defaultClient;

    const res = await client
      .query({
        query: gql`
          {
            company {
              id
              name
              description
              phone
              rccm
              id_nat
              address {
                city
                local
              }
            }
          }
        `,
      })
      .then(({ data }) => {
        //console.log(data);
        return data && data.company;
      }).catch(err=>console.log(err));

    console.log(res);

    return {
      company: res,
    };
  },
}
</script>