import React from "react";
import {Croppie} from "croppie";
import 'croppie/croppie.css';
import {alert_float} from "asmex-os-packs";

class CropImage extends React.Component{
    constructor(props){
        super(props);
        this.c = null;
        this.confirm = this.confirm.bind(this);
    }
    componentDidMount(){
        this.c = new Croppie(document.getElementById("croppie"),{
            enableOrientation: true,
            viewport: { width: 144, height: 144, type: "circle" },
            boundary: { width: 220, height: 220 }
        });
        this.c.bind({url:this.props.url});
    }
    componentDidUpdate(prevProps){
        if(prevProps.url!==this.props.url){
            this.c.bind({url:this.props.url});
        }
    }
    confirm(){
        if(this.props.url){
            if(this.props.cupcakes.length){
                this.c.result("base64").then(data=>{
                    this.props.cupcakes.forEach(cupcake=>{
                        this.props.setImg(cupcake,data)
                    });
                    this.props.sendImg(this.props.cupcakes,data);
                });
                this.props.close();
            }else{
                alert_float("danger","Select at least one cupcake");
            }
        }
        else{
            alert_float("danger","Upload an image");
        }
    }
    render(){
        return (
            <div>
                <div id="croppie">
                </div>
                <div className="cart-summary">
                    <div className="checkout" onClick={this.confirm}>
                    CONFIRM
                </div>
                </div>
            </div>
        );
    }
}

export default CropImage;