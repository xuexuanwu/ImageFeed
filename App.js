import React, { Component } from 'react';
import Item from './Item';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      url: '',
      title: ''
    }
  }

  handleUrl = e => {
    this.setState({url: e.target.value});
  }

  handleTitle = e => {
    this.setState({title: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    let post = {
      url: this.state.url,
      title: this.state.title
    }
    this.setState({
      items: [...this.state.items, post],
      url: '',
      title: ''
    })
  }
  render() {
    return (
      <div className="App">
        <form>
            <input type="text" 
                   placeholder="Enter URL" 
                   value={this.state.url}
                   onChange={this.handleUrl}
                   name="url"/>

          <div class="Title">
            <input type="text" 
                   placeholder="Title" 
                   value={this.state.title}
                   onChange={this.handleTitle}
                   name="title" />
            <button onClick={this.handleSubmit}>New Post</button>
          </div>
        </form>

        {this.state.items.map(ele => {
          return <Item post={ele}/>
        })}
      </div>
    );
  }
}

export default App;
