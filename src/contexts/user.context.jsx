import { createContext, useContext, useState, useEffect } from 'react'

export const useUser = () => useContext(UserContext)

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    setUser({
      isLogged: false,
      firstName: 'Milena',
      lastName: 'Emmert',
      age: 28
    })
  }, [])

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

// esse é meu context UserProvider que vai facilitar eu gerenciar dados de um componente que está muito acima de outro que vai receber esses dados
//no caso, quem irá receber esses dados será todos os componentes que usam os dados do perfil, como a profile.screen.jsx, o app.jsx...