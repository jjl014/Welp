import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      find: "",
      near: ""
    };
  }

  handleSearch() {
    return (e) => {
      e.preventDefault();
      this.props.searchBusinesses(this.state)
                .then(() => {
                  this.props.history.push("/businesses");
                });
    };
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  render() {
    return (
      <div className="search-bar h-box">
        <div className="search-find-wrapper h-box">
          <label>Find</label>
          <input onChange={this.update("find")} className="search-find" type='text' value={this.state.find}></input>
          <div className="line-break"></div>
        </div>
        <div className="search-near-wrapper h-box">
          <label>Near</label>
          <input onChange={this.update("near")} className="search-near" type='text' value={this.state.near}></input>
          <button onClick={this.handleSearch()} className="fa fa-lg fa-search" aria-hidden="true">
          </button>
        </div>
      </div>
    );
  }
}
