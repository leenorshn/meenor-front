<template>
   <tr>
    <td class="px-6 py-4 whitespace-nowrap">{{payment.id.substring(0,6)}}</td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="inline-block p-1 text-sm text-gray-900 bg-green-100 rounded-md ">{{payment.locataire.name}}</div>
    </td>
    <td class="px-6 py-4 text-center whitespace-nowrap">{{payment.amount+" $"}}</td>
    <td
      class="px-4 py-4 text-sm text-center text-gray-500 whitespace-nowrap"
    >
      {{payment.typePayment}}
    </td>
    <td
      class="px-4 py-4 text-sm text-center text-gray-500 whitespace-nowrap"
    >
     {{payment.refBond}}
    </td>
    <td
      class="px-4 py-4 text-sm text-center text-gray-500 whitespace-nowrap"
    >
     {{payment.duree+" moi"}}
    </td>
    <td
      class="px-4 py-4 text-sm text-center text-gray-500 whitespace-nowrap"
    >
      {{$moment(Date(payment.createdAt)).format("DD-MM-YYYY") }}
    </td>
    
  </tr>
</template>

<script>
export default {
    props:{
        numero:Number,
        payment:Object,
    },
    computed:{
      diff(){
        const t1=this.$moment(this.payment.fromDate,).format("MM/DD/YYYY");
        const t2=this.$moment(this.payment.toDate,).format("MM/DD/YYYY");
          var date1 = new Date(t1);
var date2 = new Date(t2);
     
      var Difference_In_Time = date2.getTime() - date1.getTime();
  
// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24*30);
      console.log(t1 );
      return  Difference_In_Days;
      }
    }
}
</script>