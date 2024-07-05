import { NavLink } from 'react-router-dom'
import { user } from '../assets/icons'
import { PROFILE_ROUTE, LOGIN_ROUTE } from '../constants'
import s from './profile.module.css'

export const Profile = ({ isLogged, username }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? `${s.link} ${s.linkActive}` : s.link
      }
      to={isLogged ? PROFILE_ROUTE : LOGIN_ROUTE}
    >
      {user(s.icon)}
      {isLogged ? `Olá, ${username}!` : 'Login'}
    </NavLink>
  )
}

//aqui eu utilizo uma rota protegida com base no controle de isLogged, uma vez que o usuário não logado não pode ter acesso a sua página de perfil. O controle dessa props virá do componente Auth que está em app.jsx