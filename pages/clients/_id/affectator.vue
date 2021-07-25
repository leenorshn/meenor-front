<template>
    <div class=" w-4/6 mx-auto bg-white mt-2">
        <div class="h-28 bg-blue-800 rounded-t-lg px-24 flex flex-col items-center justify-center">
            <h3 class="text-3xl text-blue-50">Choisir la maison</h3>
            <select class="text-blue-800">
                <option value="Choisir maison"></option>
                <option v-for="(bat,index) in batiments" :key="bat.id" :value="bat.id">
                   <div class="h-24">
                       {{index+1+"  "}}{{bat.name}}
                   </div>
                    </option>
            </select>
        </div>
        <div>

        </div>
    </div>
</template>

<script>
import gql from "graphql-tag";
export default {
    apollo:{
        batiments:{
            query:gql`query{
                batiments{
                    id
                    name
                    niveaux{
                    rooms{
                        id
                        numero
                        price
                        category
                    }
                    }
                }
            }`
        }
    }
}
</script>