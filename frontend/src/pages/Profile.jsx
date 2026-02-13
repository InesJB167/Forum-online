import { UserCircle2Icon } from "lucide-react"
import '../styles/pages/profile.css'
import PerfilUser from "../components/PerfilUser"
import TopicoCategoria from "../components/TopicoCategoria"
import PasswordsForm from "../components/PasswordsForm.jsx"

function Profile(){
    return(
        <>
        <div className="conteudo">
            <div className="esquerda">
                <div className="perfil">
                    <div className="userIcon">
                        <label htmlFor=""><UserCircle2Icon size={100}/></label>
                    </div>
                    <div className="userState">
                        <div className="nameUser">
                            <p className="nome">Nome usuário</p>
                            <p className="estado">Ativo</p>
                        </div>
                        <p className="emailUser">username@email.com</p>
                        <div className="resumoAtividade">
                            <div className="resumo">
                                <p className="topico">Tópicos</p>
                                <p className="numero">12</p>
                            </div>
                            <div className="resumo">
                                <p className="topico">Comentários</p>
                                <p className="numero">12</p>
                            </div>
                            <div className="resumo">
                                <p className="topico">Likes</p>
                                <p className="numero">12</p>
                            </div>
                            <div className="resumo" id="ultimoResumo">
                                <p className="topico">Dislikes</p>
                                <p className="numero">12</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="topic">
                    <h2>Meus tópicos</h2>
                    <TopicoCategoria topico='English language' categoria='Linguas'/>
                    <TopicoCategoria topico='English language' categoria='Linguas'/>
                    <TopicoCategoria topico='English language' categoria='Linguas'/>
                    <TopicoCategoria topico='English language' categoria='Linguas'/>
                    <TopicoCategoria topico='English language' categoria='Linguas'/>
                </div>
            </div>
            <div className="direita">
                <PerfilUser/>
                <PasswordsForm/>
            </div>
        </div>
        
        
        </>
    )
}

export default Profile