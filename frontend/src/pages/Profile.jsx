import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
  const [name, setName] = useState(currentUser?.name || "");
  const [email, setEmail] = useState(currentUser?.email || "");

  const handleUpdate = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const updatedUsers = users.map(u => u.email === currentUser.email ? { ...u, name, email } : u);
    
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify({ ...currentUser, name, email }));
    
    alert("Perfil atualizado com sucesso!");
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <Link to="/dashboard" style={styles.link}>← Voltar ao Fórum</Link>
        <h2 style={{margin:0}}>Meu Perfil</h2>
        <Link to="/settings" style={styles.link}>Configurações ⚙️</Link>
      </nav>

      <div style={styles.content}>
        <div style={styles.profileCard}>
          <div style={styles.avatarBig}>{name.charAt(0).toUpperCase()}</div>
          <form onSubmit={handleUpdate} style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Nome de Exibição</label>
              <input style={styles.input} value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>E-mail (Login)</label>
              <input style={styles.input} value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <button type="submit" style={styles.saveBtn}>Salvar Alterações</button>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { backgroundColor: '#0b141a', minHeight: '100vh', color: '#e9edef', fontFamily: 'sans-serif' },
  navbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 5%', backgroundColor: '#202c33' },
  link: { color: '#34b7f1', textDecoration: 'none' },
  content: { maxWidth: '500px', margin: '40px auto', padding: '0 20px' },
  profileCard: { backgroundColor: '#202c33', padding: '30px', borderRadius: '15px', textAlign: 'center' },
  avatarBig: { width: '100px', height: '100px', backgroundColor: '#00a884', borderRadius: '50%', fontSize: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' },
  form: { textAlign: 'left' },
  inputGroup: { marginBottom: '15px' },
  label: { display: 'block', color: '#8696a0', fontSize: '12px', marginBottom: '5px' },
  input: { width: '100%', padding: '10px', backgroundColor: '#2a3942', border: '1px solid #3b4a54', borderRadius: '5px', color: 'white', boxSizing: 'border-box' },
  saveBtn: { width: '100%', padding: '12px', backgroundColor: '#00a884', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' }
};