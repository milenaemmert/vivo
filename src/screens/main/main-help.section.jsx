import help from '../../assets/images/help.png'
import { arrow } from '../../assets/icons'
import { PROFILE_ROUTE } from '../../constants'
import { useUser } from '../../contexts'
import { NavLink } from 'react-router-dom'
import s from './main-help.module.css'

export const MainHelpSection = () => {
  const { isLogged, firstName } = useUser()

  if (!isLogged) return

  return (
    <section className={s.mainHelpSection}>
      <div className={s.container}>
        <div className={s.card}>
          <img className={s.image} src={help} alt='' />

          <div className={s.content}>
            <h3 className={s.title}>
              {firstName}, precisando de ajuda com algum dos serviços?
            </h3>

            <p className={s.description}>
              Selecione a opção “Falar com um atendente” no menu da página do
              seu perfil.
            </p>
          </div>

          <NavLink className={s.link} to={PROFILE_ROUTE}>
            Meu perfil
            {arrow(s.icon)}
          </NavLink>
        </div>
      </div>
    </section>
  )
}
