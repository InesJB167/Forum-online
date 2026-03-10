import { DotIcon, LucideThumbsUp, ThumbsDown, UserCircle2 } from 'lucide-react';
import '../styles/components/messeger.css'
import ReactionIcon from "../components/RectionsIcon"

function Messeger({autor,content,tempo,ehUsuario}){
    const icone=[<UserCircle2 size={32}/>,<DotIcon size={16}/>, <LucideThumbsUp size={18}/>, <ThumbsDown size={18}/>]
    return(
        <>
        <div className={`mensagem ${ehUsuario ? 'direita' : 'esquerda'}`}>
            <div className="avatar">
                <label htmlFor="foto">{icone[0]}</label>
            </div>
            <div className="postContent">
                <div className="autor-conteudo">
                    <label htmlFor="autor">{autor} {icone[1]} á {tempo}h</label>
                    <p className='conteudoPost'>{content}</p>
                </div>
                <div className="reacoesPost">
                    <ReactionIcon icon={icone[2]} number='0'/>
                    <ReactionIcon icon={icone[3]} number='0'/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Messeger