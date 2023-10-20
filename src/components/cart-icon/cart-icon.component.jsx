import { useContext } from 'react'

import { CartContext } from '../../context/cart.context'

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles'

import ShoppingSvg from '../../assets/shopping-bag.svg'


const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon src={ShoppingSvg} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon