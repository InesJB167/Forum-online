import '../../styles/components/topic-elements/topicHeader.css'
import {ChevronDown, ChevronUp} from 'lucide-react'
import { useState } from 'react'

function TopicHeader ({categoria,autor,tempo,descricao,titulo}){
    const icone=[<ChevronDown size={25}/>,<ChevronUp size={25}/>]
    const [encolhido,setEncolhido] = useState(true)

    return(
        <>
        <div className={`header ${encolhido ? 'encolher': ''}`}>
            
            <h1>{titulo}</h1>
            <p className='catParagrafo'>Catgoria : {categoria} | Por: {autor}  {tempo}</p>
            <p className={`des1 ${encolhido ? 'paragrafDesc': ''}`}>{descricao}</p>
        </div>
        </>
    );
}

export default TopicHeader

/** <ButtomIcon icon={encolhido ? icone[0]:icone[1]} id='btnEncolher' fechar={()=>setEncolhido(!encolhido)
            }/>*/