/* eslint-disable jsx-a11y/anchor-is-valid */
import  { ContextAPI } from './Context';
import React, { useContext } from "react"

const Cart = () => {
    const {cart, clearCart,removeItemFromBasket } = useContext(ContextAPI)

    return (
        <div>
        <div class="cart-main-area pt-115 pb-120">
        <div class="container">
            <h3 class="cart-page-title">Your cart items</h3>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <form action="#">
                        <div class="table-content table-responsive cart-table-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Name</th>
                                        <th>Until Price</th>
                                        <th>Qty</th>
                                        <th>Subtotal</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {cart?.map((product) => (
                                    <>
                                    <tr>
                                        <td class="product-thumbnail">
                                            <a ><img src={"assets/images/cart/cart-1.jpg"} alt=""/></a>
                                        </td>
                                        <td class="product-name"><a >{product.title}</a></td>
                                        <td class="product-price-cart"><span class="amount">${product.unitprice}</span></td>
                                        <td class="product-quantity pro-details-quality">
                                            <div class="cart-plus-minus">
                                                <input class="cart-plus-minus-box" type="text" name="qtybutton" value={product.qty} />
                                            </div>
                                        </td>
                                        <td class="product-subtotal">${product.price}</td>
                                        <td class="product-remove">
                                            <a onClick={e => removeItemFromBasket(product.id)}><i class="icon_close"></i></a>
                                        </td>
                                    </tr>
                                    </>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="cart-shiping-update-wrapper">
                                    <div class="cart-shiping-update">
                                        <a href="#">Continue Shopping</a>
                                    </div>
                                    <div class="cart-clear">
                                        <a onClick={clearCart}>Clear Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Cart
