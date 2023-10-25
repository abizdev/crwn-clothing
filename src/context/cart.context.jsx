import { createContext, useState, useEffect, useReducer } from "react";


const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

  if(existingCartItem) {
    return cartItems.map((cartItem) => 
      cartItem.id === productToAdd.id 
      ? {...cartItem, quantity: cartItem.quantity + 1}
      : cartItem
    )
  }

  return [...cartItems, {...productToAdd, quantity: 1}]
}
const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)

  if(existingCartItem.quantity == 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map((cartItem) => 
    cartItem.id === cartItemToRemove.id 
    ? {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem
  )

}
const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0
})
export const CART_ACTION_TYPE = {
  ADD_CART_ITEM: 'ADD_CART_ITEM',
  REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
  CLEAR_CART_ITEM: 'CLEAR_CART_ITEM',
}

const cartReducer = (state, action) => {
  const { type, payload } = action
  const { cartItems, cartCount, cartTotal, isCartOpen } = state

  switch(type) {
    case 'SET_CART_ITEMS':
      return {
        ...state,
        ...payload
      }
    case CART_ACTION_TYPE.REMOVE_CART_ITEM:
      removeCartItem(cartItems, payload)
      break
    case CART_ACTION_TYPE.CLEAR_CART_ITEM:
      clearCartItem(cartItems, payload)
      break
    default:
      throw new Error(`Unhandled type ${type} in the cartReducer`)

  }
}

const INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  isCartOpen: false
}

export const CartProvier = ({ children }) => {
  const [ { cartItems, cartCount, cartTotal, isCartOpen }, dispatch ] = useReducer(cartReducer, INITIAL_STATE)

  const updateCardItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
    dispatch({ type: 'SET_CART_ITEMS', payload: {cartItems: newCartItems, cartTotal: newCartTotal, cartCount: newCartCount}})
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    updateCardItemsReducer(newCartItems)
  }
  const removeItemToCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove)
    updateCardItemsReducer(newCartItems)
  }
  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear)
    updateCardItemsReducer(newCartItems)
  }

  const value = { isCartOpen, setIsCartOpen: () => true, addItemToCart, cartItems, cartCount, removeItemToCart, clearItemFromCart, cartTotal }

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}