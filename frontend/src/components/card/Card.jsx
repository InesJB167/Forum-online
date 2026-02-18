import '../../styles/components/cards/card.css'

function Card({numero,texto,icone,frase}){
    return(
        <>
        <div className="card">

            <label htmlFor="numero" className='labelCard'>{icone} {numero}</label>
            <p className='textCard'>{texto}</p>
            <p className='fraseCard'>{frase}</p>
        </div>
        </>
    );
}

export default Card