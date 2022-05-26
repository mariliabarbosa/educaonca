import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../../utils/auth"

import { Container, AreaLogin } from "./style"

export const Login = () => {
  const [user, setUser] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirecionarPath = location.state?.path || '/profile'

  const handleLogin = () => {
    auth.login(user)
    navigate(redirecionarPath, {replace: true})
  }
  return (
    <Container>
        <h1>
        EducaOnça
        </h1>
        <AreaLogin>
          <label>
            Usuário <input
              onChange={e => setUser(e.target.value)}
              />
          </label>
          <label>
            Senha
          <input
            className="Login-input"
            type="password"
            name="Login-senha"
            />
          </label>
            <button  onClick={handleLogin}
              form="Login-form"
              className="Login-submit"
              type="submit"
              >
              Entrar
            </button>
        </AreaLogin>
    </Container>
  );
}