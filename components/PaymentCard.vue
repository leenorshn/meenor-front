<template>
    <tr>
    
    <td class="px-3 pl-3 text-center whitespace-nowrap">
      <div class="text-sm text-gray-700">{{payment.id.substring(8,16)}}</div>
    </td>
    
    <td class="px-2 text-center whitespace-nowrap">
      <div class="text-xs text-gray-400">{{payment.amount+" $"}}</div>
    </td>
    
    <td class="px-2 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
      <span
        class="inline-flex px-3 text-xs font-semibold leading-5 text-green-800 bg-red-200 rounded-full"
      >
        <div class="text-xs font-bold text-gray-500">3</div>
      </span>
      
    </td>
    <td class="pl-3 text-center whitespace-nowrap">
      <div>
          {{$moment(payment.fromDate).format("dd-MM-YYYY")}}
          {{payment.fromDate}}
      </div>
      
    </td>
    
    <td class="px-2 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
      <span
        class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
      >
       {{$moment(payment.toDate).format("DD-MM-YYYY")}}
      </span>
    </td>
    <td
      class="flex items-center justify-center px-2 py-3 text-xs font-medium text-gray-500 whitespace-nowrap"
    >
     <h2>{{$moment(payment.createdAt).local('fr').fromNow()}}</h2> 
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
      return  Date.parse(this.payment.toDate)- Date.parse(this.payment.fromDate)
      }
    }
}
</script>