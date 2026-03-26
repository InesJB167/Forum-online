import '../../styles/components/buttons/buttom.css'

function Buttom({texto,type,icon,className,id, onClick }){
    //retirei o onClick={fechar} pois estava atrapalhando a execuçao normal do botao
    return (
        <>
        <button type={type} className={className} id={id} onClick={onClick} >
            <div className="button-content">
                {icon}
                <p className='paragraf'> {texto}</p>
            </div>
        </button>
        </>
    );
}

export default Buttom