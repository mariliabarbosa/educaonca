import styled from 'styled-components';

export const BarraSuperior = styled.nav `
  background-color: #004358;
  padding: 16px 32px;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  a {
    margin-right: 16px;
    text-decoration: none;
  }
  
  .logo {
    letter-spacing: 1px;
    font-size: 1.3em;
    font-weight: bold;
  }

  button {
    background-color: transparent;
    color: white;
    font-weight: bold; 
    font-size: 1em;
    cursor: pointer;
    border: 0;
  }
  
`;