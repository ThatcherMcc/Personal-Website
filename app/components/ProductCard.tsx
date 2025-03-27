import React from 'react'
import AddToCart from './AddToCart';

const ProductCard = () => {
  return (
    <div className='p-5 my-5 bg-green-600 text-white text-3xl hover:bg-sky-300'>
        <AddToCart />
    </div>
  )
}

export default ProductCard