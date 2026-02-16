import '../styles/components/buttom.css'

function Buttom({texto,type,icon,className,id,fechar}){
    return (
        <>
        <button type={type} className={className} id='id' onClick={fechar}>{icon} <p className='paragraf'>{texto}</p></button>
        </>
    );
}

export default Buttom