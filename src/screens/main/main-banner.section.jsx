import womanWithPhone from '../../assets/images/woman-with-phone.png'
import s from './main-banner.module.css'

export const MainBannerSection = () => {
  return (
    <section className={s.mainBannerSection}>
      <div className={s.container}>
        <h1 className={s.content}>
          A <span className={s.highlight}>MELHOR</span> internet, pelo{' '}
          <span className={s.highlight}>MENOR</span> preço.
        </h1>

        <img className={s.image} src={womanWithPhone} alt='' />
      </div>
    </section>
  )
}
