import '../styles/components/topicHeader.css'
import ButtonIcon from "../components/ButtomIcon"
import {ChevronDown, ChevronUp} from 'lucide-react'
import { useState } from 'react'

function TopicHeader ({categoria,autor,tempo,descricao}){
    const icone=[<ChevronDown size={25}/>,<ChevronUp size={25}/>]
    const [encolhido,setEncolhido] = useState(true)

    return(
        <>
        <div className={`header ${encolhido ? 'encolher': ''}`}>
            <ButtonIcon icon={encolhido ? icone[0]:icone[1]} id='btnEncolher' fechar={()=>setEncolhido(!encolhido)
            }/> 
            <h1>Titulo do tópico</h1>
            <p className='catParagrafo'>Catgoria:{categoria} .Por: {autor} á {tempo}</p>
            <p className={`des1 ${encolhido ? 'paragrafDesc': ''}`}>{descricao}</p>
        </div>
        </>
    );
}

export default TopicHeader