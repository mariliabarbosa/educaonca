import styled from 'styled-components';

import { Link, useParams } from "react-router-dom"

const AreaDetalhe = styled.div `
  display: flex;
  flex-direction: column;
  background-color: #ddd;
  padding: 20px;
  margin: 18px;
  min-height: 10vh;
  max-width: 60vw;
  border-radius: 3px;
  border: 1px solid #ccc;

  align-self: left ;

  a {
    width: fit-content;
    height: fit-content;
    border-radius: 5px;
    border: 2px solid #004358;
    margin: 0px 20px;
    padding: 5px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: #004358;
    text-transform: uppercase;
  }

  a:hover {
    border-radius: 5px;
    background-color: rgba(0, 67, 88, .3);
  }
  p {
    margin: 10px 0px;
  }

  `
export const DetalheTurma = () =>{
  const parametro = useParams();
  const turmaId = parametro.turmaId;

  return (
    <div>
      <AreaDetalhe>
        <Link to={'/aula/novo'}> Nova Aula </Link> 
        <p>
          Esse são os detalhes da turma {turmaId}
        </p>
      </AreaDetalhe>
    </div>
  )
}