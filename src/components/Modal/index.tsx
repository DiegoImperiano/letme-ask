import empttImg from '../../assets/images/cancel.svg'

import { useParams } from 'react-router-dom'
import { database } from '../../services/firebase'

import { useAuth } from '../../hooks/useAuth'
import { Button } from '../Button'
import './styles.scss'

type ModalProps = {
  active: boolean
  questionId: string
  onClose: () => void
}

type RoomParams = {
  id: string
}

export function Modal(props: ModalProps) {
  const params = useParams<RoomParams>()
  const roomId = params.id

  async function hadleDeleteQuestions() {
    await database.ref(`rooms/${roomId}/questions/${props.questionId}`).remove()
    props.onClose()
  }

  return (
    <div className={`modal-overlay ${props.active ? 'active' : ''} `}>
      <div className="modal">
        <div id="form">
          <div className="info">
            <img src={empttImg} alt="tem certeza?" />
            <h2> Deletar pergunta</h2>
            <p>Tem certeza que você deseja deletar esta pergunta?</p>
          </div>
          <div>
            <div className="input-group actions">
              <Button className="button cancel" onClick={props.onClose}>
                Cancelar
              </Button>
              <Button
                className="button confirm"
                onClick={() => hadleDeleteQuestions()}
              >
                Sim, deletar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
