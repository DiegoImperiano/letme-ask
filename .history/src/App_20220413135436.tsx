import { createContext } from 'react';
import { BrowserRouter, Routes, Route, Link,} from 'react-router-dom' // necessario para fazer a trasição entre as paginas

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/news*" element={<NewRoom />} />
      </Routes>
  </BrowserRouter>
   );
}

export default App;
