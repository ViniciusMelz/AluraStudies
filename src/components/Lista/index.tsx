import Style from'./Lista.module.scss';
import Item from "./Item";
import { ITarefa } from '../../types/tarefas';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({tarefas, selecionaTarefa}: Props){    
    return(
        <aside className={Style.listaTarefas}>
            <h2>Estudo do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item 
                        selecionaTarefa = {selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;