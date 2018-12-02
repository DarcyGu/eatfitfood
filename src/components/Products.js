import React from "react";
import {Menu} from "./Menu";
import AddToCart from "./AddToCart";
import { connect } from "react-redux";
import ProductModal from "./ProductModal";

class Products extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			showNutrition: "",
			VGN: false,
			GF: false,
			DF: false,
			openProduct: ""
		};
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
		this.filter = this.filter.bind(this);
		this.openProduct = this.openProduct.bind(this);
		this.closeProduct = this.closeProduct.bind(this);		
	}
	handleMouseOver(id){
		return ()=>{
			this.setState({
				showNutrition: id
			});
		}
	}
	handleMouseOut(e){
		this.setState({
			showNutrition: ""
		});
	}
	filter(e){
		this.setState({
			[e.target.value]: e.target.checked
		});
	}
	openProduct(id){
		return ()=>{
			this.setState({
				openProduct: id
			});
			this.props.closeCart();
		}
	}
	closeProduct(){
		this.setState({
			openProduct: ""
		});
	}
	render(){
		const products = family => {
			const filtered = this.props.products.filter(product => product.family===family&&(this.state.VGN?product.diets.includes("VGN"):true)&&(this.state.GF?product.diets.includes("GF"):true)&&(this.state.DF?product.diets.includes("DF"):true));
			return filtered.length ? 	
				filtered.map(product => {
					return (
							<div className="product-container" key={product.id_product} onMouseOver={this.handleMouseOver(product.id_product)} onMouseOut={this.handleMouseOut}>
								<img src={product.thumb_path} alt={product.description} onClick={this.openProduct(product.id_product)} />
								<AddToCart product={product.id_product} name={product.description} nutrition={this.state.showNutrition===product.id_product} sizes={product.sizes} diets={product.diets}/>
							</div>
						);
					}
				)
				:
				<div className="no-products">No Products Available</div>
		}; 
		return (
			<div>
				{/* {this.state.openProduct ? <ProductModal product={this.state.openProduct} close={this.closeProduct} /> : null} */}
				<ProductModal product={this.state.openProduct} close={this.closeProduct} />
				<div id="title">
					<div className="caption">
						<h1>A La Carte Menu</h1>
						<p>
							Order a combination of meals on the days you choose. Select from a wide variety of breakfasts, lunch, dinner, and more.
						</p>
						<p>
							Meals are delivered on Monday, Wednesday & Friday (before 7am)
						</p>
					</div>
	    	</div>
				<div className="menu-container">
				  <Menu />
				</div>
				<div className="filter">
					<label className="checkbox"><input type="checkbox" value="VGN" checked={this.state.VGN} onChange={this.filter}/><span></span>Vegan</label>
					<label className="checkbox"><input type="checkbox" value="GF" checked={this.state.GF} onChange={this.filter}/><span></span>Gluten Free</label>
					<label className="checkbox"><input type="checkbox" value="DF" checked={this.state.DF} onChange={this.filter}/><span></span>Dairy Free</label>
				</div>
			<div className="products-container">
			    <span id="breakfast">breakfast</span>
			    <div>
			        <h2>BREAKFAST</h2>
			        <div className="products-grid">
						{products("Breakfast")}
			        </div>
			    </div>
				<span id="lunch">lunch</span>
			    <div className="grey-background">
			        <h2>LUNCH</h2>
			        <div className="products-grid">
						{products("Lunch")}
			        </div>
			    </div>
				<span id="dinner">dinner</span>
			    <div>
			        <h2>DINNER</h2>
			        <div className="products-grid">
						{products("Dinner")}
			        </div>
			    </div>
				<div className="grey-background">
			        <h2>SPARKLE CUPCAKERY</h2>
			        <div className="products-grid">
						{products("Cupcake")}
			        </div>
			    </div>			    			    		    
			</div>
			</div>	
		);
	}
}
export default connect(state=>({
	products: state.products
}))(Products);