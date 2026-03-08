import '../../styles/components/inputs/selectGroup.css'

function SelectGroup({label,id,options,className,classNameInput,value,onChange}){
    return(
        <div className={`containerSelect ${className}`}>
            <label htmlFor={id}>{label}</label>

            <select
                name={id}
                id={id}
                value={value}
                onChange={onChange}
                className={`container ${classNameInput}`}
            >
                
                {options.map((opcao, index) => (
                    <option key={index} value={opcao}>
                        {opcao}
                    </option>
                ))}

            </select>

        </div>
    );
}

export default SelectGroup