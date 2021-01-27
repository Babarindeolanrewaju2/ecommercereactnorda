/* eslint-disable jsx-a11y/anchor-is-valid */
import  { ContextAPI } from './Context';
import React, { useContext } from "react"

const Search = () => {
    const {search,handleSearchSubmit,refineBy, color,handleTags, handleColor, handleSize,size,handleRefineCategories,handleCategories,handleSearch} = useContext(ContextAPI)

    return (
        <>
        <div className="col-lg-3">
                <div className="sidebar-wrapper sidebar-wrapper-mrg-left">
                    <div className="sidebar-widget mb-40">
                        <h4 className="sidebar-widget-title">Search </h4>
                        <div className="sidebar-search">
                            <form className="sidebar-search-form" action="#">
                                <input type="text" value={search} onChange={e => handleSearch(e)} placeholder="Search here..." />
                                <button>
                                    <i className="icon-magnifier" onClick={e => handleSearchSubmit(e)}></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="sidebar-widget shop-sidebar-border mb-35 pt-40">
                        <h4 className="sidebar-widget-title">Categories </h4>
                        <div className="shop-catigory">
                            <ul>
                                <li><a data-value="T-Shirt" onClick={e => handleCategories(e)}>T-Shirt</a></li>
                                <li><a data-value="Shoes" onClick={e => handleCategories(e)}>Shoes</a></li>
                                <li><a data-value="Clothing" onClick={e => handleCategories(e)}>Clothing </a></li>
                                <li><a data-value="Women" onClick={e => handleCategories(e)}>Women </a></li>
                                <li><a data-value="Baby Boy" onClick={e => handleCategories(e)}>Baby Boy </a></li>
                                <li><a data-value="Accessories" onClick={e => handleCategories(e)}>Accessories </a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="sidebar-widget shop-sidebar-border mb-40 pt-40">
                        <h4 className="sidebar-widget-title">Refine By </h4>
                        <div className="sidebar-widget-list">
                            <ul>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="On Sale" checked={refineBy.includes("On Sale")}
                                        onClick={handleRefineCategories}
                                        onChange={e => e.stopPropagation()}/> <a >On Sale <span>4</span> </a>
                                        <span className="checkmark"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="New" checked={refineBy.includes("New")}
                                        onClick={e => handleRefineCategories(e)}
                                        onChange={e => e.stopPropagation()}/> <a >New <span>5</span></a>
                                        <span className="checkmark"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left"> 
                                    <input type="checkbox" value="In Stock" checked={refineBy.includes("In Stock")}
                                    onClick={e => handleRefineCategories(e)}
                                    onChange={e => e.stopPropagation()}/> <a >In Stock <span>6</span> </a>
                                        <span className="checkmark"></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar-widget shop-sidebar-border mb-40 pt-40">
                        <h4 className="sidebar-widget-title">Size </h4>
                        <div className="sidebar-widget-list">
                            <ul>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="XL" checked={size.includes("XL")}
                                        onClick={e => handleSize(e)}
                                        onChange={e => e.stopPropagation()}/> <a >XL <span>4</span> </a>
                                        <span className="checkmark"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="L" checked={size.includes("L")}
                                        onClick={e => handleSize(e)}
                                        onChange={e => e.stopPropagation()}/> <a >L <span>5</span> </a>
                                        <span className="checkmark"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox"  value="SM" checked={size.includes("SM")}
                                        onClick={e => handleSize(e)}
                                        onChange={e => e.stopPropagation()}/> <a >SM <span>6</span> </a>
                                        <span className="checkmark"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox"  value="XXL" checked={size.includes("XXL")}
                                        onClick={e => handleSize(e)}
                                        onChange={e => e.stopPropagation()}/> <a >XXL <span>7</span> </a>
                                        <span className="checkmark"></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar-widget shop-sidebar-border mb-40 pt-40">
                        <h4 className="sidebar-widget-title">Color </h4>
                        <div className="sidebar-widget-list">
                            <ul>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="Azalea" checked={color.includes("Azalea")}
                                        onClick={e => handleColor(e)}
                                        onChange={e => e.stopPropagation()}/> <a >Azalea <span>7</span> </a>
                                        <span className="checkmark"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="White" checked={color.includes("White")}
                                        onClick={e => handleColor(e)}
                                        onChange={e => e.stopPropagation()}/> <a >White <span>8</span> </a>
                                        <span className="checkmark"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="Dolly" checked={color.includes("Dolly")}
                                        onClick={e => handleColor(e)}
                                        onChange={e => e.stopPropagation()}/> <a >Dolly <span>9</span> </a>
                                        <span className="checkmark"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="Cupid" checked={color.includes("Cupid")}
                                        onClick={e => handleColor(e)}
                                        onChange={e => e.stopPropagation()}/> <a >Cupid <span>3</span> </a>
                                        <span className="checkmark"></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar-widget shop-sidebar-border pt-40">
                        <h4 className="sidebar-widget-title">Popular Tags</h4>
                        <div className="sidebar-widget-tag">
                            <ul>
                                <li><a data-value="Clothing" onClick={e => handleTags(e)}>Clothing</a></li>
                                <li><a data-value="Accessories" onClick={e => handleTags(e)}>Accessories</a></li>
                                <li><a data-value="For Men" onClick={e => handleTags(e)}>For Men</a></li>
                                <li><a data-value="Women" onClick={e => handleTags(e)}>Women</a></li>
                                <li><a data-value="Fashion" onClick={e => handleTags(e)}>Fashion</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
