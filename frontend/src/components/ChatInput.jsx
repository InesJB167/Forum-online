import { File, SendHorizonal } from "lucide-react";
import ButtomIcon from "./ButtomIcon";
import '../styles/components/chatInput.css'
 
function ChatInput({className}){
    const icone=[<SendHorizonal size={25}/>,<File size={25}/>]
    return(
        <>
        <div className={`conjunto ${className}`}>
            <label htmlFor="arquivo" className="iconeFundo">{icone[1]}</label>
            <input type="file" name="img" id="arquivo" />
            <input type="text" id="coment" placeholder="comente ..." className='inputComent'/>
            <ButtomIcon icon={icone[0]} className="iconeFundo" />
        </div>
        </>
    );
 }

export default  ChatInput
