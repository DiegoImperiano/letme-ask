import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

export function Home(){
  return(
    <div>
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
    <strong>Crie salas de Q&anmp;A ao-vivo</strong>
    <p>Tire dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div>
          <img src={logoImg} alt="letmeask" />
          <button>
          <img src={googleIconImg} alt="" />
            Crie sua sala com o Google</button> 
          <div>Ou entre em uma sala</div>
          <form>
            <input type="text"
             placeholder='Digite o código da sala' />
             <button type='submit'>
               Entrar na sala
             </button>
          </form> 
        </div>
      </main>
    </div>
  )
}