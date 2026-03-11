import { MessageSquareMore, ThumbsDown, ThumbsUp } from "lucide-react";
import '../../styles/components/topic-elements/topicList.css'
import ReactionIcon from "../RectionsIcon"
import { useNavigate } from "react-router-dom";

function TopicoCategoria({topico,categoria}){
    const icone=[<MessageSquareMore size={16}/>,<ThumbsUp size={16}/>,<ThumbsDown size={16} />]
    const navigate = useNavigate();


    const abrirChat = () => {
        // pega o id do tópico e vai para o chat
        navigate(`/Home/chat/${topico.idTopico}`);
    };

    return(
        <>
        <div className="topicos" onClick={abrirChat}>
            <div className="autor-tempo">
                <label htmlFor="tema" className="tema">{topico.desgnacao}</label>
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