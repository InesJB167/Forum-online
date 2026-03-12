import { MessageSquareMore, NotebookPenIcon, Star, ThumbsDown, ThumbsUp } from 'lucide-react';
import Card from './card/Card.jsx';
import '../styles/components/main.css'
import { useState, useEffect } from 'react';
import api from '../services/api.js';
import TopicoCategoria from './topic-elements/TopicoCategoria.jsx';

function Main() {
    const icon = [<NotebookPenIcon size={32} />, <MessageSquareMore size={32} />, <ThumbsUp size={32} />, <ThumbsDown size={32} />]

    const [nameUser, setNameUser] = useState("");
    const [erro, setErro] = useState("");
    const [topico, setTopico] = useState([]);

    useEffect(() => {
        const nomeUser = async () => {
            try {
                const resposta = await api.get("/user/perfil", {
                    headers: {
                        //pegando o token
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });

                //pegar cada dado
                setNameUser(resposta.data.nameUser);
                console.log("nome User main ", nameUser);

            } catch (error) {
                console.log("Erro ao buscar perfil:", error);
                setErro("Não foi possível carregar os dados do usuário");
            }
        }

        const topicos = async () => {
            try {
                const listaTopicos = await api.get("/topico/user/list", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });

                setTopico(listaTopicos.data);

            } catch (err) {
                console.log("Erro ao listar topiccos", err);
                setErro("Erro ao listar topiccos");
            }
        }

        

        nomeUser();
        topicos();
        
    }, []);

    return (
        <>
            <div className="home">
                <div className="saudacoes">
                    <h1>👋 Olá , {nameUser} !</h1>
                    <p className='textoSaudacoes'>Bem-vindo(a) de volta ao Forum Online.</p>
                </div>

                <div className="cards">
                    <Card numero={topico.length} icone={icon[0]} texto='Tópicos criados' frase='Ideias que você lançou' />
                    <Card numero='0' icone={icon[1]} texto='Comentários' frase='Sua participação nos debates' />
                    <Card numero='0' icone={icon[2]} texto='Likes' frase='A comunidade curtiu' />
                    <Card numero='0' icone={icon[3]} texto='Dislikes' frase='Opiniões divergentes' />
                </div>
                <div className="topicosRecentes">
                    <h3>Tópicos recentes</h3>
                    <div className="listaTopicos">
                    {topico.map((t, index) => (
                            <TopicoCategoria key={index} topico={t} categoria={t.nomeCategoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main

/**const topicosRecentes = async () => {
            try {
                const listaUltimosTopicos = await api.get("/topico/list/ultimos");

                setUltimosTopicos(listaUltimosTopicos.data);
                console.log("dados dos topicos recentes ",listaUltimosTopicos.data);

            } catch (err) {
                console.log("Erro ao listar topicos recentes", err);
                setErro("Erro ao listar topiccos recentes ");
            }
        } 
            
        topicosRecentes();*/