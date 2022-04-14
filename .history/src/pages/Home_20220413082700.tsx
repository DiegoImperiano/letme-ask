import ilustrationImg from '../assets/images/ilustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

export function Home(){
  return(
    <div>
      <aside>
        <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
    <strong>Crie salas de Q&anmp;A ao-vivo</strong>
    <p>Tire dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div>
          <img src={googleIconImg} alt="" />
          <button>Crie sua sala com o Google</button>  
        </div>
      </main>
    </div>
  )
}