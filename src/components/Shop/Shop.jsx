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
        let newCart = [];
        // const newCart = [...cart, product];
        //if product does not exist in the cart, then set quantity = 1
        // if exist update the qunatity by 1 
        const exists = cart.find(pd => pd.id == product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart,product]
        }
        else{
           exists.quantity = exists.quantity +1;
           const remaining  = cart.filter(pd => pd.id !== product.id);
           newCart = [...remaining, exists];
        }


        setcart(newCart);
        addToDb(product.id)
     };


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