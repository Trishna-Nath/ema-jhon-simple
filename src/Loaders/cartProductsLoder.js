import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async() =>{
   const loadedProducts = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');

   const products = await loadedProducts.json();

     // if cart data is in database, you have to use async await

  const storedCart = getShoppingCart();

  const savedCart = [];

  console.log(storedCart);
   for(const id in storedCart){
    const addedProduct = products.find(pd => pd.id === id);
    if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
    }
   }

   //if you need to send two things
   return savedCart;
}

export default cartProductLoader;