import {Link} from 'react-router-dom';
import './Inicial.css'

export default function Inicial() {
  return (
    <main style={{ paddingLeft: "20px" }}>
    <div>
      <p>
        Upload realizado com sucesso 
        <Link to="/log/inicial">
           retornar a página anterior
        </Link>
      </p>
    </div>
      
    </main>
  );
}