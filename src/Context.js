/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext,useEffect,useState } from "react"
import {data} from './data.js';
import _, { filter } from "lodash";

export const ContextAPI = createContext()



export const MenuProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState(null);
  const [refineBy, setRefineBy] = useState([]);
  const [localRefineBy, setLocalRefineBy] = useState([]);
  const [size, setSize] = useState([]);
  const [localSize, setLocalSize] = useState([]);
  const [localColor, setLocalColor] = useState([]);
  const [color, setColor] = useState([]);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [sort, setSort] = useState([]);
  const [tags, setTags] = useState("");

  let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(data), 10);
  });

  useEffect(async () => {
    const result = await promise
    setFilterProducts(result.product)
    setProducts(result.product)
  },[]);

  useEffect(() => {
    if(search.length){
      setFilterProducts([...products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))])
    }else{
      setFilterProducts([...products])
    }
 }, [search]);

  const handleSearch = (e) => {
    setRefineBy("")
    setColor("")
    setSize("")
    setSort("Default")
    e.preventDefault();
    setSearch(e.target.value) 
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.value) 
    // searchSubmit()
  }

  useEffect(() => {
      console.log(categories)
      setFilterProducts([...products.filter(product => product.category.includes(categories))])
      console.log(filterProducts)
  }, [categories]);

  const handleCategories = (e) => {
  
    setRefineBy("")
    setSearch("") 
    setColor("")
    setSize("")
    e.preventDefault();
    // e.stopPropagation();
    setCategories(e.currentTarget.getAttribute('data-value')) 
  }

  useEffect(() => {
    console.log(localRefineBy)
    if(localRefineBy.length) {
      setFilterProducts([...products.filter(product => 
        localRefineBy.some(element => product.stock.includes(element)))])
    }else {
      setFilterProducts([...products])
    }
    console.log(filterProducts)
  }, [localRefineBy]);

  const handleRefineCategories = (e) => {
    setRefineBy("")
    setSearch("") 
    setColor("")
    setSize("")
    setCategories("") 
    setSort("Default")
    let localCategories = [...refineBy];
    if (localCategories.find(category => category === e.target.value) !== undefined) {
        // eslint-disable-next-line no-const-assign
        localCategories = localCategories.filter(category => category !== e.target.value)
    }else{
        // eslint-disable-next-line no-const-assign
        localCategories = [...refineBy, e.target.value]
    }
    setRefineBy([...localCategories])
    setLocalRefineBy([...localCategories])
  }
  
  useEffect(() => {
    if(localSize.length) {
      setFilterProducts([...products.filter(product => 
        size.some(element => product.size.includes(element)))])
    }else {
      setFilterProducts([...products])
    }
  }, [localSize]);

  const handleSize = (e) => {
    setRefineBy("")
    setSearch("") 
    setColor("")
    setCategories("") 
    setSort("Default")
    let localSize = [...size];
    if (localSize.find(category => category === e.target.value) !== undefined) {
        // eslint-disable-next-line no-const-assign
        localSize = localSize.filter(category => category !== e.target.value)
    }else{
        // eslint-disable-next-line no-const-assign
        localSize = [...size, e.target.value]
    }
    setSize([...localSize])
    setLocalSize([...localSize])
  }

  useEffect(() => {
    if(localColor.length) {
      setFilterProducts([...products.filter(product => 
        color.some(element => product.color.includes(element.toLowerCase())))])
    }else {
      setFilterProducts([...products])
    }
  }, [localColor]);

  const handleColor = (e) => {
    setRefineBy("")
    setSearch("") 
    setColor("")
    setSize("")
    setCategories("") 
    setSort("Default")
    let localColors = [...color];
    if (localColors.find(localColor => localColor === e.target.value) !== undefined) {
        // eslint-disable-next-line no-const-assign
        localColors = localColors.filter(localColor => localColor !== e.target.value)
    }else{
        // eslint-disable-next-line no-const-assign
        localColors = [...color, e.target.value]
    }
    setColor([...localColors])
    setLocalColor([...localColors])
  }
  useEffect(() => {
    console.log(tags)
    setFilterProducts([...products.filter(product => product.tags.includes(tags))])
    console.log(tags)
  }, [tags]);

  const handleTags = (e) => {
    setRefineBy("")
    setSearch("") 
    setColor("")
    setSize("")
    setCategories("") 
    setSort("Default")
    setTags(e.currentTarget.getAttribute('data-value')) 
  }

  useEffect(() => {
    if(sort === "price" ) {
      setFilterProducts([...filterProducts.sort((a,b) =>  parseFloat(a.price) - parseFloat(b.price))])
    }else{
      setFilterProducts([...filterProducts.sort(function(a, b){
        if(a.title < b.title) { return -1; }
        if(a.title > b.title) { return 1; }
        return 0;
    })])
    }
  }, [sort]);

const addToCart = (id, color, size , qty) => {

    color =  color === undefined ?  'red': color ;
    size =  size === undefined ? 'M' : size ;
    qty =  qty === undefined ? 1 : qty;

    // const check = cart.every(item => {
    //     // eslint-disable-next-line no-undef
    //     // eslint-disable-next-line no-unused-expressions
    //     item.id !== id
    // })

    const check = cart.find(
      (product) => product.id === id);

    if(!check){
        let tempProducts = _.cloneDeep(products);
        console.log(tempProducts)
        const index = tempProducts.indexOf(tempProducts.find(item => item.id === id))
        console.log(index)
        const product = tempProducts[index];
        product.qty = qty;
        product.size = size;
        product.color = color;
        setCart([...cart, {...product } ])
    }else{
        alert("The product has been added to cart.")
    }
};

  return (
    <ContextAPI.Provider value={{search,setSearch,sort,setSort,handleTags,filterProducts,setFilterProducts,products,cart,addToCart,handleColor,color,handleSearch,size,categories,handleSize,handleCategories,handleRefineCategories,refineBy,setRefineBy,handleSearchSubmit}}>
      {children}
    </ContextAPI.Provider>
  );
};