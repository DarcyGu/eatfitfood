import React from "react";

export class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state={
            fixed: false
        };
        this.handleScroll=this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll() {
        let offset = 0;
        if(document.body.style.top){
            offset = parseInt(document.body.style.top, 10);
        };
        let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        this.setState({
            fixed: scrollTop>document.getElementById("title").offsetHeight-10+offset
        });
    }
    scrollTo(meal){
        return ()=>{
            document.getElementById(meal).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }
    render() {
        return (
            <div id="menu" style={{
                position: this.state.fixed?"fixed":"relative",
                top: this.state.fixed?50:0
                // display: this.state.fixed?"block":"none"
                }}>
                <span onClick={this.scrollTo("breakfast")}>
                    Breakfast
                </span>
                <span onClick={this.scrollTo("lunch")}>
                    Lunch
                </span>
                <span onClick={this.scrollTo("dinner")}>
                    Dinner
                </span>
            </div>
        );
    }
}