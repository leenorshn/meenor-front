<template>
  <div class="w-full bg-white ">
    <div class="container flex justify-between mx-auto">

    
    <div class="flex items-center justify-center pl-4 h-14">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-8 h-8 text-blue-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
        />
      </svg>
      <h3 class="px-3 text-xl font-bold text-blue-800">{{company?company:''}}</h3>
    </div>
    <div class="flex items-center">
      <nuxt-link
        v-for="(menu, i) in menus"
        :key="i"
        :to="menu.route"
        
        :class="`text-sm hover:text-blue-700 text-gray-500 font-medium tracking-wide hover:bg-blue-50 px-3 py-1 rounded-md mx-1 ${
          id === menu.id ? 'text-blue-700' : ''
        }`"
        ><span @click="id=menu.id">
          {{ menu.menu }}
          </span></nuxt-link
      >
    </div>
    <div class="flex items-start pt-2 pr-4 space-x-2">
      <div class="w-10 h-10 bg-blue-300 rounded-full"></div>
      <div class="">
        <button @click.prevent="onLogout()" class="px-8 py-2 bg-blue-900 rounded text-blue-50">
          logout
        </button>
      </div>
    </div>
    </div>
  </div>
</template>
<script>

export default {
  props:{
    company:String
  },
  data() {
    return {
      menus: [
        {
          menu: "Dashbord",
          route: "/dashbord",
          id: "dashbord",
        },
        {
          menu: "Maisons",
          route: "/maison",
          id: "maison",
        },
        {
          menu: "Paiement",
          route: "/comptabilite/general",
          id: "compte",
        },
        {
          menu: "Clients",
          route: "/clients",
          id: "client",
        },
        {
          menu: "Parametre",
          route: "/settings/general",
          id: "settings",
        },
      ],
      id: "dashbord",
    };
  },
  methods:{
    async onLogout () {
      await this.$apolloHelpers.onLogout();
      this.$router.push('/login');
    },
  }
};
</script>