import React, { Component } from 'react'
import ProductService from '../services/ProductService';
import './ListProduct.css';

class ListProductComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            products:[]
        }
        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }
deleteProduct(id){
    ProductService.deleteProduct(id).then( res => {
            this.setState({products: this.state.products.filter(product => product.id !== id)});
        });
    }
    viewProduct(id){
        this.props.history.push(`/view-product/${id}`);
    }
    editProduct(id){
        this.props.history.push(`/add-product/${id}`);
    }

    componentDidMount(){
        ProductService.getProducts().then((res) => {
            this.setState({ products: res.data});
        });
    }

    addProduct(){
        this.props.history.push('/add-product/_add');
    }
   
    render() {
        return (
                <div>
                <nav className="product-filter">

                

                <div className="sort">
                <h1>Our Products</h1>
                <div className="collection-sort">
                    <label>Filter by:</label>
                    <select>
                    <option value="/">All Products</option>
                    <option value="/">Cannabis</option>
                    <option value="/">Coffee</option>
                    </select>
                </div>

                <div className="collection-sort">
                    <label>Sort by:</label>
                    <select>
                    <option value="/">Featured</option>
                    </select>
                </div>

                </div>

                </nav>        
                <section className="products"/>

                {/* <!-- It's likely you'll need to link the card somewhere. You could add a button in the info, link the titles, or even wrap the entire card in an <a href="..."> --> */}
               <div>
               
               
                <div className="product-card">
                    {this.state.products.map(
                                        product => 
                                                <div key={product.id}>

                                                    <div className="product-image">
                                                        <img src={product.imageURL} onClick={ () => this.viewProduct(product.id)}/>
                                                    </div>

                                                <div className="product-info">
                                                    <h6>{product.category}</h6>
                                                <h3 onClick={ () => this.viewProduct(product.id)}>{product.productName} </h3>
                                                <h6>{product.title}</h6>
                                                <h5>{product.description.substring(0 ,45)}...</h5>
                                                <h4>{product.price}$/10g</h4>
                                                <button onClick={ () => this.purchaseProduct(product.id)} className="btn btn-info">Buy Now</button>

                                                {/* show only to admin user! */}
                                                 {/* <button onClick={ () => this.editProduct(product.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProduct(product.id)} className="btn btn-danger">Delete </button> */}
                                            
                                             </div>   
                                                                
                                                                
                                                </div>                              
                    )
                                    }
                    
                </div>
              
                
               </div>

</div>
               



                )
                    
    
            }
    }

export default ListProductComponent

