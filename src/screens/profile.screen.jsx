import { useUser } from '../contexts'
import s from './profile.module.css'

export const ProfileScreen = () => {
  const { isLogged, firstName, lastName, age } = useUser()

  return (
    <main className={s.profileScreen}>
      <div className={s.container}>
        <p>Situação: {isLogged ? 'Logado' : 'Deslogado'}</p>
        <p>Nome: {firstName}</p>
        <p>Sobrenome: {lastName}</p>
        <p>Idade: {age}</p>
      </div>
    </main>
  )
}

//recebe dados do context