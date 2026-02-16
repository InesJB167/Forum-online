import InputGroup from "../components/InputGrourp"
import SelectGroup from "../components/SelectGroup"
import Buttom from "../components/Buttom"
import ButtomIcon from "../components/ButtomIcon"
import { X } from "lucide-react"
import '../styles/pages/topico.css'


function Topico({isOpen,Closed}){
    const icon=<X size={32}/>
    if(!isOpen) return null
    return(
    <>
        <div className="modal-fundo">
            <div className="conteudo-modal">
                <ButtomIcon icon={icon} fechar={Closed} id='iconeFechar'/>

                <h2 className="tituloTopico">Criar Novo Tópico</h2>
                <InputGroup label='Título' type='text' id='titulo' />
                <SelectGroup label='Categoria' id='cat' option1='Tecnologia' option2='Marketing'/>
                <div className="desc">
                    <label htmlFor="descricao">Descrição</label>
                    <textarea name="desc" id="desc"></textarea>
                </div>
                <div className="acoes">
                    <Buttom texto='Cancelar' type='submit' id='cancelar' className='botoesAcoes' fechar={Closed}/>
                    <Buttom texto='Publicar' type='submit' id='salvar' className='botoesAcoes'/>
                </div>
            </div>
        </div>
    </>
    )
}

export default Topico