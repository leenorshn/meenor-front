<template>
  <div class="flex max-w-6xl px-2 pt-4 pb-8 mx-auto">
    <div class="w-3/4 pr-4">
      <div class="flex space-x-4">
        <div class="w-1/4 bg-white rounded-md h-72" v-if="!hide">
          <circle-chart :data="chartDataCircle" :options="circleChartOptions" />
        </div>
        <div class="w-3/4 bg-white rounded-md h-72" v-if="!hide">
          <my-line

            v-if="showLine"
            :data="barChartData"
            :options="barChartOptions"
            class="h-72"
          />
        </div>
      </div>
      <div class="grid grid-cols-3 py-4 gap-x-3">
        <div
          class="relative flex items-center justify-center bg-blue-800 rounded-md h-28"
        >
          <h3 class="absolute text-sm text-gray-100 right-2 top-1">
            Solde actuel
          </h3>
          <h3 class="text-3xl text-white">
            {{company.balance}} <span class="text-lg">$</span>
          </h3>
        </div>
        <div
          class="relative flex items-center justify-center bg-red-500 rounded-md h-28"
        >
          <h3 class="absolute text-sm text-gray-100 right-2 top-1">
            Sortie (hebdo.)
          </h3>
          <h3 class="text-3xl text-white">
            {{company.sortie}} <span class="text-lg">$</span>
          </h3>
        </div>
        <div
          class="relative flex items-center justify-center bg-green-500 rounded-md h-28"
        >
          <h3 class="absolute text-sm text-gray-100 right-2 top-1">
            Prevision (ans)
          </h3>
          <h3 class="text-3xl text-white">
            0 <span class="text-lg">$</span>
          </h3>
        </div>
      </div>
      <h3 class="mb-1 text-lg text-blue-600">Dernier paiements</h3>
      <div class="w-full rounded-md h-96">
        <div>
          <div class="flex flex-col">


            
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="overflow-hidden border-b border-gray-200">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-100">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  
                 id
                </th>
                <th
                  scope="col"
                  class="px-6 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  client
                </th>
                <th
                  scope="col"
                  class="px-6 py-2 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                >
                  Montant( $ )
                </th>
                <th
                  scope="col"
                  class="px-6 py-2 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                >
                  Type
                </th>
                 <th
                  scope="col"
                  class="px-6 py-2 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                >
                  Bon (ref)
                </th>
                <th
                  scope="col"
                  class="px-6 py-2 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                >
                  Duree
                </th>
                <th
                  scope="col"
                  class="px-6 py-2 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                >
                  Date
                </th>
                
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <payment-card v-for="(n, i) in payments" :payment="n" :key="i" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
          </div>
          <div class="flex justify-end w-full">
            <nuxt-link
              class="inline w-16 my-2 text-sm text-blue-600 border-b-2 border-transparent hover:border-blue-500"
              to="/"
              >Voir plus</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <!-- right-side  -->
    <calender-block />
  </div>
</template>

<script>
import CalenderBlock from "../../components/CalenderBlock.vue";
import { GET_PAYMENTS } from "~/apollo/payment_gql.js";
import PaymentCard from "../../components/PaymentCard.vue";
import gql from "graphql-tag";

export default {
  components: { CalenderBlock },
  middleware: "isAuth",
   async asyncData({ app, params }) {
    const res = await app.apolloProvider.defaultClient
      .query({
        query: GET_PAYMENTS,
        variables: {
          id: params.id,
        },
      })
      .then(({ data }) => {
        return data && data.payments;
      });

      //redirect(`/maison/${res.id}/room`)
      const resCompany= await app.apolloProvider.defaultClient.query({
        query:gql`query{
  company{
    balance
    sortie
  }
}`
      }).then(({ data }) => {
        return data && data.company;
      });

    return {
      payments: res,
      company:resCompany
    };
  },

  data() {
    return {
      hide:true,
      showLine: false,
      chartDataCircle: {
        labels: ["Entre", "Prevision", "Sortie"],
        datasets: [
          {
            label: "Solde",
            data: [190, 455, 150],
            backgroundColor: Object.values(["#21CE99", "#1E40AF", "#EF4444"]),
          },
        ],
      },
      chartData: {
        datasets: [
          {
            label: "Title",
            data: [45, 55, 48, 35, 12],
          },
        ],
      },
      barChartData: {
        labels: [
          "2019-06",
          "2019-07",
          "2019-08",
          "2019-09",
          "2019-10",
          "2019-11",
          "2019-12",
          "2020-01",
          "2020-02",
          "2020-03",
          "2020-04",
          "2020-05",
        ],
        datasets: [
          // {
          //   label: 'Balance',
          //   data: [45, 65, 30, 53, 34, 35, 26, 37, 34, 45, 67, 28, 18],
          //   backgroundColor: '#21ce99'
          // },
          {
            label: "Entré",
            data: [15, 25, 30, 50, 40, 5, 50, 13, 34, 45, 17, 28, 98],
            backgroundColor: "#EF4444",
          },
          // {
          //   label: 'Sortie',
          //   data: [45, 65, 30, 59, 35, 35, 56, 37, 34, 45, 67, 28, 18],
          //   backgroundColor: '#1E40AF65'
          // }
        ],
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Mouvement Balance",
          fontSize: 14,
          fontColor: "#6b7280",
        },
        tooltips: {
          backgroundColor: "#17BF62",
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
            },
          ],
        },
      },
      circleChartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Etant de compte",
          fontSize: 14,
          fontColor: "#6b7280",
        },
        tooltips: {
          backgroundColor: "#17BF62",
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    };
  },
  mounted() {
    this.showLine = true;
    // showLine will only be set to true on the client. This keeps the DOM-tree in sync.
  },
  methods: {},
};
</script>

