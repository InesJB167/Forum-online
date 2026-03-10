import { File, SendHorizonal } from "lucide-react";
import ButtomIcon from "../buttons/ButtomIcon";
import '../../styles/components/inputs/chatInput.css'
 
function ChatInput({className ,value,onChangeFile,onChange,onSend}){
    const icone=[<SendHorizonal size={25} color="#F1F5F9"/>,<File size={25}/>]
    return(
        <>
        <div className={`conjunto ${className}`}>
            <label htmlFor="arquivo" className="iconeFundo">{icone[1]}</label>
            <input type="file" name="img" id="arquivo" onChange={onChangeFile} />
            <input type="text" id="coment" value={value} onChange={onChange} placeholder="comente ..." className='inputComent'/>
            <ButtomIcon icon={icone[0]} className="iconeFundo" onClick={onSend}/>
        </div>
        </>
    );
 }

export default  ChatInput
