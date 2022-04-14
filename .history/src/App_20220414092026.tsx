import { createContext, useState } from 'react'; // necessario para pegar as informações de login para que o usuario só possa acessar a pagina se estiver logado
import { BrowserRouter, Routes, Route, Link,} from 'react-router-dom' // necessario para fazer a trasição entre as paginas

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom';

export const AuthContext = createContext({} as any)

function App() {
const [value, setValue] = useState()

  return (
    <BrowserRouter>
    <AuthContext.Provider value={{value, setValue}}>
      <Routes>
        
          <Route path="/" element={<Home />} /> {/* passando a rota a pagina equivalente */}
          <Route path="/rooms/news*" element={<NewRoom />} />
       
      </Routes>
      </AuthContext.Provider>
  </BrowserRouter>
   );
}

export default App;
