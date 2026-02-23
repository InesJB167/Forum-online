import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase'; 
import { ref, push, onValue, update } from "firebase/database";

export default function MainContent() {
  const [activeTab, setActiveTab] = useState('forum'); 
  const [isCalling, setIsCalling] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    } else {
      setTimeout(() => setLoading(false), 500);
    }
  }, [navigate, currentUser]);

  if (loading || !currentUser) return <div style={styles.loadingScreen}>Sincronizando com Google Firebase...</div>;

  return (
    <div style={styles.appWrapper}>
      <aside style={styles.sidebar}>
        <div style={styles.brandSection}>
          <div style={styles.logoIcon}>F</div>
          <h1 style={styles.brandName}>Fórum Online</h1>
        </div>

        <nav style={styles.navStack}>
          <div onClick={() => setActiveTab('forum')} style={activeTab === 'forum' ? styles.navItemActive : styles.navItem}>
            <span>🏛️</span> Fórum Principal
          </div>
          <div onClick={() => setActiveTab('mensagens')} style={activeTab === 'mensagens' ? styles.navItemActive : styles.navItem}>
            <span>💬</span> Chat Global
          </div>
          <div onClick={() => setActiveTab('chamadas')} style={activeTab === 'chamadas' ? styles.navItemActive : styles.navItem}>
            <span>📞</span> Chamadas
          </div>
          <div onClick={() => setActiveTab('seguranca')} style={activeTab === 'seguranca' ? styles.navItemActive : styles.navItem}>
            <span>🛡️</span> Segurança
          </div>
        </nav>

        <div style={styles.userCard}>
          <div style={styles.avatar}>{currentUser.name.charAt(0).toUpperCase()}</div>
          <div style={{flex:1}}>
            <div style={{fontSize:'14px', fontWeight:'bold'}}>{currentUser.name}</div>
            <div style={{fontSize:'11px', color:'#00a884'}}>Online</div>
          </div>
          <button onClick={() => {localStorage.removeItem("currentUser"); window.location.href="/login"}} style={styles.exitBtn}>Sair</button>
        </div>
      </aside>

      <main style={styles.mainArea}>
        <header style={styles.topBar}>
          <h2 style={{letterSpacing:'3px', fontSize:'12px', color:'#8696a0'}}>{activeTab.toUpperCase()}</h2>
          <div style={{display:'flex', gap:'10px'}}>
            <button style={styles.iconBtn} onClick={() => navigate("/profile")}>👤 Perfil</button>
            <button style={styles.iconBtn} onClick={() => navigate("/settings")}>⚙️</button>
          </div>
        </header>

        <div style={styles.glassPanel}>
          {activeTab === 'forum' && <ForumTab user={currentUser} />}
          {activeTab === 'mensagens' && <ChatTab user={currentUser} />}
          {activeTab === 'chamadas' && <div style={{padding:'40px'}}><button style={styles.btnAction} onClick={() => setIsCalling(true)}>Iniciar Chamada</button></div>}
          {activeTab === 'seguranca' && <div style={{padding:'40px'}}><h3>Segurança Total</h3><p>Proteção de dados encriptada via SSL.</p></div>}
        </div>
      </main>

      {isCalling && (
        <div style={styles.callOverlay}>
          <div style={{textAlign:'center'}}>
            <div style={styles.pulseAvatar}>📞</div>
            <h2>Chamada Segura...</h2>
            <button onClick={() => setIsCalling(false)} style={styles.hangUp}>Desligar</button>
          </div>
        </div>
      )}
    </div>
  );
}

