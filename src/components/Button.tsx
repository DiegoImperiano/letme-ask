import { ButtonHTMLAttributes } from 'react' // importando atributos de um botão html para usar no react

import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> // criando tipo que contem todos os atributos dos botões no html
export function Button(props: ButtonProps){ // componente de botão padrao que recebe as propriedades de um botão html

  return (
    <button className="button" {...props}/>  // {...props} necessario para utilizar as propriedades que forem acrescentadas nos das paginas
      
  )
}