import s from './why-us-card.module.css'

export const WhyUsCard = ({ image, title, description }) => {
  return (
    <li className={s.whyUsCard}>
      <img className={s.image} src={image} alt='' />

      <h3 className={s.title}>{title}</h3>

      <p className={s.description}>{description}</p>
    </li>
  )
}


