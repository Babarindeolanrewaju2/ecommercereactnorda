import React from 'react'
import {
    Link
  } from "react-router-dom";

import  { ContextAPI } from './Context';
import { useContext } from "react"

const Header = () => {
    const {cart } = useContext(ContextAPI)

    return (
        <div>
        <header class="header-area">
        <div class="container">
            <div class="header-large-device">
                <div class="header-top header-top-ptb-1 border-bottom-1">
                    <div class="row">
                        <div class="col-xl-4 col-lg-5">
                            <div class="header-offer-wrap">
                                <p><i class="icon-paper-plane"></i> FREE SHIPPING world wide for all orders over <span>$199</span></p>
                            </div>
                        </div>
                        <div class="col-xl-8 col-lg-7">
                            <div class="header-top-right">
                                <div class="same-style-wrap">
                                    <div class="same-style same-style-border track-order">
                                        <a >Track Your Order</a>
                                    </div>
                                    <div class="same-style same-style-border language-wrap">
                                        <a class="language-dropdown-active" >English <i class="icon-arrow-down"></i></a>
                                        <div class="language-dropdown">
                                            <ul>
                                                <li><a >English</a></li>
                                                <li><a >French</a></li>
                                                <li><a >German</a></li>
                                                <li><a >Spanish</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="same-style same-style-border currency-wrap">
                                        <a class="currency-dropdown-active" >US Dollar <i class="icon-arrow-down"></i></a>
                                        <div class="currency-dropdown">
                                            <ul>
                                                <li><a >USD</a></li>
                                                <li><a >EUR</a></li>
                                                <li><a >Real</a></li>
                                                <li><a >BDT</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="social-style-1 social-style-1-mrg">
                                    <a ><i class="icon-social-twitter"></i></a>
                                    <a ><i class="icon-social-facebook"></i></a>
                                    <a ><i class="icon-social-instagram"></i></a>
                                    <a ><i class="icon-social-youtube"></i></a>
                                    <a ><i class="icon-social-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-bottom">
                    <div class="row align-items-center">
                        <div class="col-xl-8 col-lg-7">
                            <div class="main-menu main-menu-padding-1 main-menu-lh-1">
                                <nav>
                                    <ul>
                                        <li><Link to="/" ><a >HOME </a></Link>
                                        </li>
                                        <li><a >SHOP </a>
                                        </li>
                                        <li><a >PAGES </a>
                                        </li>
                                        <li><a >BLOG </a>
                                        </li>
                                        <li><a>CONTACT </a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-3">
                            <div class="header-action header-action-flex header-action-mrg-right">

                                <div class="same-style-2">
                                    <a><i class="icon-user"></i></a>
                                </div>
                                <div class="same-style-2">
                                    <a ><i class="icon-heart"></i><span class="pro-count red"></span></a>
                                </div>
                                <div class="same-style-2 header-cart">
                                <Link to="/cart" >
                                    <a class="cart-active" >
                                        <i class="icon-basket-loaded"></i><span class="pro-count red">{cart.length}</span>
                                    </a>
                                    </ Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-small-device small-device-ptb-1">
                <div class="row align-items-center">
                    <div class="col-5">
                        <div class="mobile-logo">
                            <a>
                                <img alt="" src="assets/images/logo/logo.png" />
                            </a>
                        </div>
                    </div>
                    <div class="col-7">
                        <div class="header-action header-action-flex">
                            <div class="same-style-2">
                                <a ><i class="icon-user"></i></a>
                            </div>
                            <div class="same-style-2">
                                <a ><i class="icon-heart"></i><span class="pro-count red">03</span></a>
                            </div>
                            <div class="same-style-2 header-cart">
                                <a class="cart-active" >
                                    <i ></i><span class="pro-count red">02</span>
                                </a>
                            </div>
                            <div class="same-style-2 main-menu-icon">
                                <a class="mobile-header-button-active" ><i class="icon-menu"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
        </div>
    )
}

export default Header
