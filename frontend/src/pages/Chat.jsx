import TopicHeader from '../components/topic-elements/TopicHeader';
import '../styles/pages/chat.css'
import ChatInput from '../components/inputs/ChatInput';
import Messeger from '../components/Messeger';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../services/api';
import { useRef } from 'react';
import { io } from "socket.io-client";

function Chat() {
    //variaveis para o topico
    const [topico, setTopico] = useState(null);
    const [mensagem, setMensagem] = useState([]);
    const [erro, setErro] = useState("");

    //variaveis pra as mensagens
    const messageRef = useRef(null);
    const userLogado = JSON.parse(localStorage.getItem("user")) || {};
    console.log("USER LOGADO : ",userLogado.nameUser);

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
        async function abrirChat() {
            try {
                const respostaTopico = await api.get("/topico/mostrar/ultimo");
                setTopico(respostaTopico.data);
                console.log('Ultimo Topico ', respostaTopico.data);

                const respostaPost = await api.get("/topico/ultimo/posts");
                setMensagem(respostaPost.data);
                console.log('Posts do Ultimo Topico ', respostaPost.data);

            } catch (err) {
                console.log('Erro ao buscar Ultimo Topico ', err);
                setErro('Erro ao buscar Ultimo Topico!');
            }
        }

        abrirChat();
    }, []);


    useEffect(() => {
        if (messageRef.current) {
            messageRef.current.scrollTop = messageRef.current.scrollHeight
        }
    }, [mensagem]);

    async function criarPost() {
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

    return (
        <>
            <div className="chat">

                <div className="msg">
                    {erro && <p>{erro}</p>}
                    <TopicHeader titulo={topico?.desgnacao} autor={topico?.nameUser} categoria={topico?.nomeCategoria} descricao={topico?.descricao} />

                    <div className="chat-mensagem" ref={messageRef}>
                        {mensagem.map((msg) => (
                            <Messeger
                                key={msg.idPostagem}
                                autor={msg.nameUser}
                                content={msg.texto}
                                ehUsuario={msg.idUser === userLogado.idUser}
                            />
                        ))}
                    </div>

                    <ChatInput className='postar' value={texto} onChange={(e) => setTexto(e.target.value)} onChangeFile={(e) => setFile(e.target.files[0])} onSend={criarPost} />
                </div>
            </div>

        </>
    );
}

export default Chat
