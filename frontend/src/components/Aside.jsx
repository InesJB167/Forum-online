import '../styles/components/aside.css'
import {Home, ListIcon, LogOut, MessageCircleIcon, MessageSquareMore, SettingsIcon, UserCircle2} from 'lucide-react'
import ItensList from './ItensList';

function Aside(){

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
                <ItensList icon={icons[2]} text='Home'/>
                <ItensList icon={icons[1]} text='Perfil'/>
                <ItensList icon={icons[3]} text='Tópicos'/>
                <ItensList icon={icons[4]} text='Chat'/>
                <ItensList icon={icons[5]} text='Configurações'/>
                <li className='btn'><button className='btnSair'>{icons[6]}<p>Sair</p></button></li>
            </ul>
           </nav>
        </div>
        </>
    );
}

export default Aside