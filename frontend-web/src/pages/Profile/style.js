import styled from 'styled-components';

export const Conteudo = styled.div `
  padding: 32px;
  display: flex;
  flex-direction: column;
  
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      
      p {
        margin: 10px 20px;
        align-self: left;
        font-size: 1.1em;
      }
    }  
  }
`;
 
export const Placeholder = styled.div `
  background-color: #ccc;
  height: 300px;
  width: 250px;
  margin: 0px 50px;
  border: 3px dashed #333;
`;