import { NavLink } from 'react-router-dom'
import s from './button.module.css'

export const Button = ({ children, disabled = false, to, type = 'submit' }) => {
  const renderButton = () => {
    if (to) {
      return (
        <NavLink className={s.button} to={to}>
          {children}
        </NavLink>
      )
    }

    return (
      <button className={s.button} type={type} disabled={disabled}>
        {children}
      </button>
    )
  }

  return renderButton()
}

  //props um children será o texto do botão
  //props disabled será para controlar se o botão poderá ser clicado ou não, como padrão, defini false porque apenas no formulário queremos o botão disabled=true inicialmente, ele só se tornará disabled=false quando o usuário preencher todas as infos
  //props to define a rota para onde vou navegar
  //props type define meu type padrão como submit, mas no WhyUsCard eu passo como type=button

  //Na linha 6, caso eu receba um valor para a props to então eu retorno o que está dentro do if, caso contrário, retorno a partir da linha 14