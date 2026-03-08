import InputGroup from "../components/inputs/InputGrourp"
import SelectGroup from "../components/inputs/SelectGroup"
import Buttom from "../components/buttons/Buttom"
import ButtomIcon from "../components/buttons/ButtomIcon"
import  { X } from "lucide-react"
import '../styles/pages/topico.css'
import { useEffect, useState } from "react"
import api from "../services/api"


function Topico({ isOpen, Closed }) {
    const token = localStorage.getItem("token");

    //para poder abrir
    const icon = <X size={32} />

    //para o form
    const [desgnacao, setDesgnacao] = useState("");;
    const [categorias, setCategorias] = useState([]);
    const [categoria, setCategoria] = useState("");
    const [descricao, setDescricao] = useState("");
    const [erro,setErro] = useState("");

    useEffect(() => {

        const listarCategorias = async () => {
            try {

                const resposta = await api.get("/categoria");

                setCategorias(resposta.data);

            } catch (err) {
                console.log("Erro ao listar categorias", err);
                setErro("Erro ao listar categorias!")
            }
        };

        listarCategorias();

    }, []);

    //para fechar a pagina
    if (!isOpen) return null

    const criarTopico = async (e)=>{
        e.preventDefault();
        try{
            const resposta = await api.post("/topico/criar" ,{desgnacao,descricao,idCategoria : Number(categoria)} ,{ headers: { Authorization: `Bearer ${token}`}});
            console.log(titulo, descricao, categoria);

            console.log("Dados topico ",resposta.data);
            alert("Topico criado com sucesso!");

        } catch(err) {
            if(err){
                console.log("Erro ao criar topico!",err.response.data);
                setErro("Erro ao criar topico!" );
            }
        }
    }

    return (
        <>
            <div className="modal-fundo">
                <div className="conteudo-modal">
                    <ButtomIcon icon={icon} fechar={Closed} id='iconeFechar' />

                    <h2 className="tituloTopico">Criar Novo Tópico</h2>
                    <form onSubmit={criarTopico}>

                        <InputGroup label='Título' value={desgnacao} onChange={(e) => setDesgnacao(e.target.value)} type='text' id='titulo' />

                        <SelectGroup
                            label="Categoria"
                            id="cat"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                            options={categorias}
                        />
                        {erro && <p>{erro}</p>}
                        <div className="desc">
                            <label htmlFor="descricao">Descrição</label>
                            <textarea name="desc" value={descricao} onChange={(e) => setDescricao(e.target.value)} id="desc"></textarea>
                        </div>
                        <div className="acoes">
                            <Buttom texto='Cancelar' id='cancelar' type='button' className='botoesAcoes' fechar={Closed} />
                            <Buttom texto='Publicar' type='submit' id='salvar' className='botoesAcoes' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Topico