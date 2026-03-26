import InputIcon from "../components/inputs/InputSearch"
import Buttom from "../components/buttons/Buttom"
import { LucideFolder, Search } from "lucide-react"
import "../styles/pages/categoria.css"
import { useEffect , useState} from "react"
import axios from "axios"
import CardCategoria from "../components/card/CardCategoria"

function Categoria(){
    const icons = [<LucideFolder size={25} color="white"/>,<Search size={30} color="grey"/>]
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        // Lógica para buscar categorias
        axios.get("http://localhost:5000/api/categoria")
            .then(response => {
                console.log("Categorias buscadas:", response.data);
                // Aqui você pode atualizar o estado com as categorias recebidas
                setCategorias(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar categorias:", error);
            });
    }, []);
    return(
        <div className="categoria">
            <div className="UserListheader">
                <div className="textos">
                    <h1>Lista de Categorias</h1>
                    <p>Aqui você pode visualizar e gerenciar todas as categorias do sistema.</p>
                </div>
                <Buttom texto="Nova Categoria" className="addUserButton" icon={icons[0]} />
            </div>

            <InputIcon placeholder="Pesquisar categorias..." icon={icons[1]} />

            <div className="userList">
                {/* Aqui você pode mapear as categorias e renderizar os componentes de categoria */}
                {categorias.length === 0 ? (
                    <p>Nenhuma categoria encontrada</p>
                ) : (
                    categorias.map(categoria => (
                       <CardCategoria key={categoria.idCategoria} categoria={categoria} />
                    ))
                )}

            </div>
        </div>
    )
}

export default Categoria