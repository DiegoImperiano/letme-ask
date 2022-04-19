import { ButtonHTMLAttributes } from 'react' // importando atributos de um botão html para usar no react

import './styles.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined ?: boolean
} // criando tipo que contem todos os atributos dos botões no html
export function Button({isOutlined  = false ,...props }: ButtonProps){ // componente de botão padrao que recebe as propriedades de um botão html

  return (
    <button className={`button ${isOutlined ? 'outlined' : ''}`} {...props}/>  // {...props} necessario para utilizar as propriedades que forem acrescentadas nos das paginas
      
  )
}