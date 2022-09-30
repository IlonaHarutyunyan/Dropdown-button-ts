import './style.css'
import { useEffect,useState } from 'react'
import { getData, DataProps } from '../Data';

export const Label: React.FC = () => {
    const [products,setProducts] = useState([])
    const [data,setData] = useState([])

    useEffect(()=>{
        getData(setData);
    },[])
    return(
        <>
            <div className = 'label-wrapper'>
                <ul>
                    <li
                        onClick = {() => {
                            const mensClothing = data.filter(
                                (el:DataProps) => el.category === "men's clothing"
                            )
                            setProducts(mensClothing) 
                        }}
                    >men's clothing</li>
                    <li
                        onClick = {() => {
                            const jewelery = data.filter(
                                (el:DataProps) => el.category === "jewelery"
                            )
                            setProducts(jewelery) 
                        }}
                    >jewelery</li>
                    <li
                        onClick = {() => {
                            const electronics = data.filter(
                                (el:DataProps) => el.category === "electronics"
                            )
                            setProducts(electronics) 
                        }}
                    >electronics</li>
                    <li
                        onClick = {() => {
                            const womensClothing = data.filter(
                                (el:DataProps) => el.category === "women's clothing"
                            )
                            setProducts(womensClothing) 
                        }}
                    >women's clothing</li>
                </ul>
            </div>
            <div>
                {products && products.map((el:DataProps, index: number) => {
                    console.log(products)
                    return(
                        <>
                            <div className = 'page-wrapper'>
                                <div key = {el.id + index} className = 'product-wrapper'>
                                    <div className = 'title-image-wrapper'>
                                        <div>
                                            <img src = {el.image}/> 
                                        </div>
                                        <h1 className = 'title-style'>
                                            {el.title}
                                        </h1>
                                    </div>
                                    
                                    <div>
                                        <div className = 'description-style'>
                                            {el.description}
                                        </div>
                                        <div className = 'price-style'>
                                            {el.price}$
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}