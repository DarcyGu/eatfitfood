import React from "react";
// import { connect } from "react-redux";
// import {addToCart,deleteFromCart} from "../actions";
import Ribbon from "./Ribbon";
import Card from "./Card";
import Selfies from "./Selfies";

class CartItem extends React.Component{
    constructor(props){
		super(props);
		this.state = {
			Ribbon: false,
            Card: false,
            message: "",
            Selfies: [],
            showRibbon: false,
            showCard: false,
            showSelfies: false
		};
        this.addRibbon= this.addRibbon.bind(this);
        this.addCard= this.addCard.bind(this);
        this.addSelfie= this.addSelfie.bind(this);
        this.sendImg= this.sendImg.bind(this);
        this.showCustom = this.showCustom.bind(this);
        this.closeCustom = this.closeCustom.bind(this);
    }
    addRibbon(color){
        this.setState({
            Ribbon: color
        });
    }
    addCard(card,message){
        this.setState({
            Card: card,
            showCard: false,
            message: message
        }); 
    }
    sendImg(cupcakes,data){
        
    }
    addSelfie(selfieList){
        this.setState({
            Selfies: selfieList
        })
    }
    showCustom(custom){
        const showCustom = "show"+custom;
        this.setState({
            [showCustom]: true
        });
    }
    closeCustom(){
        this.setState({
            showRibbon: false,
            showCard: false,
            showSelfies: false
        });
    }
    render(){
        const ribbonList = [
            {
                id_item: false,
                name: "none",
                thumb: false
            },
            {
                id_item: 1,
                name: "yellow",
                thumb: "https://sparkle.asmex.io/uploads/customtypesitems/201811191725101.png"
            },
            {
                id_item: 2,
                name: "green",
                thumb: "https://sparkle.asmex.io/uploads/customtypesitems/201811191715281.png"
            },
            {
                id_item: 3,
                name: "blue",
                thumb: "https://sparkle.asmex.io/uploads/customtypesitems/201811191716481.png"
            },
            {
                id_item: 7,
                name: "Purple",
                thumb: "https://sparkle.asmex.io/uploads/customtypesitems/201811191639211.png"
            },
            {
                id_item: 4,
                name: "Soft Pink",
                thumb: "https://sparkle.asmex.io/uploads/customtypesitems/201811191646031.png"
            },
            {
                id_item: 5,
                name: "Hot Pink",
                thumb: "https://sparkle.asmex.io/uploads/customtypesitems/201811191648461.png"
            },
            {
                id_item: 6,
                name: "silver",
                thumb: "https://sparkle.asmex.io/uploads/customtypesitems/201811191642121.png"
            }
        ];
        const cardList = [
            {
                id_item: false,
                name: "None",
                image: false
            },
            {
                id_item: 1,
                name: "Celebrate Everything",
                image: "https://sparkle.asmex.io/uploads/customtypesitems/201811131709241.jpg"
            },
            {
                id_item: 2,
                name: "It's Your Birthday",
                image: "https://sparkle.asmex.io/uploads/customtypesitems/201811131711311.jpg"
            },
            {
                id_item: 3,
                name: "With Gratitude",
                image: "https://sparkle.asmex.io/uploads/customtypesitems/201811131711441.jpg"
            },
            {
                id_item: 4,
                name: "Congrats",
                image: "https://sparkle.asmex.io/uploads/customtypesitems/201811131712161.jpg"
            },
            {
                id_item: 5,
                name: "You're Amazing",
                image: "https://sparkle.asmex.io/uploads/customtypesitems/201811131712321.jpg"
            },
            {
                id_item: 6,
                name: "Love",
                image: "https://sparkle.asmex.io/uploads/customtypesitems/201811131712441.jpg"
            }
        ]
        return (
            <div>
                {this.props.custom&&this.props.custom.map((custom,index)=>{
                    return <span className="custom-option" key={index} onClick={()=>{this.showCustom(custom)}} style={{background: !this.state[custom]?"black":"#92be48"}}>{!this.state[custom]?"Add ":"Edit "}{custom}</span>
                })}
                <Ribbon ribbonList={ribbonList} show={this.state.showRibbon} color={this.state.Ribbon} closeCustom={this.closeCustom} productName={this.props.productName} addRibbon={this.addRibbon}/>
                <Card cardList={cardList} show={this.state.showCard} card={this.state.Card} message={this.state.message} closeCustom={this.closeCustom} productName={this.props.productName} addCard={this.addCard}/>
                <Selfies selfies={this.state.Selfies} show={this.state.showSelfies} closeCustom={this.closeCustom} productName={this.props.productName} sendImg={this.sendImg}/>
            </div>    
        );
    }
}

export default CartItem;