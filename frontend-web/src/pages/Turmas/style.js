import styled from 'styled-components';

export const Conteudo = styled.div `
  margin: 10px;

`

export const SeletorTurma = styled.div `
  display: inline-block;
  border-radius: 5px;
  border: 2px solid #333;
  position: relative;

  a {
    display: block;
    color: #333;
    text-align: center;
    padding: 10px;
    text-decoration: none;
  }
  
  a:hover, :hover {
    border-radius:5px;
    background-color: #fef;
  }
  div {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;

    a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      text-align: left;
    }

    a:hover {background-color: #f1f1f1;}
  }

  :hover div {
    display: block;
  }
`