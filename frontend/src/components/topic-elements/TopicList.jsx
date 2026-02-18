import { MessageSquareMore, ThumbsDown, ThumbsUp } from "lucide-react";
import '../../styles/components/topic-elements/topicList.css'
import ReactionIcon from "../RectionsIcon";


function TopicList({topico,autor,tempo}){
    const icone=[<MessageSquareMore size={16} color="#F1F5F9"/>,<ThumbsUp size={16} color="#F1F5F9"/>,<ThumbsDown size={16} color="#F1F5F9" />]
    return(
        <>
        <div className="topicos">
            <div className="autor-tempo">
                <label htmlFor="tema" className="tema">{topico}</label>
                <p className="autor">Por: {autor} - á   {tempo}h </p>
            </div>
            <div className="reacoes">   
                <ReactionIcon icon={icone[0]} number='13'/>
                <ReactionIcon icon={icone[1]} number='5'/>
                <ReactionIcon icon={icone[2]} number='2'/>
            </div>
        </div>
        </>
    );
}

export default TopicList