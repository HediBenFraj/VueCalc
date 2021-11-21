<template>
  <div class="home">
    <h2 class="title">VueCalc</h2>
    <div class="operations container">
      <label for="operations">Type d'opération {{$store.state.text}}</label>
      <select v-model="operation" @change="calculate" name="" id="operations">
        <option  value="+" >Addition</option>
        <option value="-">Soustraction</option>
        <option value="*">Multiplication</option>
        <option  value="/">Division</option>
      </select>
      <button>Réinitialiser</button>
    </div>
    <div class="inputs container">
      <input v-model="firstValue" type="text" placeholder="A = " @keyup="calculate" @change="test"> 
      <span>{{operation}}</span>
      <input v-model="secondValue" type="text" name=""  id="" placeholder="B = " @keyup="calculate">
      <span>
        = <span v-show="!isNaN(result)">{{result}}</span>
      </span>
      <button @click="addToFavorite">Ajouter aux favoris</button>
    </div>
      <div class="container">
        <h2>Favoris</h2>
        <button>X Vider</button>
      </div>
     <div class="table-of-fav">
       <FavoritesTable sizeLimit="5"/>
     </div>
    
  </div>
</template>

<script>
import { ref } from 'vue'
import {useStore} from 'vuex'
import moment from 'moment'
import FavoritesTable from '../components/FavoritesTable.vue'

export default {
  components : {
    name : 'FavoritesTable',
    FavoritesTable
  },
 setup() {

   const store = useStore()

   const favOperations = [{
     date : 'zeud'

   }]
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
    console.log("here")
    const entry = {
      timestamp : Date.now(),
      date :moment(new Date()).format("DD/MM/YYYY"),
      operation : firstValue.value+ operation.value + secondValue.value,
      result : result.value
    }
    store.commit('setFavorites',entry)
    console.log('entry',store.state.favorites)
  }

  return{
    favOperations,
    date,
    operation,
    firstValue,
    secondValue,
    result,
    calculate,
    addToFavorite
  }
 }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: row;
}
</style>
