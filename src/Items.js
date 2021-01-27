/* eslint-disable jsx-a11y/anchor-is-valid */
import  { ContextAPI } from './Context';
import React, { useContext,useEffect } from "react"
import {data} from './data.js';
import { Link } from 'react-router-dom';

const Items = () => {
    const {filterProducts, sort, setSort,setFilterProducts, addToCart} = useContext(ContextAPI)

    useEffect(() => {
        const { product } = data
        setFilterProducts(product);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    const handleSort = (e) => {
        setSort(e.target.value)
    }

    return (
        <>
        <div className="col-lg-9">
        <div className="shop-topbar-wrapper">
            <div className="shop-topbar-left">
                <div className="view-mode nav">
                    <a className="active" href="#shop-1" data-toggle="tab"><i className="icon-grid"></i></a>
                    <a href="#shop-2" data-toggle="tab"><i className="icon-menu"></i></a>
                </div>
                <p>Showing 1 - 20 of 30 results </p>
            </div>
            <div className="product-sorting-wrapper">
                <div className="product-show shorting-style">
                    <label>Sort by :</label>
                    <select onChange={handleSort} value={sort}>
                        <option value="Default">Default</option>
                        <option value="title"> title</option>
                        <option value="price"> price</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="shop-bottom-area">
            <div className="tab-content jump">
                <div id="shop-1" className="tab-pane active">
                    <div className="row">
                    {filterProducts?.map((product) => (
                        <>
                        <div key={product.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-product-wrap mb-35">
                                <div className="product-img product-img-zoom mb-15">
                                    <a href="product-details.html">
                                        <img src="assets/images/product/product-13.jpg" alt="" />
                                    </a>
                                    <div className="product-action-2 tooltip-style-2">
                                        <button title="Wishlist"><i className="icon-heart"></i></button>
                                    </div>
                                </div>
                                <div className="product-content-wrap-2 text-center">
                                    <div className="product-rating-wrap">
                                        <div className="product-rating">
                                            <i className="icon_star"></i>
                                            <i className="icon_star"></i>
                                            <i className="icon_star"></i>
                                            <i className="icon_star"></i>
                                            <i className="icon_star gray"></i>
                                        </div>
                                        <span>(2)</span>
                                    </div>
                                    <h3><a> <Link id="RouterNavLink" to={`/productdetails?id=${product.id}`} >{product.title}</Link></a></h3>
                                    <div className="product-price-2">
                                        <span>${product.price}</span>
                                    </div>
                                </div>
                                <div className="product-content-wrap-2 product-content-position text-center">
                                    <div className="product-rating-wrap">
                                        <div className="product-rating">
                                            <i className="icon_star"></i>
                                            <i className="icon_star"></i>
                                            <i className="icon_star"></i>
                                            <i className="icon_star"></i>
                                            <i className="icon_star gray"></i>
                                        </div>
                                        <span>(2)</span>
                                    </div>
                                    <h3><a> <Link id="RouterNavLink"  to={`/productdetails?id=${product.id}`} >{product.title}</Link></a></h3>
                                    <div className="product-price-2">
                                        <span>${product.price}</span>
                                    </div>
                                    <div className="pro-add-to-cart">
                                        <button title="Add to Cart" onClick={e => addToCart(product.id)}>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </>
                        ))}
                    </div>
                </div>
                </div>
        </div>
    </div>
    </>
    )
}

export default Items
