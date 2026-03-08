import { MessageSquareMore, ThumbsDown, ThumbsUp } from "lucide-react";
import '../../styles/components/topic-elements/topicList.css'
import ReactionIcon from "../RectionsIcon"

function TopicoCategoria({topico,categoria}){
    const icone=[<MessageSquareMore size={16}/>,<ThumbsUp size={16}/>,<ThumbsDown size={16} />]
    return(
        <>
        <div className="topicos">
            <div className="autor-tempo">
                <label htmlFor="tema" className="tema">{topico}</label>
                <p className="categoria">Categoria:{categoria} </p>
            </div>
            <div className="reacoes">   
                <ReactionIcon icon={icone[0]} number='0'/>
                <ReactionIcon icon={icone[1]} number='0'/>
                <ReactionIcon icon={icone[2]} number='0'/>
            </div>
        </div>
        </>
    );
}

export default TopicoCategoria