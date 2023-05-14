import { Component } from "react";
import Name from "./Name.js";
import Price from "./Price.js";
import Description from "./Description.js";

class Product extends Component{
    render(){
        return (
            <>
                <div className="div-block">
                    <Name name={this.props.name}/>
                    <Price price={this.props.price}/>
                    <Description description={this.props.description}/>
                </div>
            </>
        )
    }
};

export default Product;