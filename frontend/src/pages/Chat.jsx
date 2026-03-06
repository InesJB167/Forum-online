import TopicHeader from '../components/topic-elements/TopicHeader';
import '../styles/pages/chat.css'
import TopicoCategoria from '../components/topic-elements/TopicoCategoria';
import ChatInput from '../components/inputs/ChatInput';
import Messeger from '../components/Messeger';

function Chat(){
    return(
        <>
        <div className="chat">

            <div className="msg">
            
                <Messeger autor='Sullivan' tempo='2' content='The advance level is not that bad. We can learn many things from there Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quaerat sequi. Inventore voluptate adipisci velit, incidunt, harum, fugiat repellendus qui cum magni soluta commodi ut. Odit facere deserunt porro illum.'/>

                <Messeger autor='Sullivan' tempo='2' content='The advance level is not that bad. We can learn many things from there Lorem , harum, fugiat repellendus qui cum magni soluta commodi ut. Odit facere deserunt porro illum.'/>

                <Messeger autor='Sullivan' tempo='2' content='The advance level is not that bad. We can learn many things from there Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quaerat sequi. Inventore voluptate adipisci velit, incidunt, harum, fugiat repellendus qui cum magni soluta commodi ut. Odit facere deserunt porro illum.'/>

                <Messeger autor='Sullivan' tempo='2' content='The advance level is not that bad. We can learn many things from there '/>

                <Messeger autor='Sullivan' tempo='2' content='The advance level is not that bad. We can learn many things from there Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quaerat sequi. Inventore voluptate adipisci velit.'/>                
                <ChatInput className='postar'/>
            </div>
        </div>
         
        </>
    );
}

export default Chat