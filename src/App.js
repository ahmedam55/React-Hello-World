import React, { Component } from 'react';
import { Link } from 'react-router';
import Items from './items';
import styles from './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {items : Items.getItems(),visibleInputIndex : null}
  }
  
  addOnEnter = e => {
    if(e.key=="Enter"){
     this.addItem(e.target.value);
     e.target.value = '';
    }
  }

  updateOnBlur = (e,i) => {
    this.updateItem(i,e.target.value);
    this.setState({visibleInputIndex:null});
  }

  showInput = i =>
    this.setState({visibleInputIndex:i},() => this.refs[i].focus());
  
  addItem = text => 
    this.setState({items:Items.addItem(text)});

  updateItem = (i,newText) =>
    this.setState({items:Items.updateItem(i,newText)});

  deleteItem = i =>
    this.setState({items:Items.deleteItem(i)})

  renderItem(queriedItem) {   
    return (
      <div>
        {queriedItem}
      </div>
    );
  }
  
  renderList() {
    var items = this.state.items;
    var visibleInputIndex = this.state.visibleInputIndex;
   
    return (
      <div>
        <input onKeyPress={this.addOnEnter}/>
        {items && items.map((item,i) =>
          <div key={item + i}>
            <span className={visibleInputIndex == i?'hidden':''} onClick={()=>this.showInput(i)}>{item}</span>
            <input className={visibleInputIndex != i?'hidden':''} ref={i} defaultValue={item} onBlur={(e)=>this.updateOnBlur(e,i)}/>
            <button onClick={()=>this.deleteItem(i)}>
              Delete
            </button>
            <Link to={`/${i}`}>
              <button>
                Details
              </button>
            </Link>
          </div>
        )}
      </div>
    );
  }

  render() {
    var queriedItem = this.state.items[this.props.params.userId];

    return queriedItem ? this.renderItem(queriedItem) : this.renderList();
  }

}

export default App;
