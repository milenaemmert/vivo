import {
  MainBannerSection,
  MainWhyUsSection,
  MainHelpSection,
  MainInternetSection,
  MainContactSection
} from './'
import s from './main.module.css'

export const MainScreen = () => {
  return (
    <main className={s.mainScreen}>
      <MainBannerSection />
      <MainWhyUsSection />
      <MainHelpSection />
      <MainInternetSection />
      <MainContactSection />
    </main>
  )
}
