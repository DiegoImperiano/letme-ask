import { useEffect, useState } from "react"
import {database} from '../services/firebase'


type FirebaseQuestions = Record<string, {
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighLighted: boolean;
  likes: Record<string, {
    authorId: string;
  }>
}>


type QuestionType = {
  id: string
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHighLighted: boolean;
}

export function useRoom(roomId: string){
  const [questions, setQuestions] = useState<QuestionType[]>([])
  const [title, setTile] = useState('')

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`)

    roomRef.on('value', room => {
      const databaseRoom = room.val()
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value] )=> {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighLighted: value.isHighLighted,
          isAnswered: value.isAnswered,
          likeCount: Object.values(value.likes)
          
        }
      })

      setTile(databaseRoom.title)
      setQuestions(parsedQuestions)
      
    })
  }, [roomId])

  return {questions, title}
}