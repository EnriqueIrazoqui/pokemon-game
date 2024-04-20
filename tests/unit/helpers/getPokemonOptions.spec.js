import {getPokemons} from "@/helpers/getPokemonOptions";

describe('getPokemonOptions helpers', () => {

    test('Debe de regresar un arreglo de numeros', () => {

        const pokemons = getPokemons();
        
        expect( pokemons.length).toBe(650);
        expect( pokemons[0]).toBe(1);
        expect( pokemons[500]).toBe(501);
        expect( pokemons[649]).toBe(650);
      
    })

    test('debe de retornar un arreglo de 4 elementos con nombres diferentes', () => {
      
    })

    test('getPokemonOptions debe de retornar un arreglo mesclado ', () => {
      
    })
    
    
    
  
})
