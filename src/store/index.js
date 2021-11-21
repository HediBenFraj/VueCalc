import { createStore } from 'vuex'

export default createStore({
  state: {
    favorites : [],
  },
  mutations: {
    setFavorites(state,payload){
         
      state.favorites.unshift(payload)
    },
    deleteEntry(state,timestamp){
      const newState= state.favorites.filter(entry => entry.timestamp !== timestamp)
      state.favorites = newState
    },
    emptyFavorites(state){
      state.favorites=[]
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
