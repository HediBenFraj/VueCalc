<template>
   <table class="border border-gray-500 w-9/12">
         <thead>
           <td class="border w-1/4 text-center">Date</td>
           <td class="border w-1/4 text-center">Operation</td>
           <td class="border w-1/4 text-center">Result</td>
           <td class="border w-1/4 text-center">action</td>

         </thead>
         <tbody>
           <tr :key="entry.date" v-for="entry in $store.state.favorites">
             <td class="border w-1/4 text-center">{{entry.date}}</td>
             <td class="border w-1/4 text-center">{{entry.operation}}</td>
             <td class="border w-1/4 text-center">{{entry.result}}</td>
            <td class="border w-1/4 text-center">
              <button class=" text-red-600 hover:text-red-400" @click="$store.commit('deleteEntry',entry.timestamp)">Delete</button>
            </td>
           </tr>
         </tbody>
       </table>
</template>

<script>
//  import { useStore} from 'vuex'
export default {
}
</script>

