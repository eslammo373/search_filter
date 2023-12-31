import './App.css';
import React, {Component} from 'react';
import Input from './component/Input';
import Button from './component/Button';
import ClearButton from './component/ClearButton';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      input : ""
    };
  }

  addToInput = val => {

     this.setState({ input: this.state.input + val });
     
  };

  render(){
    return(
      <div className='app'>
      <div className="calc-wrapper">
        <Input input={this.state.input}/>
        <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button >/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.addToInput}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input : ""})}>
              clear </ClearButton>
           
          </div>
  
      </div>
      </div>
    )
  }
}
export default App;
