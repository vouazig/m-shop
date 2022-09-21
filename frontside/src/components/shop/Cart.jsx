import React from 'react';
import {useCart} from "react-use-cart";

const Cart = () => {
  const {isEmpty,items,cartTotal, updateItemQuantity, removeItem, emptyCart} = useCart();

  if (isEmpty) return <h1>Your Card is empty</h1>
  return (
    <section>
      <div className='container'>
        <div>
          <div>
            <table>
              <tbody>
              {items.map((product,index)=>{
                return(
                <tr key={index}>
                     <td>
                      <img src={product.image} alt="" width={"50%"} />
                     </td>
                     <td>{product.title}</td>
                     <td>{product.price}</td>
                     <td>Quantity ({product.quantity})</td>
                     <td>
                      <button onClick={() => updateItemQuantity(product.id, product.quantity + 1)}>+</button>
                      <button onClick={() => updateItemQuantity(product.id, product.quantity - 1)}>-</button>
                      <button onClick={() => removeItem(product.id) }>Remove</button>
                     </td>
                </tr>
              )})

              }
              </tbody>
            </table>
          </div>
          <div>
            <h2>Total price: {cartTotal}</h2>
          </div>
          <div>
            <button onClick={() => emptyCart  ()}>
              clear cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart