import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (!currentUser) navigate("/login");
    setPosts(JSON.parse(localStorage.getItem("forum_posts") || "[]"));
  }, [navigate]);

  const save = (newPosts) => {
    localStorage.setItem("forum_posts", JSON.stringify(newPosts));
    setPosts(newPosts);
    setActiveMenu(null);
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    if (editingId) {
      save(posts.map(p => p.id === editingId ? {...p, title, content} : p));
      setEditingId(null);
    } else {
      const newP = { 
        id: Date.now(), 
        author: currentUser.name, 
        email: currentUser.email, 
        title, 
        content, 
        date: new Date().toLocaleDateString(),
        likes: 0 
      };
      save([newP, ...posts]);
    }
    setTitle(""); setContent("");
  };

  const deletePost = (id) => { if(window.confirm("Deseja apagar esta postagem?")) save(posts.filter(p => p.id !== id)); };

  return (
    <div style={styles.container}>
      {/* NAVBAR MODERNA */}
      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <h2 style={styles.logo}>🏛️ Fórum Comunitário</h2>
        </div>
        <div style={styles.navRight}>
          <Link to="/chat" style={styles.navLink}>Chat</Link>
          <Link to="/profile" style={styles.profileBtn}>
            <div style={styles.avatarSmall}>{currentUser?.name?.charAt(0)}</div>
            Meu Perfil
          </Link>
        </div>
      </nav>

      <div style={styles.mainContent}>
        {/* ÁREA DE CRIAÇÃO (Card Estilizado) */}
        <section style={styles.createCard}>
          <div style={styles.createHeader}>
            <div style={styles.avatarSmall}>{currentUser?.name?.charAt(0)}</div>
            <span style={{fontWeight: 'bold'}}>O que você está pensando, {currentUser?.name?.split(' ')[0]}?</span>
          </div>
          <form onSubmit={handlePost} style={styles.form}>
            <input 
              style={styles.inputTitle} 
              placeholder="Título do tópico..." 
              value={title} 
              onChange={e => setTitle(e.target.value)} 
            />
            <textarea 
              style={styles.inputText} 
              placeholder="Descreva sua ideia ou dúvida..." 
              value={content} 
              onChange={e => setContent(e.target.value)} 
            />
            <div style={styles.formFooter}>
              <button style={styles.publishBtn}>{editingId ? "Atualizar Postagem" : "Publicar no Feed"}</button>
            </div>
          </form>
        </section>

        {/* FEED DE POSTAGENS */}
        <div style={styles.feed}>
          {posts.map(p => (
            <div key={p.id} style={styles.postCard}>
              <div style={styles.postHeader}>
                <div style={styles.authorInfo}>
                  <div style={styles.avatarSmall}>{p.author.charAt(0)}</div>
                  <div>
                    <div style={styles.authorName}>{p.author}</div>
                    <div style={styles.postDate}>{p.date}</div>
                  </div>
                </div>

                {/* MENU TRÊS PONTINHOS */}
                {currentUser?.email === p.email && (
                  <div style={{position: 'relative'}}>
                    <button onClick={() => setActiveMenu(activeMenu === p.id ? null : p.id)} style={styles.dotsBtn}>⋮</button>
                    {activeMenu === p.id && (
                      <div style={styles.dropdown}>
                        <button onClick={() => {setTitle(p.title); setContent(p.content); setEditingId(p.id); setActiveMenu(null)}} style={styles.dropItem}>Editar</button>
                        <button onClick={() => deletePost(p.id)} style={{...styles.dropItem, color: '#ff4d4d'}}>Excluir</button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <h3 style={styles.titleDisplay}>{p.title}</h3>
              <p style={styles.contentDisplay}>{p.content}</p>
              
              <div style={styles.postActions}>
                <button style={styles.actionBtn}>👍 Curtir</button>
                <button style={styles.actionBtn}>💬 Comentar</button>
                <button style={styles.actionBtn}>🔗 Compartilhar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ESTILOS DE ALTO NÍVEL
const styles = {
  container: { backgroundColor: '#0b141a', minHeight: '100vh', color: '#e9edef', fontFamily: "'Segoe UI', Roboto, sans-serif" },
  navbar: { 
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
    padding: '0 5%', height: '70px', backgroundColor: '#111b21', 
    position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid #222d34' 
  },
  logo: { fontSize: '20px', fontWeight: 'bold', color: '#00a884' },
  navRight: { display: 'flex', alignItems: 'center', gap: '25px' },
  navLink: { color: '#e9edef', textDecoration: 'none', fontSize: '15px', fontWeight: '500' },
  profileBtn: { display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#34b7f1', fontWeight: 'bold' },
  
  mainContent: { maxWidth: '680px', margin: '30px auto', padding: '0 15px' },
  
  createCard: { backgroundColor: '#111b21', borderRadius: '12px', padding: '20px', marginBottom: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' },
  createHeader: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px', color: '#8696a0' },
  avatarSmall: { width: '35px', height: '35px', backgroundColor: '#00a884', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' },
  
  form: { display: 'flex', flexDirection: 'column', gap: '12px' },
  inputTitle: { padding: '12px', backgroundColor: '#2a3942', border: 'none', borderRadius: '8px', color: 'white', fontSize: '16px', outline: 'none' },
  inputText: { padding: '12px', backgroundColor: '#2a3942', border: 'none', borderRadius: '8px', color: 'white', fontSize: '15px', height: '100px', resize: 'none', outline: 'none' },
  formFooter: { textAlign: 'right' },
  publishBtn: { backgroundColor: '#00a884', color: 'white', border: 'none', padding: '10px 25px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' },

  feed: { display: 'flex', flexDirection: 'column', gap: '15px' },
  postCard: { backgroundColor: '#111b21', borderRadius: '12px', padding: '20px', border: '1px solid #222d34' },
  postHeader: { display: 'flex', justifyContent: 'space-between', marginBottom: '15px' },
  authorInfo: { display: 'flex', alignItems: 'center', gap: '10px' },
  authorName: { fontWeight: 'bold', fontSize: '15px' },
  postDate: { fontSize: '12px', color: '#8696a0' },
  
  dotsBtn: { background: 'none', border: 'none', color: '#8696a0', fontSize: '22px', cursor: 'pointer' },
  dropdown: { position: 'absolute', right: 0, top: '30px', backgroundColor: '#233138', borderRadius: '8px', boxShadow: '0 8px 16px rgba(0,0,0,0.5)', minWidth: '120px', overflow: 'hidden' },
  dropItem: { width: '100%', padding: '12px', textAlign: 'left', background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '14px' },

  titleDisplay: { margin: '0 0 10px 0', fontSize: '18px', color: '#e9edef' },
  contentDisplay: { fontSize: '15px', color: '#d1d7db', lineHeight: '1.5', margin: 0 },
  
  postActions: { display: 'flex', justifyContent: 'space-around', marginTop: '20px', borderTop: '1px solid #222d34', paddingTop: '10px' },
  actionBtn: { background: 'none', border: 'none', color: '#8696a0', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }
};