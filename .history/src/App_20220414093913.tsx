import { createContext, useState } from 'react'; // necessario para pegar as informações de login para que o usuario só possa acessar a pagina se estiver logado
import { BrowserRouter, Routes, Route, Link,} from 'react-router-dom' // necessario para fazer a trasição entre as paginas

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom';

import {auth, firebase} from './services/firebase';

type User = {
  id: string,
  name: string,
  avatar: string,
}

type AuthContextType = {
  user: User | undefined,
  signInWithGoogle: () => void;
}

export const AuthContext = createContext({} as AuthContextType)

function App() {
const [user, setUser] = useState<User>()

function singInWithGoogle(){
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider).then(result => {
    if(result.user){
      const {displayName, photoURL, uid} = result.user
      if(!displayName || !photoURL){
        throw new Error("Missing information from Google Account.")
      }
      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  })
}

  return (
    <BrowserRouter>
    <AuthContext.Provider value={{user, singInWithGoogle}}>
      <Routes>
        
          <Route path="/" element={<Home />} /> {/* passando a rota a pagina equivalente */}
          <Route path="/rooms/news*" element={<NewRoom />} />
       
      </Routes>
      </AuthContext.Provider>
  </BrowserRouter>
   );
}

export default App;
