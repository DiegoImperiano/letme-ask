import { FormEvent, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import logoImg from '../assets/images/logo.svg'
import deleteImg from '../assets/images/delete.svg'
import checkImg from '../assets/images/check.svg'
import answerImg  from '../assets/images/answer.svg'

import { database } from '../services/firebase'
import { Button } from '../components/Button'
import { Questions } from '../components/Questions'
import { RoomCode } from '../components/RoomCode'
//import { useAuth } from '../hooks/useAuth'
import { useRoom } from '../hooks/useRoom'

import '../styles/room.scss'

type RoomParams = {
  id: string
}

export function AdminRoom(){
  const params = useParams<RoomParams>()
  //const {user} =useAuth()
  const history = useNavigate()
  const roomId = params.id

  const {title, questions} = useRoom(roomId as string)

  async function handleEndRoom(){
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date()
    })

    history('/')
  }

  async function handleDeleteQuestion(questionId: string){

    if(window.confirm('Tem certeza que deseja remover essa pergunta?')){
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }

  }

  async function handleCheckQuestionAsAnsered(questionId: string){
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true
    })
  }

  async function handleHighLightQuestion(questionId: string){
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighLighted: true
    })
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
          <RoomCode code={roomId as string}  />
          <Button 
          isOutlined
          onClick={handleEndRoom}
          >Encerrar sala</Button>
          </div>
        </div>
      </header>
      <main>
        <div className='room-title'>
          <h1>sala { title }</h1>
          { questions.length > 0 && <span>{questions.length} pergunta(s)</span> }
        </div>

        <div className="question-lis">
          {questions.map(question => {

            return (
              <Questions 
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered = {question.isAnswered}
                isHighlighted = {question.isHighLighted}
              >              
              {!question.isAnswered && (   
              <>
              <button
              type='button'
              onClick={() => handleCheckQuestionAsAnsered(question.id)}
              >
                <img src={checkImg} alt="Marcar pergunta como respondida" />
              </button>
              <button
              type='button'
              onClick={() => handleHighLightQuestion(question.id)}
              >
                <img src={answerImg} alt="Dar destaque à pergunta" />
              </button>
              </>)}
              <button
              type='button'
              onClick={() => handleDeleteQuestion(question.id)}
              >
                <img src={deleteImg} alt="Remover pergunta" />
              </button>
              </Questions>
            )
          })}
        </div>
        
      </main>
    </div>
  )
}