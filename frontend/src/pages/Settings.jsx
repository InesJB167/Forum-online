import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Settings() {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Deseja realmente encerrar sua sessão?")) {
      localStorage.removeItem("currentUser");
      navigate("/login");
    }
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <Link to="/dashboard" style={styles.link}>← Voltar ao Início</Link>
        <h2 style={{margin:0}}>Configurações</h2>
        <span></span>
      </nav>

      <div style={styles.content}>
        <section style={styles.section}>
          <h3 style={styles.sectionTitle}>Conta</h3>
          <div style={styles.option} onClick={() => navigate("/profile")}>
            <span>Editar Informações Pessoais</span>
            <span>❯</span>
          </div>
          <div style={styles.option}>
            <span>Privacidade e Segurança</span>
            <span>❯</span>
          </div>
        </section>

        <section style={styles.section}>
          <h3 style={styles.sectionTitle}>Preferências</h3>
          <div style={styles.option}>
            <span>Notificações</span>
            <input type="checkbox" defaultChecked />
          </div>
          <div style={styles.option}>
            <span>Modo Escuro</span>
            <input type="checkbox" defaultChecked disabled />
          </div>
        </section>

        <button onClick={handleLogout} style={styles.logoutBtn}>
          Encerrar Sessão (Sair)
        </button>
        
        <p style={{textAlign:'center', color:'#8696a0', fontSize:'12px', marginTop:'20px'}}>
          Versão do Sistema: 1.0.0-Estágio
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: { backgroundColor: '#0b141a', minHeight: '100vh', color: '#e9edef', fontFamily: 'sans-serif' },
  navbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 5%', backgroundColor: '#202c33' },
  link: { color: '#34b7f1', textDecoration: 'none' },
  content: { maxWidth: '600px', margin: '20px auto', padding: '20px' },
  section: { backgroundColor: '#202c33', borderRadius: '10px', padding: '10px', marginBottom: '20px' },
  sectionTitle: { padding: '10px', fontSize: '14px', color: '#00a884', textTransform: 'uppercase', margin: 0 },
  option: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', borderBottom: '1px solid #2a3942', cursor: 'pointer', transition: '0.2s' },
  logoutBtn: { width: '100%', padding: '15px', backgroundColor: '#f15c5c', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }
};