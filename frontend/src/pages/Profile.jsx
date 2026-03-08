import { UserCircle2Icon } from "lucide-react"
import '../styles/pages/profile.css'
import PerfilUser from "../components/PerfilUser"
import TopicoCategoria from "../components/topic-elements/TopicoCategoria"
import PasswordsForm from "../components/PasswordsForm.jsx"
import { useEffect, useState } from "react"
import api from "../services/api.js"

function Profile() {
    //variaveis para o perfil
    const [nome, setNome] = useState("");
    const [estado, setEstado] = useState("");
    const [email, setEmail] = useState("");

    //variaveis para os topicos
    const [topico,setTopico] = useState([]);

    // Para exibir mensagens de erro ou status
    const [erro, setErro] = useState("");

    //permite que um evento aconteça assim que a pagina for carregada
    useEffect(() => {
        const dadosUser = async () => {
            try {
                const resposta = await api.get("/user/perfil", {
                    headers: {
                        //pegando o token
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });

                //pegar cada dado
                setNome(resposta.data.nome);
                setEmail(resposta.data.email);
                setEstado(resposta.data.estado);

            } catch (error) {
                console.log("Erro ao buscar perfil:", error);
                setErro("Não foi possível carregar os dados do usuário");
            }
        }

        const topicos = async ()=>{
            try{
                const listaTopicos = await api.get("/topico/user/list", {
                    headers :{
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });

                setTopico(listaTopicos.data);

            } catch(err){
                console.log("Erro ao listar topiccos" ,err);
                setErro("Erro ao listar topiccos");
            }
        }

        //chamar a funçao
        dadosUser();
        topicos();
    }     
        , []);//para evita a repediçao dessa funçao usa-se o [] Isso faz rodar apenas quando a página carrega.

            //permite visualizar o erro na tela {erro && <p className="erro">{erro}</p>}

    return (
        <>
            <div className="conteudo">
                <div className="esquerda">
                    <div className="perfil">
                        <div className="userIcon">
                            <label htmlFor=""><UserCircle2Icon size={100} /></label>
                        </div>
                        <div className="userState">
                            <div className="nameUser">
                                <p className="nome">{nome}</p>
                                <p className="estado">{estado}</p>
                            </div>
                            <p className="emailUser">{email}</p>
                            {erro && <p className="erro">{erro}</p>} 
                            <div className="resumoAtividade">
                                <div className="resumo">
                                    <p className="topico">Tópicos</p>
                                    <p className="numero">{topico.length}</p>
                                </div>
                                <div className="resumo">
                                    <p className="topico">Comentários</p>
                                    <p className="numero">0</p>
                                </div>
                                <div className="resumo">
                                    <p className="topico">Likes</p>
                                    <p className="numero">0</p>
                                </div>
                                <div className="resumo" id="ultimoResumo">
                                    <p className="topico">Dislikes</p>
                                    <p className="numero">0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="topic">
                        <h2 id="tituloTopic">Meus tópicos</h2>
                        { topico.length === 0 && <p>Ainda não criou nenhum topico!</p>}
                        {topico.map((t, index) => (
                            <TopicoCategoria key={index} topico={t.desgnacao} categoria={t.nomeCategoria} />
                        ))}

                    </div>
                </div>
                <div className="direita">
                    <PerfilUser />
                    <PasswordsForm />
                </div>
            </div>


        </>
    )
}

export default Profile