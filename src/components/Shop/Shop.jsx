import React, { useEffect, useState } from 'react';
import Product1 from '../Product1/Product1';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {

    const [products, setproducts] = useState([]);
    const [cart,setcart] = useState([])

    useEffect(() => {
        fetch(' https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, []);

        useEffect( ()=>{
      const storedCart = getShoppingCart();
      const savedCart = [];
      //step 1 id of the soter product

      for(const id in storedCart){
        // get product from products state by using id
          const addedproduct = products.find(product => product.id === id);
          if(addedproduct){
            const quantity = storedCart[id];
            addedproduct.quantity = quantity;
            savedCart.push(addedproduct);
          }
        //   console.log('added product', addedproduct)
      }
        setcart(savedCart);
        },[products])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setcart(newCart);
        addToDb(product.id);
     }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product1
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product1>)
                }
            </div>
            <div className="cart-container">
             <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;