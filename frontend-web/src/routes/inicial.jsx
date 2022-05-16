import {Link} from 'react-router-dom';
import './Inicial.css'

export default function Inicial() {
  return (
    <main style={{ paddingLeft: "20px" }}>

      <form className="Upload-screen" method="post" action="#">
        <div className="Upload-buttons">
          <h1 className="Upload-title">Enviar Vídeo</h1>
            <label htmlFor="upload-video" className='Upload-primary'>
              Anexar Vídeo
            </label>
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
          <Link to="/log/enviado">
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
      
    </main>
  );
}