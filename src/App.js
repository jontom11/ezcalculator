import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = ({
      outputText: '',
      previousCalculations: ''
    });
    this.addText = this.addText.bind(this);
    this.equals = this.equals.bind(this);
    this.AC = this.AC.bind(this);
  }

  AC() {
    this.setState({outputText: ''});
    document.getElementById('input').value = '';
  }

  addText (s) {
    let lastIndex = this.state.outputText.length-1;
    if (s === '+' || s === '-' || s === '/' || s === '*') {
      if (this.state.outputText[lastIndex] !== '+' && this.state.outputText[lastIndex] !== '-' && this.state.outputText[lastIndex] !== '*' && this.state.outputText[lastIndex] !== '/' && this.state.outputText !== '' ) {
        this.setState({outputText: this.state.outputText += s});
      }
    } else {
      this.setState({outputText: this.state.outputText += s});
    }
    document.getElementById('input').value = this.state.outputText;
  }

  equals () {
    if (this.state.outputText[this.state.outputText.length-1] === '+' || this.state.outputText[this.state.outputText.length-1] === '-' || this.state.outputText[this.state.outputText.length-1] === '/' || this.state.outputText[this.state.outputText.length-1] === '*' ) {
      let result = this.state.outputText.slice(0, this.state.outputText.length-1)
      console.log(result)
      this.setState({outputText: result});
    }
    // console.log(this.state.outputText)
    console.log(result)
    let result = eval(this.state.outputText);
    document.getElementById('input').value = result;
    this.setState({outputText: result });    
  }  

  delete () {
    let removedLast = this.state.outputText.slice(0,this.state.outputText.length-1);
    console.log(removedLast)
    this.setState({outputText: removedLast});
    document.getElementById('input').value = removedLast;

  }

  render() {
    return (
      <div id='main'>
        <input type='text' id='input' ></input>
        <table id='table'>
          <tr>
            <td><button className='button' id='one' onClick={()=>this.addText('1')}>1</button> </td>
            <td><button className='button' id='two' onClick={()=>this.addText('2')}>2</button></td>
            <td><button className='button' id='three' onClick={()=>this.addText('3')}>3</button></td>
            <td><button className='button' id='AC' onClick={()=>this.AC('AC')}>AC</button></td>
          </tr>
          <tr>
            <td><button className='button' id='four' onClick={()=>this.addText('4')}>4</button></td>
            <td><button className='button' id='five' onClick={()=>this.addText('5')}>5</button></td>
            <td><button className='button' id='six' onClick={()=>this.addText('6')}>6</button></td>
            <td><button className='button' id='add' onClick={()=>this.addText('+')}>+</button></td>
          </tr>
          <tr>
            <td><button className='button' id='seven' onClick={()=>this.addText('7')}>7</button></td>
            <td><button className='button' id='eight' onClick={()=>this.addText('8')}>8</button></td>
            <td><button className='button' id='nine' onClick={()=>this.addText('9')}>9</button></td>
            <td><button className='button' id='subtract' onClick={()=>this.addText('-')}>-</button></td>
          </tr>
          <tr>
            <td><button className='button' id='zero' onClick={()=>this.addText('0')}>0</button></td>
            <td><button className='button' id='divide' onClick={()=>this.addText('/')}>/</button></td>
            <td><button className='button' id='multiply' onClick={()=>this.addText('*')}>x</button></td>
            <td><button className='button' id='equals' onClick={()=>this.equals()}>=</button></td>
          </tr>
          <tr>
            <td></td>
            <td><button className='button' id='dot' onClick={()=>this.addText('.')}>.</button></td>
            <td><button className='button' id='backSpace' onClick={()=>this.delete()}>Del</button></td>
            <td></td>
          </tr>
          
        </table>
      </div>
    );
  }
}

export default App;
