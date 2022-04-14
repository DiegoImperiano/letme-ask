import { createContext } from 'react';
import { BrowserRouter, Routes, Route, Link,} from 'react-router-dom' // necessario para fazer a trasição entre as paginas

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom';

export const TesteContext = createContext('')

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <TesteContext.Provider value='Teste'>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/news*" element={<NewRoom />} />
        </TesteContext.Provider>
      </Routes>
  </BrowserRouter>
   );
}

export default App;
