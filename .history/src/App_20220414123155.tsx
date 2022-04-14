import { createContext, useState, useEffect } from 'react'; // necessario para pegar as informações de login para que o usuario só possa acessar a pagina se estiver logado
import { BrowserRouter, Routes, Route, Link,} from 'react-router-dom' // necessario para fazer a trasição entre as paginas

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom';

import {auth, firebase} from './services/firebase';

import { AuthContextProvider} from './contexts/AuthContext'



function App() {

  return (
    <BrowserRouter>
    
      <Routes>
          <Route path="/" element={<Home />} /> {/* passando a rota a pagina equivalente */}
          <Route path="/rooms/news/*" element={<NewRoom />} />
      </Routes>
  </BrowserRouter>
   );
}

export default App;
