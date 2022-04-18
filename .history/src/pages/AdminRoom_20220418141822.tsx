import { FormEvent, useState } from 'react'
import { useParams } from 'react-router-dom'

import logoImg from '../assets/images/logo.svg'
import deleteImg from '../assets/images/delete.svg'

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
  const roomId = params.id

  const {title, questions} = useRoom(roomId as string)

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
          <RoomCode code={roomId as string}  />
          <Button isOutlined>Encerrar sala</Button>
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
              > 
              <button
              type='button'
              onClick={handleDeleteQuestion(question.id)}
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