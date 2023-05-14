import './App.css';
import { Component } from "react";
import Product from './Product.js';

let arr = [
  {
    name: 'bananas',
    price: '1$',
    description: 'Fresh bananas from Ecuador',
  },
  {
    name: 'Apple',
    price: '3$',
    description: 'Fresh Apple from Ecuador',
  }
]


class App extends Component {
  constructor(props) {
      super(props);
      this.state= {
        name: '',
        price: '',
        description: '',
        arr: arr,
      };
  }
  Push = () => {
    if(this.state.name.length !== 0 && this.state.price.length !== 0 && this.state.description.length !== 0){
      const newArr = [
        ...this.state.arr,
        {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
        }
      ]
      this.setState({
        name: '',
        price: '',
        description: '',
        arr: newArr,
      })
    }
  }

  addName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  addPrice = (e) => {
    this.setState({
      price: e.target.value
    })
  }
  addDescription = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  render(){
    return (
      <div className="App">
      <form className='form'>
          <input type="text" placeholder="Name..." value={this.state.name} onChange={this.addName}/>
          <input type="text" placeholder="Price..." value={this.state.price} onChange={this.addPrice}/>
          <input type="text" placeholder="Description..." value={this.state.description} onChange={this.addDescription}/>
          <button onClick={(e) => {
              e.preventDefault();
              this.Push();
          }}>Submit</button>
      </form>
      {
        this.state.arr.map((e, index) => {
          return <Product key={index} name={e.name} price={e.price} description={e.description} />
        })
      }
      </div>
    );
  }
}

export default App;
