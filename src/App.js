import './App.css';
import * as React from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import ItemDetail from './pages/ItemDetail';
import Cart from './pages/Cart';
import Productos from './pages/Productos'
import NavFooter from './components/Footer/NavFooter';
import Contacto from './pages/Contacto';
import MyOrder from './pages/MyOrder';
function App() {
  return (<div className='App'>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/productos' component={Productos}/>
        <Route exact path='/product/:id' component={ItemDetail} />
        <Route exact path='/contacto' component={Contacto}/>
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/myorder' component={MyOrder}/>
        <Route path="*" component={NotFound} />
      </Switch>
      <NavFooter/>
    </BrowserRouter>
  </div>
  );
}

export default App;
