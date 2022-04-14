import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom' // necessario para fazer a trasição entre as paginas

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom';

function App() {
  return (
   <BrowserRouter> 
    <Route path='/' component={Home}/>
    <Route path='/roons/new' component={NewRoom}/>
   </BrowserRouter>
   );
}

export default App;
