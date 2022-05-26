import { Link, Outlet } from "react-router-dom"

import { Conteudo } from "./style"

export const Aulas = () => {
  return (
    <Conteudo>
      <nav>
        <Link to='lista'>Listar todas</Link>
        <Link to='novo'>Novo</Link>
      </nav>

      <Outlet />
    </Conteudo>
  )
}