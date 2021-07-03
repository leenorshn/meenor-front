<template>
    <tr>
    
    <td class="pl-3 text-center px-3  whitespace-nowrap">
      <div class="text-sm text-gray-700">{{payment.id}}</div>
    </td>
    
    <td class="px-2  whitespace-nowrap">
      <div class="text-xs text-gray-400">{{payment.amount+" $"}}</div>
    </td>
    
    <td class="px-2 text-center py-4 whitespace-nowrap text-sm text-gray-500">
      <span
        class="px-3  inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-green-800"
      >
        <div class="text-xs text-gray-500 font-bold">3</div>
      </span>
      
    </td>
    <td class="pl-3  text-center whitespace-nowrap">
      <div>
          {{$moment(payment.fromDate).format("DD-MM-YYYY")}}
      </div>
      
    </td>
    
    <td class="px-2 text-center py-4 whitespace-nowrap text-sm text-gray-500">
      <span
        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
      >
       {{$moment(payment.toDate).format("DD-MM-YYYY")}}
      </span>
    </td>
    <td
      class="px-2 py-3 text-xs text-gray-500 whitespace-nowrap flex items-center justify-center font-medium"
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