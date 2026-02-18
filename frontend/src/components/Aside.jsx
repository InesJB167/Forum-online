import '../styles/components/aside.css'
import {Home, ListIcon, LogOut, MessageCircleIcon, MessageSquareMore, SettingsIcon, UserCircle2} from 'lucide-react'
import ItensList from './ItensList'

function Aside({abrir}){

    const icons=[<MessageSquareMore size={48} />,<UserCircle2 size={32}/>,<Home size={32}/>,<ListIcon size={32}/>,<MessageCircleIcon size={32}/>,<SettingsIcon size={32}/>,<LogOut size={32}/>]
    

    return(
        <>
        <div className="aside">
           <div id="logo">
             <h1>Fórum Online</h1>
             <p className='paragrafo'>Debates & Comunidade</p>
           </div>
           <nav>
            <ul>
                <ItensList url='/Home' icon={icons[2]} text='HOME'/>
                <ItensList url='/Home/perfil' icon={icons[1]} text='PERFIL'/>
                
                <li className='btn'><button className='btnSair' onClick={abrir}>{icons[3]}<p>TÓPICO</p></button></li>
                 
                <ItensList url='/Home/chat' icon={icons[4]} text='CHAT'/>
                <ItensList url='/Home/config' icon={icons[5]} text='CONFIGURAÇÕES'/>
                <li className='btn'><button className='btnSair'>{icons[6]}<p>SAIR</p></button></li>
            </ul>
           </nav>
        </div>
        </>
    );
}

export default Aside