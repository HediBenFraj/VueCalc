<template>
   <table>
         <thead>
           <td>Date</td>
           <td>Operation</td>
           <td>Result</td>
          <td>action</td>

         </thead>
         <tbody>
           <tr :key="entry.date" v-for="entry in resizedFavorites">
             <td >{{entry.date}}</td>
             <td>{{entry.operation}}</td>
             <td>{{entry.result}}</td>
            <td>
              <button @click="$store.commit('deleteEntry',entry.timestamp)">Delete</button>
            </td>
           </tr>
         </tbody>
       </table>
</template>

<script>
 import { useStore} from 'vuex'
export default {
   
    props : {
        sizeLimit : Number
    },
    setup(props) {
        const store = useStore()
        const size = Number(props.sizeLimit)
        let resizedFavorites 
        if(props.sizeLimit && store.state.favorites.length > size)resizedFavorites = store.state.favorites.slice(1,size+1) 
        else resizedFavorites = store.state.favorites
        console.log("resized ",resizedFavorites)
        return{
            resizedFavorites
        }
    },
    updated : () => {
       const store = useStore()
        const size = Number(props.sizeLimit)
        let resizedFavorites 
        if(props.sizeLimit && store.state.favorites.length > size)resizedFavorites = store.state.favorites.slice(1,size+1) 
        else resizedFavorites = store.state.favorites
        console.log("resized ",resizedFavorites)
        return{
            resizedFavorites
        }
    }
}
</script>

<style>

</style>