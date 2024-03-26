import { useEffect, useState } from "react"
import Product from "./Product"
import Navbar from "./nav"


export default function ProductList (){

    const [productList, setProductList] = useState([])
    // const [category, setCategory] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [selectedCategory, setSelectedCategory] =useState('') 

    const getProduct =()=>{
       fetch('https://fakestoreapi.com/products')
            .then(Response => Response.json())
            .then(response=> setProductList(response)) 
    }
    
    // const getCategory =()=>{
    //     fetch('https://fakestoreapi.com/products/categories')
    //          .then(Response => Response.json())
    //          .then(response=> setCategory(response)) 
    //  }

    useEffect(() =>{
        getProduct()
        // getCategory()
    },[])
    const handleSearch =(e, val)=>{
        e.preventDefault()
        setSearchInput(val)
        setSelectedCategory(undefined )

    }
    const handleSearchC = (e , category)=>{
        e.preventDefault()
        setSelectedCategory(category)
        console.log(category)
    }
    const handleReset=(e) => {
        e.preventDefault()
        setSearchInput('')
        setSelectedCategory(undefined)
    }
    // const displayCategories = ()=>{
    //     return category.map((category,key) => 
    //         <button key={key} className="btn"  onClick={(e) => handleSearchC(e , category)}>
    //             {category}
    //         </button>
            
    // )
    // }
    const displayProduct = ()=>{
            let productsTemp 
            if (searchInput !== (undefined && '')) {
                productsTemp = productList.filter(product =>
                    product.title.includes(searchInput)
                    || product.id.toString().includes(searchInput)
                    || product.description.includes(searchInput)
                )
            }
            if (selectedCategory !== (undefined && 'all')) {
                productsTemp = productsTemp.filter(product => {
                    return product.category === selectedCategory
                })
            }
            if(selectedCategory==='all'){
                return productList.map((product, key)=>{
                    return <Product product={product} key={key} />
                })
            }
            

        if(productsTemp.length > 0){

            return productsTemp.map((product, key)=>{
                return <Product product={product} key={key} />
            })
        }
        return <div className="jumbotron">
                    <div className="container ">
                        <h1 className="display-4">Ooops SORRY !</h1>
                        <p className="lead">No Items are Available For the Moment that Match Your Search</p>
                    </div>
                </div>
    

    }
    return <div>
        <Navbar onSearchClick={handleSearch} onResetClick={handleReset} onSearCateg={handleSearchC}/>
    <div className="container-fluid p-5">

    <h5>Available Products</h5>
    <div className="row align-items-center">
        {displayProduct()}
    
    </div>
   
  
    </ div>
    </div>
}