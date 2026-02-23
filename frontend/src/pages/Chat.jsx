import React, { useState, useEffect, useRef } from 'react';

export default function Chat() {
  // Estado para a lista de mensagens (começa com algumas mensagens de exemplo)
  const [messages, setMessages] = useState([
    { id: 1, user: 'Ana Paula', text: 'Olá pessoal! Como está o projeto?', time: '18:30', isMe: false },
    { id: 2, user: 'William', text: 'Tudo indo bem, acabei de estruturar o chat!', time: '18:32', isMe: true },
    { id: 3, user: 'Ana Paula', text: 'Que ótimo! Ficou bem bonito.', time: '18:33', isMe: false },
  ]);

  // Estado para o texto que o usuário está digitando
  const [inputText, setInputText] = useState("");
  
  // Referência para fazer o chat rolar para baixo sozinho
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    const newMessage = {
      id: Date.now(),
      user: 'Você',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true,
    };

    setMessages([...messages, newMessage]);
    setInputText(""); // Limpa o campo após enviar
  };

  return (
    <div style={styles.container}>
      {/* Cabeçalho do Chat */}
      <header style={styles.header}>
        <div style={styles.statusDot}></div>
        <h2 style={styles.headerTitle}>Fórum Online - Chat Geral</h2>
      </header>

      {/* Área de Mensagens */}
      <div style={styles.chatBox}>
        {messages.map((msg) => (
          <div key={msg.id} style={{ ...styles.messageRow, justifyContent: msg.isMe ? 'flex-end' : 'flex-start' }}>
            <div style={{ ...styles.messageBubble, backgroundColor: msg.isMe ? '#005c4b' : '#202c33' }}>
              {!msg.isMe && <span style={styles.userName}>{msg.user}</span>}
              <p style={styles.messageText}>{msg.text}</p>
              <span style={styles.messageTime}>{msg.time}</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Barra de Digitação */}
      <form onSubmit={handleSendMessage} style={styles.inputArea}>
        <input
          type="text"
          placeholder="Digite uma mensagem..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.sendButton}>
          <span role="img" aria-label="send">➤</span>
        </button>
      </form>
    </div>
  );
}

// ESTILOS (CSS-in-JS)
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#0b141a', // Azul quase preto bem profissional
    color: '#e9edef',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  },
  header: {
    padding: '15px 20px',
    backgroundColor: '#202c33',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  },
  statusDot: {
    width: '10px',
    height: '10px',
    backgroundColor: '#00ff00',
    borderRadius: '50%',
    marginRight: '10px',
  },
  headerTitle: {
    fontSize: '18px',
    margin: 0,
  },
  chatBox: {
    flex: 1,
    padding: '20px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    backgroundImage: 'radial-gradient(circle, #111b21 1px, transparent 1px)', // Pequeno detalhe de fundo
    backgroundSize: '20px 20px',
  },
  messageRow: {
    display: 'flex',
    width: '100%',
  },
  messageBubble: {
    maxWidth: '70%',
    padding: '8px 12px',
    borderRadius: '10px',
    position: 'relative',
    boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
  },
  userName: {
    fontSize: '12px',
    color: '#34b7f1',
    fontWeight: 'bold',
    display: 'block',
    marginBottom: '4px',
  },
  messageText: {
    margin: 0,
    fontSize: '15px',
    lineHeight: '1.4',
  },
  messageTime: {
    fontSize: '10px',
    color: 'rgba(255,255,255,0.5)',
    display: 'block',
    textAlign: 'right',
    marginTop: '4px',
  },
  inputArea: {
    padding: '10px 20px',
    backgroundColor: '#202c33',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  input: {
    flex: 1,
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#2a3942',
    color: 'white',
    outline: 'none',
    fontSize: '15px',
  },
  sendButton: {
    backgroundColor: '#00a884',
    color: 'white',
    border: 'none',
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
};