<template>
    <tr>
    
    <td class="px-3 pl-3 text-center whitespace-nowrap">
      <div class="text-sm text-gray-700">{{payment.id.substring(18)}}</div>
    </td>
    
    <td class="px-2 text-center whitespace-nowrap">
      <div class="text-xs text-gray-700">{{payment.amount+" $"}}</div>
    </td>
    
    
    <td class="pl-3 text-center whitespace-nowrap">
      <div>
          
          {{$moment(payment.fromDate).format("DD-MM-YYYY")}}
      </div>
      
    </td>
    
    <td class="px-2 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
      <span
        class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
      >
       {{$moment(payment.toDate).format("DD-MM-YYYY")}}
      </span>
    </td>
    <td class="px-2 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
      
      {{diff.toFixed(0)+' moi'}}
    </td>
    <td
      class="flex items-center justify-center px-2 py-3 text-xs font-medium text-gray-500 whitespace-nowrap"
    >
    
     <h2>{{$moment(Date(payment.createdAt)).format("DD-MM-YYYY")}}</h2> 
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