import { MessageSquareMore, NotebookPenIcon, Star, ThumbsDown, ThumbsUp } from 'lucide-react';
import Card from './card/Card.jsx';
import TopicList from '../components/topic-elements/TopicList.jsx'
import '../styles/components/main.css'

function Main(){
    const icon=[<NotebookPenIcon size={32}/>,<MessageSquareMore size={32}/>,<ThumbsUp size={32}/>,<ThumbsDown size={32}/>]
    return(
        <>
        <div className="home">
             <div className="saudacoes">
                <h1>👋 Olá, Inês!</h1>
                <p className='textoSaudacoes'>Bem-vindo(a) de volta ao Forum Online.</p>
            </div>

            <div className="cards">
                <Card numero='0' icone={icon[0]} texto='Tópicos criados' frase='Ideias que você lançou' />
                <Card numero='0' icone={icon[1]} texto='Comentários' frase='Sua participação nos debates' />
                <Card numero='0' icone={icon[2]} texto='Likes' frase='A comunidade curtiu' />
                <Card numero='0' icone={icon[3]} texto='Dislikes' frase='Opiniões divergentes'/>
            </div>
            <div className="topicosRecentes">
                <h3>Tópicos recentes</h3>
                <div className="listaTopicos">
                    
                </div>
            </div>
        </div>
        </>
    );
}

export default Main