# Shopping Cart

## Description

Build a shopping cart with product listing, add/remove functionality, quantity management, and total price calculation using React Context API.

## Requirements

- Display a list of products with name, price, and "Add to Cart" button
- Manage cart state using React Context (CartProvider + useCart)
- Add products to cart; if already in cart, increment quantity
- Remove items from cart
- Increment/decrement item quantity (remove if quantity reaches 0)
- Display cart total price (sum of price × quantity for all items)
- Show "Cart is empty" when no items

## Examples

1. Click "Add to Cart" on "React T-Shirt ($25)" → appears in cart with quantity 1
2. Click "Add to Cart" again → quantity becomes 2, total $50
3. Click "+" → quantity becomes 3, total $75
4. Click "Remove" → item removed, cart empty, total $0
