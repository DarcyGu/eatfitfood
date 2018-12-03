import React from "react";
import { connect } from "react-redux";
import {addToCart,deleteFromCart} from "../actions";

class ProductModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            size : ""
        };
        this.closeModal = this.closeModal.bind(this);
        // this.toggleSize = this.toggleSize.bind(this);
        this.changeSize = this.changeSize.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.deleteFromCart = this.deleteFromCart.bind(this);
    };
    componentDidUpdate(prevProps){
        if(this.props.product&&!prevProps.product){
            this.setState({
                size: this.props.products.filter(product=>product.id_product===this.props.product)[0].sizes[0].size
            });
        }
    }
    toggleSize(size){
        return () => {
            this.setState({
                size: size
            });
        }
    }
    changeSize(e){
        this.setState({
            size: e.target.value
        });
    }
    addToCart(){
        this.props.dispatch(addToCart(this.props.product,this.state.size));
    }
    deleteFromCart(){
        this.props.dispatch(deleteFromCart(this.props.product,this.state.size));
    }
    closeModal(){
        this.setState({
            size: ""
        });
        this.props.close();
    }
    render(){
        const productInfo = this.props.products.filter(product=>product.id_product===this.props.product)[0];
        let nutritional = "";
        let quantity = 0;
        const count = () => {
            for(let i=0; i<this.props.cart.length;i++){
                if(this.props.cart[i].product_id===this.props.product&&this.props.cart[i].size===this.state.size){
                    return this.props.cart[i].quantity;
                }
            }
        }
        if(this.state.size){
            nutritional = productInfo.sizes.filter(size=>size.size===this.state.size)[0].nutritional;
            quantity = count();
        }
        return (
            <div className="product-modal" style={{transform: this.props.product?"scale(1)":"scale(0)"}}>
            <div className="close-modal">
                <i className="fa fa-times" onClick={this.closeModal}></i>
            </div>
            {
                this.props.product ? (
                    <div className="product-modal-grid">
                    <div>
                        <img className="product-modal-img" src={productInfo.image_path} alt={productInfo.description}/>
                    </div>
                    <div>
                        <h2>
                        {productInfo.description}
                        </h2>
                        <div className="title-divider"></div>
                        <div className="diets">
                            {productInfo.diets.includes("VGN")&&(
                                <div>
                                    <img src="https://eatfitfood.com.au/assets/images/product/vgn.png" alt="Vegan" />
                                    <p>Vegan</p>
                                </div>
                            )}
                            {productInfo.diets.includes("GF")&&(
                                <div>
                                    <img src="https://eatfitfood.com.au/assets/images/product/gf.png" alt="Gluten Free" />
                                    <p>Gluten Free</p>
                                </div>
                            )}                            
                            {productInfo.diets.includes("DF")&&(
                                <div>
                                    <img src="https://eatfitfood.com.au/assets/images/product/df.png" alt="Dairy Free" />
                                    <p>Dairy Free</p>
                                </div>
                            )}
                        </div>
                        <h4>Ingredients</h4>
                        <div className="ingredients">
                            {productInfo.ingredients}
                        </div>
                        <div className="title-divider"></div>
                        <div className="size-selector">
                        {productInfo.sizes.map((size,index)=>{
                            return <span key={index} className={this.state.size===size.size?"active":""} onClick={this.toggleSize(size.size)}>{size.size}</span>
                        })}
                        </div>
                        {
                            nutritional ? (
                            <table className="nutritional-table">
                            <thead>
                                <tr>
                                    <th>Nutrional Information</th>
                                    <th>Per Serve</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Calories</td>
                                    <td>{nutritional.calories}</td>
                                </tr>
                                <tr>
                                    <td>Protein</td>
                                    <td>{nutritional.protein}g</td>
                                </tr>
                                <tr>
                                    <td>Fat, total</td>
                                    <td>{nutritional.fat}g</td>
                                </tr>
                                <tr>
                                    <td>-Satuarted</td>
                                    <td>{nutritional.sat}g</td>
                                </tr>
                                <tr>
                                    <td>Carbohydrate</td>
                                    <td>{nutritional.carbs}g</td>
                                </tr>
                                <tr>
                                    <td>Fibre</td>
                                    <td>{nutritional.fibre}g</td>
                                </tr>
                            </tbody>
                        </table>
                            )
                            :
                            null
                        }
                    <div className="title-divider"></div>
                    <div className="select">
                        <select value={this.state.size} onChange={this.changeSize}>
                            {productInfo.sizes.map(size=>{
                                return (
                                    <option key={size.size} value={size.size}>{size.size}: ${size.price.toFixed(2)}</option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="quantity-control">
                        <span className="minus" onClick={quantity?this.deleteFromCart:null}><i className="fa fa-minus"></i></span>
                        <span className="quantity">{quantity?quantity:0} </span>
                        <span className="add" onClick={this.addToCart}><i className="fa fa-plus"></i></span>
                    </div>  
                    </div>
                    </div>
                )
                :
                null
            }
            <div className="back-to-menu" onClick={this.closeModal}>
                Back to menu
            </div>
            </div>
        )
    }
}

export default connect(state=>({
    cart: state.cart,
	products: state.products
}))(ProductModal);