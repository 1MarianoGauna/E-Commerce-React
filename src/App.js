import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

function App() {
  return (<div className='App'>
  <header>
    <NavBar />
  </header>
  <ItemListContainer/>
  <ItemDetailContainer/>

  </div>
  );
}

export default App;
