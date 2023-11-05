import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../store/cart/cart.selector'

import { CardDropdownContianer, EmptyMessage, CartItems } from './cart-dropdown.styles'

const CartDroprdown = () => {
  const { cartItems } = useSelector(selectCartItems)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <CardDropdownContianer>
      <CartItems>
        {
          cartItems.length ? (cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item}/>
          ))) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )
        }
        
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CardDropdownContianer>
  )
}

export default CartDroprdown