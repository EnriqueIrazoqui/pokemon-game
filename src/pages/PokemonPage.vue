<template>

    <h1 v-if="!pokemon" >Cargando....</h1>

    <div v-else>
        <h1>¿Quien es este pokemon?</h1>
        <!--IMG-->
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>

        <!--Opciones-->
        <PokemonOptions :pokemons="pokemonArr"/>

    </div>
  
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
            showPokemon: false
        }
    },

    methods:{
       async mixPokemonArray(){
            this.pokemonArr = await getPokemonOptions();

            const rdnInt =  Math.floor(Math.random()* 4);
            this.pokemon = this.pokemonArr[rdnInt]
        }
    },
    mounted(){
        this.mixPokemonArray();
    }
}
</script>
