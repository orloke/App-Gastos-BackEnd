import * as C from './styles'
import {Item} from '../../types/Item'
import { categories } from '../../data/categories'

type Props = {
    item: Item,
}

export const TableItem = ({item}: Props) =>{
    const BASE_URL = 'http://localhost:5000'

    const deleteItem = async (idregistro:number) =>{
        const requestConfig = {
            method: "DELETE",
        }

        await fetch(`${BASE_URL}/deletar/${idregistro}`, requestConfig)
        window.confirm('Deseja deletar o registro? Essa operação não pode ser desfeita!')
    }

    return(
        <C.TableLine>
            <C.TableColomun>{item.date}</C.TableColomun>
            <C.TableColomun>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>                
            </C.TableColomun>
            <C.TableColomun>{item.title}</C.TableColomun>
            <C.TableColomun>
                <C.Value colorText={categories[item.category].expense}>
                    R$ {item.value.toFixed(2)}
                </C.Value>
            </C.TableColomun>
            <C.TableColomun>
                <C.Option >
                    <C.Button onClick={()=>deleteItem(item.id)} >❌</C.Button>
                </C.Option>
            </C.TableColomun>
        </C.TableLine>

    )
}