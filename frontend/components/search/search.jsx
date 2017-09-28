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
        <form className="search-find-wrapper h-box">
          <label>Find</label>
          <input onChange={this.update("find")} className="search-find" type='text' value={this.state.find}></input>
          <button onClick={this.handleSearch()} className="fa fa-lg fa-search search-button" aria-hidden="true">
          </button>
        </form>
      </div>
    );
  }
}

// <div className="search-near-wrapper h-box">
// <div className="line-break"></div>
//   <label>Near</label>
//   <input onChange={this.update("near")} className="search-near" type='text' value={this.state.near}></input>
// </div>
