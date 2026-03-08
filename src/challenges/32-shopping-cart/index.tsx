import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

// TODO: Implement CartProvider with add, remove, updateQuantity, and total
export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addItem = (product) => {
    // TODO: Add item or increment quantity if already in cart
  }

  const removeItem = (id) => {
    // TODO: Remove item from cart
  }

  const updateQuantity = (id, quantity) => {
    // TODO: Update quantity for a specific item
  }

  const total = 0 // TODO: Calculate total price

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}

const PRODUCTS = [
  { id: 1, name: 'React T-Shirt', price: 25 },
  { id: 2, name: 'JS Mug', price: 15 },
  { id: 3, name: 'Code Stickers', price: 5 },
]

function ProductList() {
  const { addItem } = useCart()
  return (
    <div>
      <h3>Products</h3>
      {PRODUCTS.map((p) => (
        <div key={p.id}>
          <span>{p.name} - ${p.price}</span>
          <button onClick={() => addItem(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

function Cart() {
  const { items, removeItem, updateQuantity, total } = useCart()
  return (
    <div>
      <h3>Cart</h3>
      {items.length === 0 && <p>Cart is empty</p>}
      {items.map((item) => (
        <div key={item.id}>
          <span>{item.name} × {item.quantity} = ${item.price * item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <p>Total: ${total}</p>
    </div>
  )
}

export default function ShoppingCart() {
  return (
    <CartProvider>
      <h2>Shopping Cart</h2>
      <ProductList />
      <Cart />
    </CartProvider>
  )
}
