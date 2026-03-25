import '../../styles/components/inputs/selectGroup.css'

function SelectGroup({label,id,options=[],className,classNameInput,value,onChange,editavel}){

    return(
        <div className={`containerSelect ${className}`}>
            <label htmlFor={id}>{label}</label>

            <select
                name={id}
                id={id}
                value={value}
                onChange={onChange}
                className={`container ${classNameInput}`}
                disabled={editavel}
            >
                

                {options.map((opcao, index) => {

                    // se for string
                    if(typeof opcao === "string"){
                        return (
                            <option key={index} value={opcao}>
                                {opcao}
                            </option>
                        )
                    }

                    // se for objeto
                    return (
                        <option key={opcao.idCategoria} value={opcao.idCategoria}>
                            {opcao.nomeCategoria}
                        </option>
                    )

                })}

            </select>

        </div>
    );
}

export default SelectGroup