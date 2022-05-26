import styled from 'styled-components';

export const Conteudo = styled.div `
  padding: 32px;
  display: flex;
  flex-direction: column;
  h1, h2, h3 {
    text-align: center;
    margin-right: 16px;
  }

  a {
    border-radius: 5px;
    border: 2px solid #004358;
    padding: 10px;
    align-self: center;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2em;
    color: #004358;
    text-transform: uppercase;
  }

  p {
    align-self: center;
    padding: 50px 200px;
    font-size: 1.1em;
  }
`;