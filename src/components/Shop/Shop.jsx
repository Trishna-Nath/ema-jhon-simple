import React, { useEffect, useState } from 'react';
import './Shop.css'

  const Shop =() =>{

   const [products,setproducts] = useState([]);

   useEffect(() =>{
          fetch(' https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
          .then(res => res.json())
          .then(data => setproducts(data))
   },[])
  
      
    return (
        <div className='shop-container'>
          <div className="products-container">
            <h2>products comming here: {products.length}</h2>
            </div>  
            <div className="cart-container">
             <h4>order summary</h4>

            </div>
        </div>
    );
};

export default Shop;