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
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
      </footer>
      </p>
    </div>
  )
}