import { BellDotIcon, Search, UserCircle2 } from 'lucide-react';
import '../styles/components/topBar.css'
import InputIcon from './InputSearch';
import ButtomIcon from './ButtomIcon';

function TopBar(){
    const icon= [<Search size={30} color='rgb(199, 196, 196)'/>,<BellDotIcon size={30} color='blue'/>,<UserCircle2 size={30} color='blue'/>]
    return(
        <>
        <div className="topo">
        <div className="pesquisa">
            <InputIcon icon={icon[0]} texto='text' buscar='Buscar tópico' />
        </div>

        <div className="iconItems">
        <ButtomIcon icon={icon[1]}/>
        <ButtomIcon icon={icon[2]}/>
        </div>
        </div>
        </>
    );
}

export default TopBar