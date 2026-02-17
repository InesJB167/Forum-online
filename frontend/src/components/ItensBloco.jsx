import { useState } from "react";
import ReactionIcon from "../components/RectionsIcon"
import {ToggleLeft, ToggleRight} from "lucide-react"
import '../styles/components/itensBloco.css'

function ItensBloco({idLabel}){
    const icone=[<ToggleLeft size={40}/>, <ToggleRight size={40}/>]
    const [ligado,setLigado]=useState(false)
    return(
        <>
        <div className="bloco-itens">
            <div className="botaoEstado">
                <ReactionIcon icon={ligado ? icone[0] : icone[1]} clique={()=>setLigado(!ligado)} className='btnEstado' id={idLabel}/>
            </div>
        </div>
        
        </>
    );
}

export default ItensBloco