import { Component } from "react";

class Price extends Component{
    constructor(props) {
        super(props);
        this.state= {
            value: this.props.price,
        };
    }
    
    changeRegion = () => {
        let {value} = this.state;
        let realValue = parseFloat(value);
        if(value.includes('$')){
            value = realValue * 400 + "֏";
        }else{
            value = realValue / 400 + "$";
        }
        this.setState({
            value: value,
        })
    }
    render(){
        return (
            <div className="flex">
                <p>{this.state.value}</p>
                <button onClick={this.changeRegion}>Change Currency</button>
            </div>
        )
    }
};

export default Price;