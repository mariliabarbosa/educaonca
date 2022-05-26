import { Link, Outlet } from "react-router-dom";

import { Conteudo, SeletorTurma } from './style';

export const Turmas = () => {
  return (
    <div>
      <Conteudo>
        <SeletorTurma>
          <a href="javascript:void(0)" class="dropbtn">Suas Turmas</a>
          <div>
            <Link to='mat7'>Matemática 7 Ano</Link>
            <Link to='mat6'>Matemática 6 Ano</Link>
          </div>
        </SeletorTurma>
        
        <Outlet />
      </Conteudo>
    </div>
  )
}