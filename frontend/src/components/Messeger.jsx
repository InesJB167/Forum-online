import { DotIcon, LucideThumbsUp, ThumbsDown, UserCircle2, Edit2, Trash2 } from 'lucide-react';
import '../styles/components/messeger.css';
import { useState } from 'react';

function Messeger({ autor, content, tempo, ehUsuario, onEdit, onDelete }){
    const icone = [
        <UserCircle2 size={32} />,
        <DotIcon size={16} />,
        <LucideThumbsUp size={18} />,
        <Edit2 size={18} />,
        <Trash2 size={18} />,
        <ThumbsDown size={18} />
    ];

    const [editando, setEditando] = useState(false);
    const [novoTexto, setNovoTexto] = useState(content);

    const handleSalvar = () => {
        if (onEdit) onEdit(novoTexto);
        setEditando(false);
    };

    const handleCancelar = () => {
        setNovoTexto(content);
        setEditando(false);
    };

    return (
        <div className={`mensagem ${ehUsuario ? 'direita' : 'esquerda'}`}>
            <div className="avatar">
                <label>{icone[0]}</label>
            </div>

            <div className="postContent">
                <div className="autor-conteudo">
                    <label className="autor">
                        {autor} {tempo}
                    </label>

                    {editando ? (
                        <>
                            <input
                                type="text"
                                value={novoTexto}
                                onChange={(e) => setNovoTexto(e.target.value)}
                                className="inputEditar"
                            />
                            <div className="botoesEditar">
                                <button className='btn-edit-delete' onClick={handleSalvar}>{icone[3]}</button>
                                <button className='btn-edit-delete' onClick={handleCancelar}>{icone[4]}</button>
                            </div>
                        </>
                    ) : (
                        <p className="conteudoPost">{content}</p>
                    )}
                </div>

                {/* Ícones de ação (editar / deletar) só aparecem para o dono da mensagem */}
                {ehUsuario && !editando && (
                    <div className="acoesPost">
                        <span onClick={() => setEditando(true)}>{icone[3]}</span>
                        {onDelete && <span onClick={onDelete}>{icone[4]}</span>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Messeger;