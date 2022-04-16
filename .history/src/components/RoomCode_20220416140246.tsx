import { PromptProps } from 'react-router-dom'
import copyImg from '../assets/images/copy.svg'

type RoomCodeProps = {
  code: string
}

import '../styles/room-code.scss'

export function RoomCode(){
  function copyRoomCodeToClipboard(props: RoomCodeProps){
    navigator.clipboard.writeText(props.code)
  }


  return (
    <button className='room-code'>
      <div>
        <img src={ copyImg } alt="Copy room code" />
      </div>
      <span>Sala #{ props.code }</span>
    </button>
  )
}