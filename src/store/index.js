import { createStore } from 'vuex'

export default createStore({
  state: {
    favorites : [],
    text : "whatever"
  },
  mutations: {
    setFavorites(state,payload){
         
      state.favorites.unshift(payload)
    },
    deleteEntry(state,timestamp){
      console.log("mutatung",timestamp) 
      const newState= state.favorites.filter(entry => entry.timestamp !== timestamp)
      state.favorites = newState
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    getFavorites(state){
      return state.favorites
    }
  }
})
