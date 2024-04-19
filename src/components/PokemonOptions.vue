<template>
  <div class="options-container">
    <ul>
      <li v-for="pokemon in pokemons" 
          :key="pokemon.id"
          @click="$emit('selectionPokemon', pokemon.id)">
          {{pokemon.name}}
      </li>
    </ul>
    
  </div>
  </template>
  
  <script>
  export default {
    props:{
      pokemons: {
        type: Array,
        required : true
      }
    },
    methods:{
      hola(){
        //this.$emit()
      }
    }
  
  }
  </script>
  
  <style scoped>
  /* Pokemon Options */
ul {
    list-style-type: none;
    padding-bottom: 105px;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
    color: black;
}

li:hover {
    background-color: rgb(255,0,0);
}

.options-container {
    display: flex;
    justify-content: center;
}
  
  </style>