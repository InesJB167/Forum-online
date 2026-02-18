import ItensBloco from '../components/ItensBloco';
import '../styles/pages/config.css'
import Buttom from "../components/buttons/Buttom"

function Config(){
    return(
        <>
        <div className="config">
            <h1 id='configTitle'>Configurações</h1>
            <div className="bloco1">
                <h2 className='nomeBloco'>Notificações</h2>
                <div className="itens-bloco1">
                    <div className="labels">
                        <label htmlFor="respostasTopicos">Respostas aos meus tópicos</label>
                        <label htmlFor="comentario">Comentários nas minhas respostas</label>
                        <label htmlFor="likes">Receber likes</label>
                    </div>
                    <div className="btns">
                        <ItensBloco idLabel='respostasTopicos'/>
                        <ItensBloco idLabel='comentario'/>
                        <ItensBloco idLabel='likes'/>
                    </div>
                </div>
            </div>

            <div className="bloco2">
                <h2 className='nomeBloco'>Privacidade</h2>
                <div className="itens-bloco2">
                    <div className="labels">
                        <label htmlFor="mostrarStatus">Mostrar status online</label>
                        <label htmlFor="exibirAtividade">Exibir atividade pública</label>
                    </div>
                    <div className="btns">
                        <ItensBloco idLabel='mostrarStatus'/>
                        <ItensBloco idLabel='exibirAtividade'/>
                    </div>
                </div>
            </div>

            <div className="bloco3">
                <h2 className='nomeBloco'>Aparência</h2>
                <div className="itens-bloco3">
                    <div className="labels">
                        <label htmlFor="tema">Tema</label>
                    </div>
                    <div className="btns">
                        <ItensBloco idLabel='tema'/>
                    </div>
                </div>
            </div>

            <div className="bloco4">
                <h2 className='nomeBloco'>Zona  risco</h2>
                <p>Essas ações não podem ser desfeitas</p>
                <div className="itens-bloco4">
                    <Buttom texto='Desativar conta' type='submit' className='botoesEstilo'/>
                    <Buttom texto='Excluir conta' type='submit' className='botoesEstilo'/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Config