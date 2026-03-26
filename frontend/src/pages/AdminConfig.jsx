import { LucideFolder, PinIcon, User2 } from "lucide-react"
import Button from "../components/buttons/Buttom"
import "../styles/pages/adminConfig.css"
import { Outlet ,useNavigate} from "react-router-dom";

function AdminConfig (){
    const icons = [<User2 size={25} color="white"/>,<LucideFolder size={25} color="white"/>,<PinIcon size={25} color="white"/>]
    const navigate = useNavigate();

    return (
        <div className='configPainel'>
            <h1 >Configurações</h1>
            <div className="painel">
            
                <div className="acoes-user">
                <Button texto='Usuários' className='acoesItens' icon={icons[0]} onClick={()=> navigate("users")}/>
                <Button texto='Categorias' className='acoesItens' icon={icons[1]} onClick={()=> navigate("categorias")}/>
                <Button texto='Tópicos' className='acoesItens' icon={icons[2]}/>
                </div>

                <div className="quadro">
                    <h2>Bem-vindo(a) ao Painel de Configurações</h2>
                    <p>Selecione uma opção no menu para começar.</p>
                    <Outlet />
                </div>
            </div>
        </div>
        
    )
}

export default AdminConfig