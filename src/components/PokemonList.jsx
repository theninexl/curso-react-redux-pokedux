import { PokemonCard } from "./PokemonCard";
import './PokemonList.css';

export const PokemonList = ({ pokemons }) => {

  return (
    <div className='PokemonList'>
      {pokemons.map((pokemon) => {
        const pokeAbilities = [];
        pokemon.abilities.map(ability => {
          pokeAbilities.push(ability.ability.name);
        })
        return (
        <PokemonCard 
          id={pokemon.id}
          name={pokemon.name} 
          key={pokemon.id}
          image={pokemon.sprites.front_default}
          abilities={pokeAbilities}
          favorite={pokemon.favorite} />
        );
      })}
    </div>
  );
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''), // ['',''...]
}