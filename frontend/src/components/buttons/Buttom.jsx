import '../../styles/components/buttons/buttom.css'

function Buttom({texto,type,icon,className,id, onClick }){
    //retirei o onClick={fechar} pois estava atrapalhando a execuçao normal do botao
    return (
        <>
        <button type={type} className={className} id={id} >{icon} <p className='paragraf' onClick={onClick}>{texto}</p></button>
        </>
    );
}

export default Buttom