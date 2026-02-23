import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // 1. Validações básicas
    if (!name || !email || !password || !confirmPassword) {
      setError("Preencha todos os campos!");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem!");
      return;
    }

    // 2. Criar o objeto do usuário
    const newUser = {
      name,
      email,
      password // Em um sistema real, a senha nunca seria salva assim, mas para o estágio serve.
    };

    // 3. Simular salvamento no "Banco de Dados" (LocalStorage)
    // Pegamos os usuários que já existem ou criamos uma lista vazia
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Verificar se o email já está cadastrado
    const userExists = existingUsers.find(u => u.email === email);
    if (userExists) {
      setError("Este e-mail já está cadastrado!");
      return;
    }

    // Adicionar novo usuário na lista e salvar
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Cadastro realizado com sucesso!");
    
    // 4. Redirecionar para o Login
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleRegister} style={styles.card}>
        <h2 style={styles.title}>Criar Conta</h2>
        <p style={styles.subtitle}>Junte-se ao nosso fórum online</p>

        {error && <div style={styles.error}>{error}</div>}

        <div style={styles.inputGroup}>
          <label style={styles.label}>Nome Completo</label>
          <input 
            type="text" 
            style={styles.input} 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex: William Tavares"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>E-mail</label>
          <input 
            type="email" 
            style={styles.input} 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Senha</label>
          <input 
            type="password" 
            style={styles.input} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Confirmar Senha</label>
          <input 
            type="password" 
            style={styles.input} 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="********"
          />
        </div>

        <button type="submit" style={styles.button}>Cadastrar</button>

        <p style={styles.footerText}>
          Já tem uma conta? <Link to="/login" style={styles.link}>Faça Login</Link>
        </p>
      </form>
    </div>
  );
}

// Estilos Profissionais
const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b141a',
    fontFamily: 'sans-serif'
  },
  card: {
    backgroundColor: '#202c33',
    padding: '40px',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
  },
  title: {
    color: '#e9edef',
    textAlign: 'center',
    margin: '0 0 10px 0'
  },
  subtitle: {
    color: '#8696a0',
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '14px'
  },
  inputGroup: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    color: '#34b7f1',
    marginBottom: '5px',
    fontSize: '14px',
    fontWeight: 'bold'
  },
  input: {
    padding: '12px',
    backgroundColor: '#2a3942',
    border: '1px solid #3b4a54',
    borderRadius: '5px',
    color: 'white',
    outline: 'none'
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#00a884',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px'
  },
  error: {
    backgroundColor: '#f15c5c',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '20px',
    textAlign: 'center',
    fontSize: '14px'
  },
  footerText: {
    color: '#8696a0',
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '14px'
  },
  link: {
    color: '#34b7f1',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
};