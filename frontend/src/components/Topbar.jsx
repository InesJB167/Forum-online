import { BellDotIcon, Search, UserCircle2 } from 'lucide-react';
import '../styles/components/topBar.css'
import InputIcon from './inputs/InputSearch';
import ButtomIcon from './buttons/ButtomIcon';

function TopBar(){
    const icon= [<Search size={30} color='rgb(199, 196, 196)'/>,<BellDotIcon size={30} color='#2563EB'/>,<UserCircle2 size={30} color='#2563EB'/>]
    return(
        <>
        <div className="topBar">
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