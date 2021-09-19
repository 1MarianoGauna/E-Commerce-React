import './App.css';
import NavBar from './components/NavBar/NavBar';
import Card from './components/Card/Card';
import ItemListContainer from './components/ItemList/ItemListContainer';

function App() {
  const comprar = (product) =>{
    console.log(`Compraste el producto numero ${product}`)
  }
  return (<div className='App'>
  <header>
    <NavBar />
  </header>
  <ItemListContainer/>
  <section className='myCards'>
    <Card title='Esto es un producto 1' src='./images/imagen1.jpg' description='Esta es la descripción 1' comprando={comprar}/>
    <Card title='Esto es un producto 2' src='./images/imagen1.jpg' description='Esta es la descripción 2' comprando={comprar}/>
    <Card title='Esto es un producto 3' src='./images/imagen1.jpg' description='Esta es la descripción 3' comprando={comprar}/>
  </section>
  </div>



  );
}

export default App;
