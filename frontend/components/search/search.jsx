import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      find: "",
      near: ""
    };
  }

  render() {
    return (
      <div className="search-bar">
        <input type='text' value={this.state.find}></input>
        <input type='text' value={this.state.near}></input>
      </div>
    );
  }
}
