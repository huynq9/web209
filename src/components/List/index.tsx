import { ICar } from '@/interface/car'

import Item from '@/components/Item';

type ListProps = {
    data: ICar[],
    onRemove: (id:number) => void
}

const List = ({data, onRemove}: ListProps) => {
    return (
        <ul>
            {data?.map((car) => (
                <Item car={car} key={car.id} onRemove={onRemove}/>
            ))}
            
        </ul>
  )
}

export default List