import { NavLink } from 'react-router-dom'
import { MAIN_ROUTE, INTERNET_ROUTE, FAQ_ROUTE } from '../constants'
import { useUser } from '../contexts'
import { useScroll } from '../hooks'
import { Logo, Profile } from './'
import s from './header.module.css'

export const Header = () => {
  const { isLogged, firstName } = useUser() 
  const { isPageTop } = useScroll()

  return (
    <header className={isPageTop ? s.header : `${s.header} ${s.headerSmall}`}>
      <div className={s.container}>
        <Logo isSmall={!isPageTop} />

        <nav className={s.nav}>
          <ul className={s.links}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${s.link} ${s.linkActive}` : s.link
                }
                to={MAIN_ROUTE}
              >
                Início
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${s.link} ${s.linkActive}` : s.link
                }
                to={INTERNET_ROUTE}
              >
                Planos
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${s.link} ${s.linkActive}` : s.link
                }
                to={FAQ_ROUTE}
              >
                Dúvidas
              </NavLink>
            </li>
          </ul>

          <Profile isLogged={isLogged} username={firstName} />
        </nav>
      </div>
    </header>
  )
}

//linha 9, hook useUser que foi criado no meu context user.context.jsx, para pegar o valor se o user está logado=true ou não=false
//linha 10 uso o meu hook personalizado para controlar a altura da página e verificar dentro da condicional se devo mudar o estado do meu componente header ou não, diminuindo sua altura e tirando o Vivinho do logo
//linha 13 eu tenho um ternário na className para definir qual classe aplicar no header, uma vez que preciso verificar de acordo com o valor de isPageTop, assim como na linha 15, para controle do aparecimento do Vivinho ou não
//nos meus li's, passo no to dos NavLinks o parâmetro da rota a ser navegada na url, de acordo com o que defini na contants/routes.js, a className também terá um ternário, uma vez que na vez que a screen que for selecionada, a color dela no header muda para rosa