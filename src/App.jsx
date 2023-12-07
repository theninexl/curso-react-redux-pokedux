import { Col } from 'antd';
import { Searcher } from './components/Searcher';
import { PokemonList } from './components/PokemonList';
import './App.css';

function App() {

  return (
    <>
      <div className='App'>
        <Col span={8} offset={8}>
          <h1>Pokedux</h1>
          <Searcher />
        </Col>
        <PokemonList />
      </div>
    </>
  )
}

export default App
