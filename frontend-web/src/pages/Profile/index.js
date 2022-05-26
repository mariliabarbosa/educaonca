import { useAuth } from "../../utils/auth"

import { Conteudo, Placeholder } from "./style"

export const Profile = () => {
  const auth = useAuth()

  return (
    <Conteudo>
      <div>
        <div>
          <h1>
            Olá, {auth.user}!
          </h1>
          <p>
            Detalhes do usuário.
          </p>
        </div>
        <Placeholder/>
      </div>
    </Conteudo>
  )
}