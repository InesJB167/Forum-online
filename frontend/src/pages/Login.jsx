import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Busca os usuários cadastrados no navegador
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      // Salva a sessão do usuário
      localStorage.setItem("currentUser", JSON.stringify(user));
      // Redireciona para o Dashboard Luxuoso
      navigate("/dashboard");
    } else {
      setError("Credenciais inválidas. Verifique seu e-mail e senha.");
    }
  };

  return (
    <div style={styles.container}>
      {/* Elemento Decorativo de Fundo (Glow) */}
      <div style={styles.backgroundGlow}></div>

      <div style={styles.loginCard}>
        <div style={styles.header}>
          <div style={styles.logoBadge}>F</div>
          <h2 style={styles.title}>Fórum Online</h2>
          <p style={styles.subtitle}>Bem-vindo de volta! Sentimos sua falta.</p>
        </div>

        {error && <div style={styles.errorBox}>{error}</div>}

        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>ENDEREÇO DE E-MAIL</label>
            <input 
              type="email" 
              style={styles.input} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>PALAVRA-PASSE</label>
            <input 
              type="password" 
              style={styles.input} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="#" style={styles.forgotPass}>Esqueceu sua senha?</a>
          </div>

          <button type="submit" style={styles.loginButton}>
            Entrar no Sistema
          </button>

          <p style={styles.registerText}>
            Precisando de uma conta? <Link to="/register" style={styles.link}>Registe-se</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

// --- ESTILOS PROFISSIONAIS ---
const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a0a0b', // Fundo quase preto
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    overflow: 'hidden',
    position: 'relative'
  },
  backgroundGlow: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    backgroundColor: 'rgba(0, 168, 132, 0.15)',
    borderRadius: '50%',
    filter: 'blur(100px)',
    top: '-100px',
    right: '-100px',
    zIndex: 0
  },
  loginCard: {
    zIndex: 1,
    backgroundColor: '#18191c', // Cinza escuro estilo Discord
    padding: '40px',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '420px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
    border: '1px solid rgba(255, 255, 255, 0.05)'
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px'
  },
  logoBadge: {
    width: '50px',
    height: '50px',
    backgroundColor: '#00a884',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
    margin: '0 auto 15px',
    boxShadow: '0 4px 15px rgba(0, 168, 132, 0.3)'
  },
  title: {
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0 0 8px 0'
  },
  subtitle: {
    color: '#b9bbbe',
    fontSize: '14px',
    margin: 0
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  label: {
    fontSize: '11px',
    color: '#b9bbbe',
    fontWeight: 'bold',
    letterSpacing: '0.5px'
  },
  input: {
    padding: '12px',
    backgroundColor: '#1e1f22', // Input mais escuro
    border: '1px solid #000',
    borderRadius: '4px',
    color: '#dbdee1',
    fontSize: '15px',
    outline: 'none',
    transition: 'border-color 0.2s',
    focus: {
      borderColor: '#00a884'
    }
  },
  forgotPass: {
    fontSize: '13px',
    color: '#00a8fc',
    textDecoration: 'none',
    marginTop: '4px',
    alignSelf: 'flex-start'
  },
  loginButton: {
    padding: '12px',
    backgroundColor: '#00a884',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    marginTop: '10px'
  },
  errorBox: {
    backgroundColor: 'rgba(242, 63, 66, 0.1)',
    color: '#f23f42',
    padding: '10px',
    borderRadius: '4px',
    fontSize: '13px',
    textAlign: 'center',
    marginBottom: '20px',
    border: '1px solid #f23f42'
  },
  registerText: {
    color: '#b9bbbe',
    fontSize: '14px',
    textAlign: 'center',
    marginTop: '10px'
  },
  link: {
    color: '#00a8fc',
    textDecoration: 'none'
  }
};