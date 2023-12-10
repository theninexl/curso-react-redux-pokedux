import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Spin } from 'antd';
import { Searcher } from './components/Searcher';
import { PokemonList } from './components/PokemonList';
import logo from './statics/logo.svg';
import { getPokemon } from './api';
import { getPokemonsWithDetails, setLoading } from './actions';
import './App.css';



function App() {  
  //esta forma de acceder al estado hay que actualizarla a los metodos de inmmutable.js. De igual manera que ahora necesitamos acceder a traves del metodo get de immutable porque el estado ya no se guarda como un objeto plano, utilizaremos el metodo toJS al final para volver a convertirlo a ese objeto plano, porque en el resto de componentes accediamos a los values como si fuera ese objeto plano y sería muy largo volver a poner state.get en todos ellos.
  // const pokemons = useSelector(state => state.pokemons);
  const pokemons = useSelector(state => state.get('pokemons')).toJS();
  // const loading = useSelector(state => state.loading);
  const loading = useSelector(state => state.get('loading'));
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
    };

    fetchPokemons();
  },[])



  return (
    <>
      <div className='App'>
        <Col span={4} offset={10}>
          <img src={logo} alt='Pokedux' />
        </Col>
        <Col span={8} offset={8}>
          <Searcher />
        </Col>
        {loading ? 
          <Col offset={12}>
            <Spin spinning size='large' />
          </Col>
          : 
          <PokemonList pokemons={pokemons} />
          }
      </div>
    </>
  )
}



export default App;
