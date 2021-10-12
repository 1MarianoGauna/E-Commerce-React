import './App.css';
import * as React from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import ItemDetail from './pages/ItemDetail';
import Cart from './pages/Cart';

function App() {
  return (<div className='App'>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/product/:id' component={ItemDetail} />
        <Route exact path='/cart' component={Cart} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
