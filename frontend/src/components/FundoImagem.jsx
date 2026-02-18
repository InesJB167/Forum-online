import Imagem from '../assets/chat.png'

function FundoImagem(){
    //uma variavel que controi o estilo de uma tag
    const estilo= {
        backgroundImage: `url(${Imagem})`,//para usaar o template 
        width: '400px',
        height: '500px',
        borderRadius: '20px',
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#ffff'
    }
    console.log(Imagem)
    return(
        <>
        <div className="fundo" style={estilo}>
        </div>
        </>
    );
}

export default FundoImagem