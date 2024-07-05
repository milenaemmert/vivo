import logo from '../assets/images/logo.png'
import logoSmall from '../assets/images/logo-small.png'
import s from './logo.module.css'

export const Logo = ({ isSmall }) => {
  return (
    <img
      className={isSmall ? s.logoSmall : s.logo}
      src={isSmall ? logoSmall : logo}
      alt=''
    />
  )
}

//controlo se usarei o logo small (sem o Vivinho) ou o normal (com o Vivinho), dependendo da altura em que meu scroll estiver na página. Esse controle estará associado ao meu hook useScroll e ao meu componente Header