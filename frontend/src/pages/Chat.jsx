import TopicHeader from '../components/TopicHeader';
import '../styles/pages/chat.css'
import TopicoCategoria from '../components/TopicoCategoria';
import ChatInput from '../components/ChatInput';
import Messeger from '../components/Messeger';

function Chat(){
    return(
        <>
        <div className="chat">
            <TopicHeader categoria='TI' autor='Nyrella Silva' tempo='1 min' descricao='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloribus, nam nisi, sequi illo totam architecto nihil saepe vero labore beatae corporis obcaecati quam fugit nobis. Molestias unde amet dolorem!'/>

            <div className="msg">
                <Messeger autor='Sullivan' tempo='2' content='The advance level is not that bad. We can learn many things from there Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quaerat sequi. Inventore voluptate adipisci velit, incidunt, harum, fugiat repellendus qui cum magni soluta commodi ut. Odit facere deserunt porro illum.'/>

                <Messeger autor='Sullivan' tempo='2' content='The advance level is not that bad. We can learn many things from there Lorem , harum, fugiat repellendus qui cum magni soluta commodi ut. Odit facere deserunt porro illum.'/>

                <Messeger autor='Sullivan' tempo='2' content='The advance level is not that bad. We can learn many things from there Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quaerat sequi. Inventore voluptate adipisci velit, incidunt, harum, fugiat repellendus qui cum magni soluta commodi ut. Odit facere deserunt porro illum.'/>

                <Messeger autor='Sullivan' tempo='2' content='The advance level is not that bad. We can learn many things from there '/>

                <Messeger autor='Sullivan' tempo='2' content='The advance level is not that bad. We can learn many things from there Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quaerat sequi. Inventore voluptate adipisci velit.'/>                
                <ChatInput className='postar'/>
            </div>
        </div>
         <div className="topic" id='topic1'>
                <h2>Tópicos abertos</h2>
                <TopicoCategoria topico='English language' categoria='Linguas'/>
                <TopicoCategoria topico='English language' categoria='Linguas'/>
                <TopicoCategoria topico='English language' categoria='Linguas'/>
                <TopicoCategoria topico='English language' categoria='Linguas'/>
                <TopicoCategoria topico='English language' categoria='Linguas'/>
            </div>
        </>
    );
}

export default Chat