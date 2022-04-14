import { createContext, useState, useEffect } from 'react'; // necessario para pegar as informações de login para que o usuario só possa acessar a pagina se estiver logado
import { BrowserRouter, Routes, Route, Link,} from 'react-router-dom' // necessario para fazer a trasição entre as paginas

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom';

import {auth, firebase} from './services/firebase';

import { AuthContextProvider } from './contexts/AuthContext'



function App() {
const [user, setUser] = useState<User>()

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(user => {
    if(user){
      const {displayName, photoURL, uid} = user

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

  return () => {
    unsubscribe();
  }
}, [])

async function signInWithGoogle(){
  const provider = new firebase.auth.GoogleAuthProvider();
  const result = await auth.signInWithPopup(provider)

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
}

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
