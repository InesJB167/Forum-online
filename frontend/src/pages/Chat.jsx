import TopicHeader from '../components/topic-elements/TopicHeader';
import '../styles/pages/chat.css'
import ChatInput from '../components/inputs/ChatInput';
import Messeger from '../components/Messeger';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../services/api';
import { useRef } from 'react';
import { io } from "socket.io-client";
import { useParams, useNavigate } from "react-router-dom";

function Chat() {
    //variaveis para o topico
    const [topico, setTopico] = useState(null);
    const [mensagem, setMensagem] = useState([]);
    const [erro, setErro] = useState("");

    const navigate = useNavigate();
    const { idTopico } = useParams();

    //variaveis pra as mensagens
    const messageRef = useRef(null);
    const userLogado = JSON.parse(localStorage.getItem("user")) || {};
    console.log("USER LOGADO : ", userLogado.nameUser);
    

    const [texto, setTexto] = useState("");
    const [file, setFile] = useState("");

    //cria um novo socket 
    const socketRef = useRef(null);

    //evento que manda as mensagens instantaneamente
    useEffect(() => {

        socketRef.current = io("http://localhost:5000");

        socketRef.current.on("novaMensagem", (msg) => {
            setMensagem(prev => [...prev, msg]);
        });

        return () => {
            socketRef.current.disconnect();
        };

    }, []);

    useEffect(() => {

        async function buscarUltimoTopico() {

            if (idTopico) return; // se já tem tópico não faz nada

            try {

                const resposta = await api.get("/topico/mostrar/ultimo");

                const ultimoTopico = resposta.data;

                navigate(`/Home/chat/${ultimoTopico.idTopico}`);

            } catch (err) {
                console.log("Erro ao buscar último tópico", err);
            }

        }

        buscarUltimoTopico();

    }, [idTopico]);

    useEffect(() => {
        if (!idTopico) return;//se nao tiver o idTopico 

        async function abrirChat() {
            try {
                const respostaTopico = await api.get(`/topico/${idTopico}`);
                setTopico(respostaTopico.data);
                console.log('topico selecionado ', respostaTopico.data);

                const respostaPost = await api.get(`/topico/${idTopico}/posts`);
                setMensagem(respostaPost.data);
                console.log('Posts do topico selecionado ', respostaPost.data);

            } catch (err) {
                console.log('Erro ao buscar Topico  ', err);
                setErro('Erro ao buscar Topico!');
            }
        }

        abrirChat();
    }, [idTopico]);

    //para deixar a ultima  msg em baixo
    useEffect(() => {
        if (messageRef.current) {
            messageRef.current.scrollTop = messageRef.current.scrollHeight
        }
    }, [mensagem]);

    async function criarPost() {
        if (!topico) return;

        try {
            const postar = await api.post("/post/criar", { texto, file, idTopico: topico.idTopico });
            console.log("dados post ", postar.data);

            setTexto(""); // limpa input

        } catch (err) {
            console.log("Erro ao criar post!", err);
            setErro("Erro ao criar post!");
            alert("Erro ao enviar mensagem!")
        }
    }

    async function editarPost(idPostagem, novoTexto) {
  try {
    // Atualiza no backend
    await api.put(`/post/editar/${idPostagem}`, { texto: novoTexto });

    // Atualiza localmente
    setMensagem((prev) =>
      prev.map((msg) =>
        msg.idPostagem === idPostagem ? { ...msg, texto: novoTexto } : msg
      )
    );
  } catch (err) {
    console.log("Erro ao editar post:", err);
    alert("Não foi possível editar o post.");
  }
}

    async function deletarPost(idPostagem) {
    try {
        await api.delete(`/post/deletar/${idPostagem}`);
        // Atualiza localmente
        setMensagem(prev => prev.filter(msg => msg.idPostagem !== idPostagem));
    } catch (err) {
        console.log("Erro ao deletar post:", err);
        alert("Não foi possível deletar o post.");
    }
}

    return (
        <>
            <div className="chat">

                <div className="msg">
                    {erro && <p>{erro}</p>}
                    <TopicHeader titulo={topico?.desgnacao} autor={topico?.nameUser} categoria={topico?.nomeCategoria} descricao={topico?.descricao} />

                    <div className="chat-mensagem" ref={messageRef}>

                        {!idTopico && (
                            <p style={{ textAlign: "center" }}>
                                Selecione um tópico para começar a conversar.
                            </p>
                        )}

                        {idTopico && mensagem.map((msg) => (
                            <Messeger
                                key={msg.idPostagem}
                                autor={msg.nameUser}
                                content={msg.texto}
                                ehUsuario={msg.idUser === userLogado.idUser}
                                onEdit={(novoTexto)=> editarPost(msg.idPostagem, novoTexto)}
                                onDelete={() => deletarPost(msg.idPostagem)}
                            />
                        ))}

                    </div>

                    {idTopico && (
                        <ChatInput
                            className='postar'
                            value={texto}
                            onChange={(e) => setTexto(e.target.value)}
                            onChangeFile={(e) => setFile(e.target.files[0])}
                            onSend={criarPost}
                        />
                    )}
                </div>
            </div>

        </>
    );
}

export default Chat
