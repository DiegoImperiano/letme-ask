import ilustrationImg from '../assets/images/ilustration.svg'

export function Home(){
  return(
    <div>
      <aside>
        <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
    <strong>Crie salas de Q&anmp;A ao-vivo</strong>
    <p>Tire dúvidas da sua audiência em tempo-real</p>
      </aside>
    </div>
  )
}