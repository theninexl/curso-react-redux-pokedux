import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Col, Spin } from 'antd';
import { Searcher } from './components/Searcher';
import { PokemonList } from './components/PokemonList';
import logo from './statics/logo.svg';
import { getPokemon } from './api';
import { getPokemonsWithDetails, setLoading } from './actions';
import './App.css';



function App() {  
  //esta forma de acceder al estado hay que actualizarla a los metodos de inmmutable.js. De igual manera que ahora necesitamos acceder a traves del metodo get de immutable porque el estado ya no se guarda como un objeto plano, utilizaremos el metodo toJS al final para volver a convertirlo a ese objeto plano, porque en el resto de componentes accediamos a los values como si fuera ese objeto plano y sería muy largo volver a poner state.get en todos ellos.
  //al crear los reducers combinados en rootReducer hemos creado dos niveles distintos adicionales para nuestro estado, data y ui, que habrá que acceder utilizando getIn para evitar encadenar varias peticiones simples de state.get
  //shallowEquals es para que Redux se fije en el contenido del objeto pokemons y no solo en el propio objeto al hacer la comparación con useSelectors, porque al usar inmutabilidad daría siempre que el objeto nuevo creado sería siempre false en la comparación aunque no cambien los valores internos. Con shallowEquall fuerzas a que Redux se fije también en los valores internos.
  // const pokemons = useSelector(state => state.pokemons);
  const pokemons = useSelector(state => state.getIn(['data','pokemons'], shallowEqual)).toJS();
  //shallowEquals no es necesario en la comparación del objeto loading porque es un boolean solo true o false, no contiene objetos dentro
  // const loading = useSelector(state => state.loading);
  const loading = useSelector(state => state.getIn(['ui','loading']));
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
