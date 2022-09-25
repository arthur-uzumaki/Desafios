import { Item } from '../../types/Item'
import { categories } from '../../data/categories'
import * as C from './styles'
import {formattDate} from '../../helpers/dateFilter'

type Props = {
    item: Item
}
export function TableItem ({item}:Props) {
  return( 
    <C.TableLine>
        <C.TableColumn>{formattDate(item.date)}</C.TableColumn>
          <C.TableColumn>
            <C.Category color={categories[item.category].color}>
              {categories[item.category].title}
            </C.Category>
       </C.TableColumn>
       <C.TableColumn>{item.title}</C.TableColumn>
       <C.TableColumn>
          <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
             R$ {item.value}
          </C.Value>
       </C.TableColumn>
    </C.TableLine>
  )
}

