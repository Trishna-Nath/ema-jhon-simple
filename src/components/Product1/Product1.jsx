import React from 'react';
import './Product1.css';

const Product1 = (props) => {
    const {img,name,seller,quantity,price} =props.product;
    return (
        <div className='product'>
         <img src={img} alt="" />
        </div>
    );
};

export default Product1;