// --- ABA DO FÓRUM (CORREÇÃO DO MENU DE CURTIDAS) ---
function ForumTab({ user }) {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [hoverId, setHoverId] = useState(null);

  useEffect(() => {
    const postsRef = ref(db, 'forum_posts');
    onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.keys(data).map(key => ({ id: key, ...data[key] })).reverse();
        setPosts(list);
      }
    });
  }, []);

  const handlePost = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    push(ref(db, 'forum_posts'), {
      author: user.name,
      title,
      content,
      date: new Date().toLocaleDateString(),
      reactions: { like: 0, love: 0, haha: 0, sad: 0 },
      comments: {}
    });
    setTitle(""); setContent("");
  };

  const react = (postId, type) => {
    const post = posts.find(p => p.id === postId);
    const currentCount = (post.reactions && post.reactions[type]) || 0;
    update(ref(db, `forum_posts/${postId}/reactions`), { [type]: currentCount + 1 });
    setHoverId(null);
  };

  const addComment = (postId, text) => {
    if (!text.trim()) return;
    push(ref(db, `forum_posts/${postId}/comments`), {
      author: user.name,
      text,
      time: new Date().toLocaleTimeString()
    });
  };

  return (
    <div style={{ padding: '30px', maxWidth: '750px', margin: '0 auto' }}>
      <form onSubmit={handlePost} style={styles.postForm}>
        <input style={styles.forumInput} placeholder="Título do tópico" value={title} onChange={e=>setTitle(e.target.value)} />
        <textarea style={{...styles.forumInput, height:'70px'}} placeholder="O que deseja postar no fórum?" value={content} onChange={e=>setContent(e.target.value)} />
        <button style={styles.btnAction}>Publicar Agora</button>
      </form>

      {posts.map(p => (
        <div key={p.id} style={styles.postCard}>
          <div style={{display:'flex', alignItems:'center', gap:'10px', marginBottom:'10px'}}>
             <div style={styles.avatarSmall}>{p.author.charAt(0).toUpperCase()}</div>
             <small style={{color:'#00a884', fontWeight:'bold'}}>{p.author} • {p.date}</small>
          </div>
          <h4>{p.title}</h4>
          <p style={{color:'#d1d7db'}}>{p.content}</p>

          <div style={styles.interactionArea}>
            <div 
              style={{position: 'relative', display: 'inline-block'}} 
              onMouseEnter={() => setHoverId(p.id)} 
              onMouseLeave={() => setHoverId(null)}
            >
              <button style={styles.reactBtn}>👍 Reagir</button>
              
              {/* MENU DE EMOJIS (Ajustado para não sumir) */}
              {hoverId === p.id && (
                <div style={styles.emojiPopup}>
                  <span onClick={() => react(p.id, 'like')} style={styles.emojiItem}>👍</span>
                  <span onClick={() => react(p.id, 'love')} style={styles.emojiItem}>❤️</span>
                  <span onClick={() => react(p.id, 'haha')} style={styles.emojiItem}>😂</span>
                  <span onClick={() => react(p.id, 'sad')} style={styles.emojiItem}>😢</span>
                </div>
              )}
            </div>

            <div style={{display:'flex', gap:'10px', fontSize:'13px', color:'#00a884'}}>
              {p.reactions?.like > 0 && <span>👍 {p.reactions.like}</span>}
              {p.reactions?.love > 0 && <span>❤️ {p.reactions.love}</span>}
              {p.reactions?.haha > 0 && <span>😂 {p.reactions.haha}</span>}
              {p.reactions?.sad > 0 && <span>😢 {p.reactions.sad}</span>}
            </div>
          </div>

          <div style={styles.commentBox}>
            {p.comments && Object.values(p.comments).map((c, i) => (
              <div key={i} style={{fontSize:'13px', marginBottom:'5px'}}><b style={{color:'#34b7f1'}}>{c.author}:</b> {c.text}</div>
            ))}
            <div style={{display:'flex', gap:'5px', marginTop:'10px'}}>
              <input style={styles.commentInput} placeholder="Comentar..." onKeyDown={(e) => {
                if(e.key === 'Enter') { addComment(p.id, e.target.value); e.target.value = ""; }
              }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// --- CHAT GLOBAL FIREBASE ---
function ChatTab({ user }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const scrollRef = useRef();

  useEffect(() => {
    onValue(ref(db, 'mensagens_chat'), (snap) => {
      const data = snap.val();
      if (data) setMessages(Object.keys(data).map(k => ({id:k, ...data[k]})));
    });
  }, []);

  useEffect(() => { scrollRef.current?.scrollIntoView({ behavior: "smooth" }) }, [messages]);

  const send = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    push(ref(db, 'mensagens_chat'), { sender: user.name, text, email: user.email, time: new Date().toLocaleTimeString() });
    setText("");
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {messages.map(m => (
          <div key={m.id} style={{
            alignSelf: m.email === user.email ? 'flex-end' : 'flex-start',
            backgroundColor: m.email === user.email ? '#005c4b' : '#202c33',
            padding: '10px 15px', borderRadius: '12px', maxWidth: '70%'
          }}>
            <div style={{fontSize:'10px', color:'#00a884', fontWeight:'bold'}}>{m.sender}</div>
            <div style={{color:'white'}}>{m.text}</div>
          </div>
        ))}
        <div ref={scrollRef} />
      </div>
      <form onSubmit={send} style={{ padding: '20px', backgroundColor: '#111b21', display: 'flex', gap: '10px' }}>
        <input style={{flex:1, padding:'12px', backgroundColor:'#2a3942', border:'none', borderRadius:'10px', color:'white'}} placeholder="Sua mensagem..." value={text} onChange={e=>setText(e.target.value)} />
        <button style={styles.btnAction}>Enviar</button>
      </form>
    </div>
  );
}

// --- ESTILOS CORRIGIDOS ---
const styles = {
  appWrapper: { display: 'flex', height: '100vh', backgroundColor: '#050505', color: 'white', fontFamily: 'sans-serif' },
  sidebar: { width: '260px', backgroundColor: '#0f0f0f', padding: '25px', display: 'flex', flexDirection: 'column', borderRight: '1px solid #1f1f1f' },
  brandSection: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' },
  logoIcon: { width: '35px', height: '35px', backgroundColor: '#00a884', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' },
  brandName: { fontSize: '18px', fontWeight: 'bold' },
  navStack: { display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 },
  navItem: { padding: '12px', borderRadius: '10px', color: '#8696a0', cursor: 'pointer' },
  navItemActive: { padding: '12px', borderRadius: '10px', color: 'white', backgroundColor: '#1a1a1a', borderLeft: '4px solid #00a884' },
  userCard: { backgroundColor: '#1a1a1a', padding: '15px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px' },
  avatar: { width: '35px', height: '35px', backgroundColor: '#00a884', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  exitBtn: { background: 'none', border: '1px solid #444', color: '#f15c5c', cursor: 'pointer', padding: '5px', borderRadius: '5px' },
  mainArea: { flex: 1, padding: '30px', display: 'flex', flexDirection: 'column', overflow: 'hidden' },
  topBar: { display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' },
  iconBtn: { backgroundColor: '#1a1a1a', border: 'none', color: '#34b7f1', padding: '5px 15px', borderRadius: '5px', cursor: 'pointer' },
  glassPanel: { flex: 1, backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid #1f1f1f', overflowY: 'auto' },
  postForm: { backgroundColor: '#0f0f0f', padding: '20px', borderRadius: '15px', marginBottom: '25px', border: '1px solid #222' },
  forumInput: { width: '100%', padding: '12px', backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', color: 'white', marginBottom: '10px', boxSizing: 'border-box' },
  btnAction: { padding: '10px 20px', backgroundColor: '#00a884', border: 'none', color: 'white', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' },
  postCard: { backgroundColor: '#0f0f0f', padding: '20px', borderRadius: '15px', marginBottom: '20px', border: '1px solid #1f1f1f' },
  avatarSmall: { width: '30px', height: '30px', backgroundColor: '#00a884', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' },
  interactionArea: { display: 'flex', alignItems: 'center', gap: '20px', marginTop: '15px', borderTop: '1px solid #222', paddingTop: '10px' },
  reactBtn: { background: 'none', border: 'none', color: '#8696a0', cursor: 'pointer', fontWeight: 'bold' },
  
  // CORREÇÃO DO MENU DE EMOJIS:
  emojiPopup: { 
    position: 'absolute', 
    bottom: '25px', // Colado no botão
    left: '0', 
    backgroundColor: '#2a3942', 
    padding: '8px 12px', 
    borderRadius: '30px', 
    display: 'flex', 
    gap: '12px', 
    boxShadow: '0 5px 15px rgba(0,0,0,0.5)', 
    zIndex: 100,
    border: '5px solid transparent', // Ponte invisível para o mouse não sair
    backgroundClip: 'padding-box'
  },
  
  emojiItem: { fontSize: '22px', cursor: 'pointer', transition: 'transform 0.1s' },
  commentBox: { marginTop: '15px', backgroundColor: '#050505', padding: '12px', borderRadius: '10px' },
  commentInput: { flex: 1, padding: '10px', backgroundColor: '#111', border: '1px solid #222', borderRadius: '5px', color: 'white' },
  callOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.95)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999 },
  pulseAvatar: { width: '100px', height: '100px', backgroundColor: '#00a884', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' },
  hangUp: { padding: '10px 40px', backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer', marginTop: '20px' }
};