import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = ({outputText: ''});
    this.addText = this.addText.bind(this);
    this.equals = this.equals.bind(this);
  }

  addText (s) {
    let lastIndex = this.state.outputText.length-1;
    if (s === '+' || s === '-' || s === '/' || s === '*') {
      if (this.state.outputText[lastIndex] !== '+' && this.state.outputText[lastIndex] !== '-' && this.state.outputText[lastIndex] !== '*' && this.state.outputText[lastIndex] !== '/' && this.state.outputText !== '' ) {
        // outputText += s;
        this.setState({outputText: this.state.outputText += s});
      }
    } else {
      // outputText+=s;
      this.setState({outputText: this.state.outputText += s});
    }
    document.getElementById('input').value = this.state.outputText;
  }

  equals (a) {
    document.getElementById('input').value = eval(a);
    // outputText = '';
    this.setState({outputText: ''});    
  }  


  render() {
    return (
      <div>
        <input type='text' id='input' />
          <div>
          <button className='button' id='one' onClick={()=>this.addText('1')}>1</button>
          <button className='button' id='two' onClick={()=>this.addText('2')}>2</button>
          <button className='button' id='three' onClick={()=>this.addText('3')}>3</button>
          <button className='button' id='add' onClick={()=>this.addText('+')}>+</button>

          </div>
          <div>
          <button className='button' id='four' onClick={()=>this.addText('4')}>4</button>
          <button className='button' id='five' onClick={()=>this.addText('5')}>5</button>
          <button className='button' id='six' onClick={()=>this.addText('6')}>6</button>
          <button className='button' id='subtract' onClick={()=>this.addText('-')}>-</button>

          </div>
          <div>
          <button className='button' id='seven' onClick={()=>this.addText('7')}>7</button>
          <button className='button' id='eight' onClick={()=>this.addText('8')}>8</button>
          <button className='button' id='nine' onClick={()=>this.addText('9')}>9</button>
          <button className='button' id='multiply' onClick={()=>this.addText('*')}>x</button>

          </div>
          <div>
          <button className='button' id='zero' onClick={()=>this.addText('0')}>0</button>

          <button className='button' id='divide' onClick={()=>this.addText('/')}>/</button>
          <button className='button' id='equals' onClick={()=>this.equals(document.getElementById('input').value)}>=</button>
          </div>
      </div>
    );
  }
}

export default App;
