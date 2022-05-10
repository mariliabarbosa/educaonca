import React from "react";
import {Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-logo" alt="logo">
          EducaOnça
        </p>
      </header>
      <form className="Login-area" id="Login-form">
        <label for="Login-username">Usuário</label>
        <input
          className="Login-input"
          name="Login-username"
          />
          <br/>
        <label for="Login-senha">Senha</label>
        <input
          className="Login-input"
          type="password"
          name="Login-senha"
          />
          <Link to="/log/inicial">

            <button 
              form="Login-form"
              className="Login-submit"
              type="submit"
              >
              Entrar
            </button>
          </Link>
      </form>
    </div>
  );
}

export default App;
