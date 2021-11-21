<template>
  <div class="border rounded-md p-8">
    <h2 class="text-4xl">VueCalc</h2>
    <div class="my-8 flex justify-between w-6/12" >
      <label for="operations">Type d'opération</label>
      <select class="px-2" v-model="operation" @change="calculate" name="" id="operations">
        <option  value="+" >Addition</option>
        <option value="-">Soustraction</option>
        <option value="*">Multiplication</option>
        <option  value="/">Division</option>
      </select>
      <button class=" bg-blue-500 text-white px-4" @click="reset">Réinitialiser</button>
    </div>
    <div class="border my-8 border-gray-400 p-4 flex items-center">
      <input class="border border-gray-400 py-1 px-4 mx-2 w-4/12" v-model="firstValue" type="text" placeholder="A = " @keyup="calculate" @change="test"> 
      <span>{{operation}}</span>
      <input class="border border-gray-400 py-1 px-4 mx-2  w-4/12" v-model="secondValue" type="text" name=""  id="" placeholder="B = " @keyup="calculate">
      <span class="mx-2">
        = 
      </span>
      <span class="mx-2" v-show="!isNaN(result)">{{result}}</span>
      <button :disabled='!firstValue && !secondValue' class=" bg-red-500 text-white px-4 py-1" @click="addToFavorite" >Ajouter aux favoris</button>
    </div>
      <div  class="my-8 flex items-center">
        <h2 class="text-3xl">Favoris</h2>
        <button class=" mx-2 py-1 px-3 bg-red-500 text-white" @click="emptyFavorites">X Vider</button>
      </div>
     <div >
       <FavoritesTable />
     </div>
    
  </div>
</template>

<script>
import { ref } from 'vue'
import {useStore} from 'vuex'
import moment from 'moment'
import FavoritesTable from '../components/FavoritesPageComponents/FavoritesTable.vue'

export default {
  components : {
    name : 'FavoritesTable',
    FavoritesTable
  },
 setup() {

  const store = useStore()
  const firstValue = ref()
  const secondValue = ref()
  const result = ref()
  const date = ''
  const operation = ref("+")



  const calculate = ( ) =>{
    switch (operation.value) {
      case "+":
        
        result.value = Number(firstValue.value)+Number(secondValue.value)
        
        break;
     case "-":
        result.value = firstValue.value-secondValue.value
        break;
         case "/":
        result.value = firstValue.value/secondValue.value
        break;
         case "*":
        result.value = firstValue.value*secondValue.value
        break;
      default:
        break;
   
    }
  }

  const addToFavorite = () =>{

 const entry = {
      timestamp : Date.now(),
      date :moment(new Date()).format("DD/MM/YYYY"),
      operation : firstValue.value+ operation.value + secondValue.value,
      result : result.value
    }
    store.commit('setFavorites',entry)
    
  }

  const reset = ( ) => {
    firstValue.value =''
    secondValue.value = ''
    operation.value = '+'
    result.value=''

  }

  const emptyFavorites = ( ) => {
    store.commit('emptyFavorites')
  }

  return{
    date,
    operation,
    firstValue,
    secondValue,
    result,
    reset,
    emptyFavorites,
    calculate,
    addToFavorite
  }
 }
}
</script>


