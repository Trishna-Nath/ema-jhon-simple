import React, { useEffect, useState } from 'react';
import Product1 from '../Product1/Product1';
import './Shop.css'

const Shop = () => {

    const [products, setproducts] = useState([]);

    useEffect(() => {
        fetch(' https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product1
                        key={product.id}
                        product={product}
                    ></Product1>)
                }
            </div>
            <div className="cart-container">
                <h4>order summary</h4>

            </div>
        </div>
    );
};

export default Shop;