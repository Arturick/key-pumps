import './FilterList.scss';
import { Tag, Select } from 'antd';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import EmptyList from '../Placeholders/EmptyList/EmptyList';
import DefaultLoader from '../Loaders/DefaultLoader/DefaultLoader';
import Button from '../Button/Button';
const {Option} = Select;



const FilterList = ({list, chips, removeFilter, loading, setSorting, showMore, totalLength, setOffset, btnDis, fns}) => {

    // const [showList, setShowList] = useState([]);
    // const [count, setCount] = useState(12);

    

    // useEffect(() => {
    //     console.log(count)
    // }, [count])
    
    // useEffect(() => {
    //     if(list?.length > 0) {
    //         setShowList(list.slice(0, count))
    //     }

    // }, [list, count])

 




    const sortHandle = (value) => {
        setSorting(value);
    }


    const handleMore = () => {
        setOffset(state => state + 12);
    }
    

    return (
        <div className="FilterList">
            <div className="FilterList__top">
                <ul className="FilterList__top_list">
                    {
                        chips?.length > 0 ? (
                            chips.map((item, index) => (
                                <Tag className='FilterList__top_list_item' closable onClose={() => removeFilter(item)} color='gold' key={index}>{item}</Tag>
                            ))
                        ) : null
                    }
                    
                </ul>
                <div className="FilterList__top_sort">
                    <Select onChange={sortHandle} className='FilterList__top_sort_select' defaultValue={1}>
                        <Option value={1}>по умолчанию</Option>  
                        <Option value={2}>цена по спаду</Option>  
                        <Option value={3}>цена по возрастанию</Option>  
                        
                    </Select>
                </div>
            </div>
            <div className="FilterList__body">
                {
                    loading ? (
                        <DefaultLoader/>
                    ) : (
                        list?.length > 0 ? (
                            list.map((item, index) => (
                                <div className="FilterList__body_item" key={index}>
                                    <Product 
                                        price={item.price}
                                        title={item.title}
                                        productImages={item.productImages}
                                        discount={item.discountPrice}
                                        top={item.topSales}
                                        />
                                </div>
                            ))
                        ) : <EmptyList text={'Ничего не найдено'}/>
                    )
                    
                }
                
                
            </div>
            {
                fns  ? (
                    null
                ) : (
                    <div className="FilterList__action">
                        <Button
                            load={btnDis}
                            
                            text={'Показать еще'}
                            variant={'warning'}
                            onClick={handleMore}/>
                    </div>  
                )
            }
            
            
            
        </div>
    )
}


export default FilterList;
