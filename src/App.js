import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends React.Component {
  constructor(){
    super();
    this.click2 = this.click2.bind(this);
    this.state = {
     dynamic: <h1> hello music </h1>, 
     searchField: '',
     monsters : [{
       name: 'monster 1',
       id : 1
     }, 
     {
      name: 'monster 2',
      id : 2
    },
    {
      name: 'monster 2',
      id : 3
    }]
    }

  }

  click1() {
    //console.log('clicked 1');
    //console.log(this);
  }
  click2() {
    //console.log('clicked 2');
  //  console.log(this);
  }
  click3 = ()=> {
    //console.log('click 3');
    //console.log(this);
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users').then(async (r)=> r.json()).then((data)=> {
      this.setState({monsters: data});
    });
  }

  render() {
    const { monsters , searchField} = this.state;
    const searchedData = monsters.filter((data)=> data.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
      <h1> Monster Coleslaw</h1>
      <SearchBox placeholder="enter search keyword" handleChange={
        (e)=>{
          const searched = e.target.value;
          this.setState({
          searchField: searched
          }, () => {
          })
        }
      } />
      <CardList monsters={ searchedData }></CardList>
        <div style={{ display:'none'}}>
          <button onClick={this.click1()}>Click me 1</button>
          <button onClick={this.click1}>Click me 1</button>
          <button onClick={this.click2}>Click me 2</button>
          <button onClick={this.click3}>Click me 3</button>
          { this.state.msg }
          <button onClick={()=>{ this.setState({ msg: 'go away'}) }}>Click me 3</button>
          <button onClick={()=>{ this.setState({ dynamic: <h6>Blah Blah Blah</h6>}) }}>Change HTML</button>
        </div>
      
       
      </div>
    );
}
}

export default App;
