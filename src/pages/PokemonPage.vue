<template>

    <header >
        <h1 v-if="!pokemon" >Cargando....</h1>

    <div v-else>
        <h1>¿Quien es ese pokemon?</h1>
        <!--IMG-->
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>

        <!--Opciones-->
        <PokemonOptions :pokemons="pokemonArr"
                @selectionPokemon="checkAnswer"
        />

        <template v-if="showAnswer">
        <h2 class="fade-in">{{ message }}</h2>
        <button @click="newGame">
            Nuevo juego
        </button>
        </template>

    </div>
        
    </header>
    
  
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";

//console.log(getPokemonOptions());


export default {
    components:{PokemonOptions,PokemonPicture},
    data(){
        return{
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ""
        }
    },

    methods:{
       async mixPokemonArray(){
            this.pokemonArr = await getPokemonOptions();

            const rdnInt =  Math.floor(Math.random()* 4);
            this.pokemon = this.pokemonArr[rdnInt];
        },
        checkAnswer(pokemonId){
            this.showPokemon =true;
            this.showAnswer = true;

            if(pokemonId === this.pokemon.id){
                this.message = `Correcto, es ${this.pokemon.name}`
            }else{
                this.message = `Mmmmm, era ${this.pokemon.name}`
            }
            
        },
        newGame(){
            this.showPokemon = false;
            this.showAnswer = false;
            this.pokemonArr = [];
            this.pokemon = null;
            this.mixPokemonArray();
        }
    },
    mounted(){
        this.mixPokemonArray();
    }
}
</script>
<style scoped>
/* Pokemon Options */
button{
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
  color: black;
}

button:hover {
  background-color: rgb(255,0,0);
}


</style>
