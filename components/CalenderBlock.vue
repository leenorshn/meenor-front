<template>
    <div class="w-1/4 py-1 bg-white flex flex-col items-center rounded-lg">
      <div class="space-y-2">
        <h2 class="">Calendrier</h2>
        <v-date-picker
          v-model="date"
          mode="date"
          title-position="left"
          :min-date="new Date()"
        />
      </div>
      <div class="w-full  pt-1">
        <!-- <div class="w-full flex text-blue-50 justify-between px-4 h-12 bg-blue-800 items-center">
          <h3>flux d'Activité</h3>
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
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div> -->
        <!-- <div>
            <div 
                v-for="(activ,i) in activites"
                :key="i"
                :class="`px-2 py-1  m-1 rounded-md`"
            >
                <h2 :class="`text-sm ${activ.color} font-semibold`">{{activ.message}}</h2>
                <div class="flex items-center space-x-2 ">
                   <h4 class="text-xs text-gray-400">time:</h4> 
                    <h5 class="text-xs text-gray-400">{{activ.date}}</h5>
                </div>
            </div>
        </div> -->
      </div>
    </div>
</template>
<script>
export default {
    data() {
    return {
      date: new Date(),
      activites:[
          {
              message:"Enregistrement d'un payment",
              color:"text-indigo-500",
              date:Date.now(),
          },
          {
              message:"Impression rapports finacieux",
              date:Date.now(),
              color:"text-green-500"
          },
          {
              message:"Retrait de 200$ > compte agents",
              date:Date.now(),
              color:"text-red-500"
          },
          {
              message:"Debut du travail!",
              color:"text-indigo-500",
              date:Date.now(),
          },
      ]
    };
  },
}
</script>