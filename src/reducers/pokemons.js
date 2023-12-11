import { fromJS } from "immutable";
import { SET_FAVORITE, SET_POKEMONS } from "../actions/types";

//el initial state ahora ya no es un objeto plano de javascript sino que llama al método fromJS de Inmmutable.js para crear ese objeto immutable
const initialState = fromJS({
  pokemons: [],
});

export const pokemonsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_POKEMONS: 
      // return {
      //   ...state,
      //   pokemons: action.payload
      // }
      //la forma de acceder al estado para colocar lo que recibimos en el payload ahora es a través de los métodos de Immutable.js, setIn y fromJS
      return state.setIn(['pokemons'], fromJS(action.payload));
    case SET_FAVORITE:
      // esta spreadOperator lo poníamos para asegurar la inmutabilidad pero ahora ya no es necesario al utilizar immutable.js
      // const newPokemonList = [...state.pokemons];
      
      //esta forma de acceder al current index del pokemon seleccionado hay que cambiarla para que utilice los metodos de immutable.js
      // const currentPokemonIndex = newPokemonList.findIndex(
      //   (pokemon) => {
      //     return pokemon.id === action.payload.pokemonId
      //   });
      const currentPokemonIndex = state.get('pokemons').findIndex((pokemon) => {
        return pokemon.get('id') === action.payload.pokemonId;
      });
      //este se queda igual
      if (currentPokemonIndex < 0) {
        return state;
      }
      //este hay que cambiarlo también
      // newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;
      const isFavorite = state.getIn(['pokemons', currentPokemonIndex, 'favorite']);
      
      // return { ...state, pokemons: newPokemonList}
      return state.setIn(['pokemons',currentPokemonIndex,'favorite'],!isFavorite);
    default: 
      return state;
  }
};