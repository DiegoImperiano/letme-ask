type QuestionProps = {
  content: string
  author: {
    name: string
    avatar: string
  }
}
export function Questions({content, author}: QuestionProps){
  return(
    <div className="question">
      <p>
      {content}
      </p>
    </div>
  )
}