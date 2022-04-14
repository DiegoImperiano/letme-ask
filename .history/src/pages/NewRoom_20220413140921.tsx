import { useContext } from 'react'
import { Link } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'


import { Button } from '../components/Button'
import { TesteContext } from '../App'

import '../styles/auth.scss'

export function NewRoom(){
  const value = useContext(TesteContext);
  return(
    <div id='page-auth'>
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <h1>{value}</h1>
        <div className='main-content'>
          <img src={logoImg} alt="letmeask" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text"
             placeholder='Nome da sala' />
             <Button type='submit'>
               Criar sala
             </Button>
          </form> 
          <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link> </p>
        </div>
      </main>
    </div>
  )
}