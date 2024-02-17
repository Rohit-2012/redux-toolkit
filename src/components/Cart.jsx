import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from './CartCard'

const Cart = () => {
  const cartProduct = useSelector(state=> state.cart)
  return (
    <div className='px-6 py-4'>
      <h1 className='text-center text-2xl font-bold my-4'>My Shopping Cart</h1>
      <div className="grid grid-cols-1 place-content-center sm:grid-cols-5  gap-5">
        {
          cartProduct.map(product => {
            return <CartCard key={product.id} product={product} />
          }) 
        }
      </div>
    </div>
  )
}

export default Cart
