import { Routes, Route, Navigate } from 'react-router-dom'
import {
  MAIN_ROUTE,
  INTERNET_ROUTE,
  FAQ_ROUTE,
  PROFILE_ROUTE,
  LOGIN_ROUTE
} from './constants'
import { useUser } from './contexts'
import {
  FaqScreen,
  InternetScreen,
  MainScreen,
  ProfileScreen,
  LoginScreen
} from './screens'
import { Header, Footer } from './components'

const Auth = ({ children, condition }) => {
  if (condition) {
    return children
  } else {
    return <Navigate to={MAIN_ROUTE} />
  }
}

export const App = () => {
  const { isLogged } = useUser()

  return (
    <>
      <Header />

      <Routes>
        <Route path={MAIN_ROUTE} element={<MainScreen />} />
        <Route path={INTERNET_ROUTE} element={<InternetScreen />} />
        <Route path={FAQ_ROUTE} element={<FaqScreen />} />
        <Route
          path={PROFILE_ROUTE}
          element={
            <Auth condition={isLogged}>
              <ProfileScreen />
            </Auth>
          }
        />
        <Route
          path={LOGIN_ROUTE}
          element={
            <Auth condition={!isLogged}>
              <LoginScreen />
            </Auth>
          }
        />
        <Route path='*' element={<MainScreen />} />
      </Routes>

      <Footer />
    </>
  )
}

//component Auth é para proteção de rotas, vou verificar se minha condição da linha 49 aprova para retornar o children <LoginScreen /> ou vai para o else no <Navigate to={MAIN_ROUTE} />