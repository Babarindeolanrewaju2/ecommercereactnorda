/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext,useEffect,useState } from "react"
import { ContextAPI } from './Context';
import {  useLocation
} from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  

const ProductDetails = ({ match, location }) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let query = useQuery()
    const {products, addToCart} = useContext(ContextAPI)
    const [singleProduct, setSingleProduct] = useState([])

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
       const data = products.filter(product =>{
            return product.id === parseInt(query.get("id"))
        })
        console.log(data)
        setSingleProduct(data)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [products, setSingleProduct, query.get("id")]);
    // eslint-disable-next-line no-unused-vars
    const [color, setColor] = useState(null);
    const [size, setSize] = useState(null);
    const [qty, setQty] = useState(null);
    
    const handleSize = (e) => {
        e.preventDefault();
        setSize(e.currentTarget.getAttribute('data-value')) 
        console.log(size)
    }

    const handleQty = (e) => {
        e.preventDefault();
        setQty(e.target.value) 
        console.log(qty)
    }

    const handleColor = (e) => {
        e.preventDefault();
        setColor(e.target.value) 
        console.log(qty)
    }

    const handleAddToCart = (id) =>{
        // eslint-disable-next-line no-use-before-define
        if(color===null)
        {
            alert("Please add a color")
        }else if(size===null)
        {
            alert("Please add a size")
        }
        else if(qty===null)
        {
            alert("Please add a qty")
        }else{
            addToCart(id,color, size, qty) 
        }
    }

    return (
        <>
        <div className="product-details-area pt-120 pb-115">
        <div className="container">
            <div className="row">
            {singleProduct?.map((product) => (
                <>
                <div className="col-lg-6 col-md-6">
                    <div className="product-details-tab">
                        <div className="pro-dec-big-img-slider">
                            <div className="easyzoom-style">
                                <div className="easyzoom easyzoom--overlay">
                                    <a href="assets/images/product-details/b-large-1.jpg">
                                        <img src="assets/images/product-details/large-1.jpg" alt="" />
                                    </a>
                                </div>
                                <a className="easyzoom-pop-up img-popup" href="assets/images/product-details/b-large-1.jpg"><i className="icon-size-fullscreen"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="product-details-content pro-details-content-mrg">
                        <h2>{product.title}</h2>
                        <div className="product-ratting-review-wrap">
                            <div className="product-ratting-digit-wrap">
                                <div className="product-ratting">
                                    <i className="icon_star"></i>
                                    <i className="icon_star"></i>
                                    <i className="icon_star"></i>
                                    <i className="icon_star"></i>
                                    <i className="icon_star"></i>
                                </div>
                                <div className="product-digit">
                                    <span>5.0</span>
                                </div>
                            </div>
                            <div className="product-review-order">
                                <span>{product.reviews} Reviews</span>
                                <span>242 orders</span>
                            </div>
                        </div>
                        <p>Seamlessly predominate enterprise metrics without performance based process improvements.</p>
                        <div className="pro-details-price">
                            <span className="new-price">${product.price}</span>
                            <span className="old-price">$95.72</span>
                        </div>
                        <div className="pro-details-color-wrap">
                            <span>Color:</span>
                            <div className="pro-details-color-content">
                                <ul>
                                {product?.color?.map((color) => (
                                    <>
                                        <li><a className={color} onClick={e => handleColor(e)}>{color}</a></li>
                                    </>
                                ))}
                                </ul>
                            </div>
                        </div>
                        <div className="pro-details-size">
                            <span>Size:</span>
                            <div className="pro-details-size-content">
                                <ul>
                                {product?.size?.map((size) => (
                                    <>
                                        <li><a data-value={size} onClick={e => handleSize(e)}>{size}</a></li>
                                        </>
                                ))}
                                </ul>
                            </div>
                        </div>
                        <div className="pro-details-quality">
                            <span>Quantity:</span>
                            <div className="cart-plus-minus">
                                <input type="text" name="qtybutton" value={qty} onChange={e => handleQty(e)}/>
                            </div>
                        </div>
                        <div className="product-details-meta">
                            <ul>
                                <li><span>Categories:</span> 
                                {product?.category?.map((category) => (
                                    <a >{category}{" "}</a>
                                ))}</li>
                                <li><span>Tag: </span> <a href="!#">Fashion,</a> <a href="!#">Mentone</a> , <a href="!#">Texas</a></li>
                            </ul>
                        </div>
                        <div className="pro-details-action-wrap">
                            <div className="pro-details-add-to-cart">
                                <a title="Add to Cart" onClick={e => handleAddToCart(product.id)}>Add To Cart </a>
                            </div>
                            <div className="pro-details-action">
                                <a title="Add to Wishlist" ><i className="icon-heart"></i></a>
                                <div className="product-dec-social">
                                    <a className="facebook" title="Facebook" href="!#"><i className="icon-social-facebook"></i></a>
                                    <a className="twitter" title="Twitter" href="!#"><i className="icon-social-twitter"></i></a>
                                    <a className="instagram" title="Instagram" href="!#"><i className="icon-social-instagram"></i></a>
                                    <a className="pinterest" title="Pinterest" href="!#"><i className="icon-social-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </>
                ))}
            </div>
        </div>
    </div>
    <div className="description-review-wrapper pb-110">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="dec-review-topbar nav mb-45">
                        <a className="active" data-toggle="tab" href="#des-details1">Description</a>
                        <a data-toggle="tab" href="#des-details2">Specification</a>
                        <a data-toggle="tab" href="#des-details3">Meterials </a>
                        <a data-toggle="tab" href="#des-details4">Reviews and Ratting </a>
                    </div>
                    <div className="tab-content dec-review-bottom">
                        <div id="des-details1" className="tab-pane active">
                            <div className="description-wrap">
                                <p>Crafted in premium watch quality, fenix Chronos is the first Garmin timepiece to combine a durable metal case with integrated performance GPS to support navigation and sport. In the tradition of classic tool watches it features a tough design and a set of modern meaningful tools.</p>
                                <p> advanced performance metrics for endurance sports, Garmin quality navigation features and smart notifications. In fenix Chronos top-tier performance meets sophisticated design in a highly evolved timepiece that fits your style anywhere, anytime. Solid brushed 316L stainless steel case with brushed stainless steel bezel and integrated EXOTM antenna for GPS + GLONASS support. High-strength scratch resistant sapphire crystal. Brown vintage leather strap with hand-sewn contrast stitching and nubuck inner lining and quick release mechanism.</p>
                            </div>
                        </div>
                        <div id="des-details2" className="tab-pane">
                            <div className="specification-wrap table-responsive">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="title width1">Name</td>
                                            <td>Salwar Kameez</td>
                                        </tr>
                                        <tr>
                                            <td className="title width1">SKU</td>
                                            <td>0x48e2c</td>
                                        </tr>
                                        <tr>
                                            <td className="title width1">Models</td>
                                            <td>FX 829 v1</td>
                                        </tr>
                                        <tr>
                                            <td className="title width1">Categories</td>
                                            <td>Digital Print</td>
                                        </tr>
                                        <tr>
                                            <td className="title width1">Size</td>
                                            <td>60’’ x 40’’</td>
                                        </tr>
                                        <tr>
                                            <td className="title width1">Brand </td>
                                            <td>Individual Collections</td>
                                        </tr>
                                        <tr>
                                            <td className="title width1">Color</td>
                                            <td>Black, White</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div id="des-details3" className="tab-pane">
                            <div className="specification-wrap table-responsive">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="title width1">Top</td>
                                            <td>Cotton Digital Print Chain Stitch Embroidery Work</td>
                                        </tr>
                                        <tr>
                                            <td className="title width1">Bottom</td>
                                            <td>Cotton Cambric</td>
                                        </tr>
                                        <tr>
                                            <td className="title width1">Dupatta</td>
                                            <td>Digital Printed Cotton Malmal With Chain Stitch</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div id="des-details4" className="tab-pane">
                            <div className="review-wrapper">
                                <h2>1 review for Sleeve Button Cowl Neck</h2>
                                <div className="single-review">
                                    <div className="review-img">
                                        <img src="assets/images/product-details/client-1.png" alt="" />
                                    </div>
                                    <div className="review-content">
                                        <div className="review-top-wrap">
                                            <div className="review-name">
                                                <h5><span>John Snow</span> - March 14, 2019</h5>
                                            </div>
                                            <div className="review-rating">
                                                <i className="yellow icon_star"></i>
                                                <i className="yellow icon_star"></i>
                                                <i className="yellow icon_star"></i>
                                                <i className="yellow icon_star"></i>
                                                <i className="yellow icon_star"></i>
                                            </div>
                                        </div>
                                        <p>Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ratting-form-wrapper">
                                <span>Add a Review</span>
                                <p>Your email address will not be published. Required fields are marked <span>*</span></p>
                                <div className="ratting-form">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="rating-form-style mb-20">
                                                    <label>Name <span>*</span></label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="rating-form-style mb-20">
                                                    <label>Email <span>*</span></label>
                                                    <input type="email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="star-box-wrap">
                                                    <div className="single-ratting-star">
                                                        <a href="!#"><i className="icon_star"></i></a>
                                                    </div>
                                                    <div className="single-ratting-star">
                                                        <a href="!#"><i className="icon_star"></i></a>
                                                        <a href="!#"><i className="icon_star"></i></a>
                                                    </div>
                                                    <div className="single-ratting-star">
                                                        <a href="!#"><i className="icon_star"></i></a>
                                                        <a href="!#"><i className="icon_star"></i></a>
                                                        <a href="!#"><i className="icon_star"></i></a>
                                                    </div>
                                                    <div className="single-ratting-star">
                                                        <a href="!#"><i className="icon_star"></i></a>
                                                        <a href="!#"><i className="icon_star"></i></a>
                                                        <a href="!#"><i className="icon_star"></i></a>
                                                        <a href="!#"><i className="icon_star"></i></a>
                                                    </div>
                                                    <div className="single-ratting-star">
                                                        <a href="!#"><i className="icon_star"></i></a>
                                                        <a href="!#"><i className="icon_star"></i></a>
                                                        <a href="!#"><i className="icon_star"></i></a>
                                                        <a href="!#"><i className="icon_star"></i></a>
                                                        <a href="!#"><i className="icon_star"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="rating-form-style mb-20">
                                                    <label>Your review <span>*</span></label>
                                                    <textarea name="Your Review"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-submit">
                                                    <input type="submit" value="Submit" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default ProductDetails
