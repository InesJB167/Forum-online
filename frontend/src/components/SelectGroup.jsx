import '../styles/components/selectGroup.css'

function SelectGroup({label,id,option1,option2 ,className}){
    return(
        <div className={`containerSelect ${className}`}>
            <label htmlFor={id}>{label}</label>
            <select name={id} id={id}>
                <option id={id} value={option1}>{option1}</option>
                <option id={id} value={option2}>{option2}</option>
            </select>
        </div>
    );
}

export default SelectGroup