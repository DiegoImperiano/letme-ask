import { useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'


import '../styles/auth.scss'



export function Home(){
  const history = useNavigate();
  const {user, signInWithGoogle} = useAuth();
  const [rooCode, setRoomCode] = useState('')
  

  async function handleCreateRoom(){
    if(!user){
      await signInWithGoogle()
    }
      history('rooms/news')
    }

   async function handleJoinRoom(event: FormEvent) {
     event.preventDefault()
   }

  return(
    <div id='page-auth'>
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
    <strong>Crie salas de Q&amp;A ao-vivo</strong>
    <p>Tire dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className='main-content'>
          <img src={logoImg} alt="letmeask" />
          <button onClick={handleCreateRoom} className='create-room'>
            <img src={googleIconImg} alt="" />
            Crie sua sala com o Google
          </button> 
          <div className='separator'>Ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input type="text"
             placeholder='Digite o código da sala' 
             onChange={event => setRoomCode(event.target.value)}
             value={roomCode}
             />
             <Button type='submit'>
               Entrar na sala
             </Button>
          </form> 
        </div>
      </main>
    </div>
  )
}