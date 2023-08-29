import React, { useState } from 'react';
import './login.css'; // Estilize a barra de navegação como desejar

const Login = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  return (
    <nav className="navbar">
      
      <div className="navbar-buttons">
        <button className="login-button" onClick={handleLoginClick}>
          Login
        </button>
      </div>
      {showLogin && (
        <div className="login-form">
          <label>Usuário</label>
          <input type="text" placeholder="Digite o seu Usuário" />
          <label>Senha</label>
          <input type="password" placeholder="Digite a sua senha" />
          <button className="login-submit-button">Entrar</button>
        </div>
      )}
    </nav>
  );
};

export default Login;
