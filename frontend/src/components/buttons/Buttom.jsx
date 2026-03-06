import '../../styles/components/buttons/buttom.css'

function Buttom({texto,type,icon,className,id}){
    //retirei o onClick={fechar} pois estava atrapalhando a execuçao normal do botao
    return (
        <>
        <button type={type} className={className} id={id} >{icon} <p className='paragraf'>{texto}</p></button>
        </>
    );
}

export default Buttom