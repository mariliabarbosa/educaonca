import styled from "styled-components";

import { Link } from "react-router-dom";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";

export const Conteudo = styled.main `
  padding-left: 20px;
.Upload-screen {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.Upload-title {
  font-weight: 400;
}
.Upload-buttons {
  display: flex;
  flex-direction: column;
  min-width: calc(30vw);
  max-width: calc(40vw);
  margin: 0px;
  text-align: center;
}

.Upload-primary {
  max-height: calc(30vh);
  min-height: calc(20vh);
  font-size: calc(5vh);
  border-radius: 5px;
  border: 0;
  background-color: #004358;
  color: white;
  margin: 20px 0;
}

.Upload-primary:active {
  background-color: red;
}

.Upload-secondary {
  max-height: calc(20vh);
  min-height: calc(10vh);
  font-size: calc(4vh);
  border-radius: 5px;
  border: 0;
  color: #004358;
  background-color: lightgrey;
}

.Upload-secondary:active {
background-color: red;
}

.Upload-details {
  height: 60vh;
  min-width: calc(40vw);
  max-width: calc(50vw);
  display: flex;
  flex-direction: column;
  padding: 20vh 10vw 0 10vw;
  align-items: center;
}

.Upload-input {
  border-radius: 10px;
  min-width: inherit;
  max-width: inherit;
  border: 1px solid #BEDB39;
  line-height: calc(12px + 2vmin);
  font-size: calc(5px + 2vmin);
  padding: 8px;
  font-weight: 100;
}

.Upload-title {
  text-align: left;
}

.Upload-submit {
  border: 0;
  height: 10vh;
  width: 15vh;
  background-color: #1F8A70;
  border-radius: 35px;
  color: white;
  font-size: 3vh;
  letter-spacing: 1px;
  cursor: pointer;
}

p {
  white-space: pre-wrap;
}
`

export const NovaAula = () => {
  return (
    <Conteudo>
      <CloudinaryUploadWidget/>
      <form className="Upload-screen" method="post" action="#">
        
        <div className="Upload-buttons">
          <h1 className="Upload-title">Enviar Vídeo</h1>
            <input  type="file" hidden id='upload-video'/>

            <label htmlFor="upload-material" className="Upload-secondary">
              Anexar Materiais
            </label>
            <input  type="file" hidden id='upload-material'/>
        </div>
      <div className="Upload-details" >
        <label htmlFor="Upload-title">Título</label>
        <input
          className="Upload-input"
          name="Upload-title"
          />
          <br/>

        <label htmlFor='upload-turmas'>Turma</label>
        <select name="upload-turmas" className="Upload-input" id="cars">
          <option value="">-</option>
          <option value="mat6">Matemática 6º Ano</option>
          <option value="mat7">Matemática 7º Ano</option>
          <option value="mat8">Matemática 8º Ano</option>
        </select>
          <label htmlFor="Upload-descricao">Descrição</label>
        <textarea
          className="Upload-input"
          name="Upload-descricao"
          />
          <br/>
          <Link to="/turmas">
            <button 
              form="Upload-details"
              className="Upload-submit"
              type="submit"
              >
              Enviar
            </button>
          </Link>
      </div>
      </form>
      
    </Conteudo>
  );
}