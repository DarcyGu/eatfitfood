import React from "react";
import CardPreview from "./CardPreview";
import Magnify from "./Magnify";
import {alert_float} from "asmex-os-packs";

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            card: this.props.card,
            message: this.props.message,
            cardPreview: ""
        };
        this.textarea = React.createRef();
        this.setMessage = this.setMessage.bind(this);
        this.showPreview = this.showPreview.bind(this);
        this.closePreview = this.closePreview.bind(this);
        this.addCard = this.addCard.bind(this);
        this.goBack = this.goBack.bind(this);
        this.selectCard = this.selectCard.bind(this);
        this.disabledTextarea = this.disabledTextarea.bind(this);
    }
    componentDidUpdate(prevProps){
        if(this.props.card!==prevProps.card){
            this.setState({
                card: this.props.card
            });
        }
        if(this.props.message!==prevProps.message){
            this.setState({
                message: this.props.message
            });
        }
    }
    disabledTextarea(){
        if(!this.state.card){
            alert_float("danger","Select a card first");
        }
    }
    selectCard(card){
        return ()=>{
            if(!card){
                this.setState({
                    message: "",
                    card: card
                });        
            }else{
                this.setState({
                    card: card
                });         
            }
        }
    }
    setMessage(e){
        this.setState({
            message: e.target.value
        });
    }
    showPreview(card){
        return ()=>{
            this.setState({
                cardPreview: card
            });
        }
    }
    closePreview(){
        this.setState({
            cardPreview: ""
        });
    }
    addCard(e){
        if(this.state.message.length||!this.state.card){
            this.props.addCard(this.state.card,this.state.message)
        }else{
            this.textarea.current.scrollIntoView({behavior:'smooth'});
            alert_float("danger","Write a message");
        }
    }
    goBack(){
        this.props.closeCustom();
        this.setState({
            card: this.props.card,
            message: this.props.message,
        });
    }
    render(){
        const card = this.props.cardList;
        return (
            <div className="cart custom-slider card" style={{transform: this.props.show?"":"translateX(110%)"}}>
            <div className="cart-header">
                <i className="fa fa-long-arrow-alt-left" onClick={this.goBack}></i>
                <span className="cart-title">My Deliveries</span>
            </div>
            <div className="cart-items">
                <div className="custom-title">
                    <h2>{this.props.productName}</h2>
                    *Select your message card
                </div>
                <div className="ribbon-grid">
                    {card.map((card,index)=>{
                        return (
                            <div key={index} className="ribbon-select" onClick={this.selectCard(card.id_item)} style={{boxShadow: this.state.card===card.id_item?"0 5px 25px 0 #92be48":"",border: this.state.card===card.id_item?"1px solid #92be48":"1px solid transparent",color: this.state.card===card.id_item?"#92be48":"black"}}>
                                <div className="card-img-container" style={{background: "url("+card.image+") center center / cover no-repeat"}}>
                                <Magnify className="zoom" onClick={this.showPreview(card.id_item)} style={{display: this.state.card&&this.state.card===card.id_item?"inline-block":"none"}} />
                                </div>
                                {card.name}
                                {this.state.cardPreview===card.id_item&&<CardPreview src={card.image} alt={card.name} close={this.closePreview}/>}
                            </div> 
                        );
                    })}
                </div>
                <div className="custom-title">
                    *Type your message
                </div>
                <div className="card-message" ref={this.textarea}>
                    <div onClick={this.disabledTextarea}>
                        <textarea disabled={!this.state.card} maxLength="175" value={this.state.message} onChange={this.setMessage}></textarea>
                    </div>
                    *Special character not allowed<br />
                    Characters left: {175-this.state.message.length}
                </div>
                <div className="custom-blank-space"></div>
            </div>
                <div className="checkout confirm" onClick={this.addCard}>
                    CONFIRM
                </div>
            </div>
        );
    }
}

export default Card;