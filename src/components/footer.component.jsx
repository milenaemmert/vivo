import womanWithMap from '../assets/images/woman-with-map.png'
import s from './footer.module.css'

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.infoWrapper}>
        <div className={s.infoContainer}>
          <img className={s.image} src={womanWithMap} alt='' />

          <p className={s.info}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className={s.copyrightWrapper}>
        <div className={s.copyrightContainer}>
          <p className={s.copyright}>Copyright © 2024</p>
        </div>
      </div>
    </footer>
  )
}
