import React, { Component } from 'react'
import ProductService from '../services/ProductService'
import './ViewProduct.css';



class ViewProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            product: {},  
        }
        
    }

    componentDidMount(){
        ProductService.getProductById(this.state.id).then( res => {
            this.setState({product: res.data});
        })
    }

    render() {
        return (
        
            <div className="container1">
             
                <div className="left-column">
                
                <img src={ this.state.product.imageURL} alt=""/>
                {/* <img data-image="black" src="images/black.png" alt="">
                    <img data-image="blue" src="images/blue.png" alt="">
                    <img data-image="red" class="active" src="images/red.png" alt=""></img> */}
                    
                </div>
                
                
                {/* <!-- Right Column --> */}
                <div className="right-column">
                
                    {/* <!-- Product Description --> */}
                    <div className="product-description">
                    <span>{ this.state.product.category}</span>
                    <h1>{ this.state.product.productName}</h1>
                    <p style={{color: '#E1E8EE' , textAlign: "center"}}>{ this.state.product.title}</p>
                    
                    <p>{ this.state.product.description}</p>
                    </div>
                
                    {/* <!-- Product Configuration --> */}
                    <div className="product-configuration">
                
                    {/* <!-- Product Color --> */}
                    <div className="product-color">
                        <span>{ this.state.product.price/10}$/g</span>
                
                        {/* <div className="color-choose">
                        <div>
                            <input data-image="red" type="radio" id="red" name="color" value="red" checked/>
                            <label htmlFor="red"><span></span></label>
                        </div>
                        <div>
                            <input data-image="blue" type="radio" id="blue" name="color" value="blue"/>
                            <label htmlFor="blue"><span></span></label>
                        </div>
                        <div>
                            <input data-image="black" type="radio" id="black" name="color" value="black"/>
                            <label htmlFor="black"><span></span></label>
                        </div>
                        </div> */}
                
                    </div>
                
                    {/* <!-- Cable Configuration --> */}
                    <div className="cable-config">
                        
                
                        <div className="cable-choose" style={{ textAlign: "center"}}>
                        <button>10g</button>
                        
                        </div>
                
                        <a href="#">How to use cannabis?</a>
                    </div>
                    </div>
                
                    {/* <!-- Product Pricing --> */}
                    <div className="product-price">
                    <span>{ this.state.product.price}$</span>
                    <a href="#" className="cart-btn">Buy Now!</a>
                    </div>
                </div>
                </div>
























            /* <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Product Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                           
                            <div> { this.state.product.productName}</div>
                        </div>
                        <div className = "row">
                            
                            <div> { this.state.product.title}</div>
                        </div>
                        <div className = "row">
                            <label> Category: </label>
                            <div> { this.state.product.category }</div>
                        </div>
                        <div className = "row">
                            
                            <div> { this.state.product.description}</div>
                        </div>
                        <div className = "row">
                            <label> Price </label>
                            <div> { this.state.product.price}</div>
                        </div>
                    </div>
                </div>
            </div> */
        )
    }
}

export default ViewProductComponent