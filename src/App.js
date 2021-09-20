import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';

function App() {
  return (<div className='App'>
  <header>
    <NavBar />
  </header>
  <ItemListContainer/>

  </div>
  );
}

export default App;
