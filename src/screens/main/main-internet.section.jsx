import { PLANS } from '../../constants'
import { SectionTitle, InternetCard } from '../../components'
import s from './main-internet.module.css'

export const MainInternetSection = () => {
  return (
    <section className={s.mainInternetSection}>
      <div className={s.container}>
        <SectionTitle isCentered>Conheça nossos planos!</SectionTitle>

        <ul className={s.cards}>
          {PLANS.map((plan) => (
            <InternetCard
              key={plan.title}
              title={plan.title}
              price={plan.price}
              details={plan.details}
              offer={plan.offer}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
