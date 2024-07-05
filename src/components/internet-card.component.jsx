import { INTERNET_ROUTE } from '../constants'
import { Button } from './'
import s from './internet-card.module.css'

export const InternetCard = ({ title, price, details, offer }) => {
  const renderOffer = () => {
    if (!offer) return

    return <span className={s.offer}>{offer}</span>
  }

  return (
    <li className={s.internetCard}>
      {renderOffer()}

      <div className={s.heading}>
        <h3 className={s.title}>{title}</h3>

        <p className={s.price}>{price}</p>
      </div>

      <Button to={INTERNET_ROUTE}>Consultar</Button>

      <ul className={s.details}>
        {details.map((detail) => (
          <li key={detail} className={s.detail}>
            {detail}
          </li>
        ))}
      </ul>
    </li>
  )
}

//na linha 6, eu controlo se meu componente recebe o parâmetro de oferta, e caso sim, ele exibirá a mensagem no quadrado roxo acima do card do plano com a devida className, então, dentro do li, a primeira coisa que faço é executar a função para verificar se o span será renderizado ou não
//na linha 25, eu utilizo o map em details para renderizar todos os componentes que vem dessa minha lista, e é sempre importante a gente passar uma key no map, que servirá como um identificador daquele elemento