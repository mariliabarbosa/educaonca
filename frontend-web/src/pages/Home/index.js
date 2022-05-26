import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";

import { Conteudo } from "./style";
const Home = () => {
  const auth = useAuth();

  return (
    <>
      <Conteudo>
      <h1>Um passo para o futuro</h1>
        <p>O nosso objetivo com o <strong>EducaOnça</strong> é trazer mais opções para alunos e professores
        com limitado acesso tecnológico. Uma nova maneira de armazenar e acessar materiais digitais para aulas.</p>

        {
          !auth.user && (
            <Link to={'login'}> Logar </Link>)
        }
      </Conteudo>
    </>
  )
}

export default Home;