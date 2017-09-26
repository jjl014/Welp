// COMPONENT
import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      query: ""
    };
  }

  handleChange() {
    return (e) => {
      this.setState({query: e.currentTarget.value});
      this.props.omnisearch(e.currentTarget.value);
    };
  }

  render() {
    return (
      <input> onChange={this.handleChange()} value={this.state.query}</input>
    );
  }
}

//ACTIONS
const omnisearch = (query) => dispatch => (
  search(query).then((data) => console.log(data))
);

//API UTIL
const search = (query) => (
  $.ajax({
    method: 'GET',
    url: 'api/omnisearch',
    data: {query}
  })
);

//CONTAINER
const mapDispatchToProps = (dispatch) => ({
  omnisearch: (query) => dispatch(omnisearch(query))
});

//ROUTES
namespace api
get '/omnisearch', to: "businesses#omnisearch"

// BUSINESS CONTROLLER
def omnisearch
  @businesses = Business
                  .where("LOWER(name) LIKE ?", "%#{params[:query]}%".downcase)
                  .limit(10)
                  .order("ASC")
  render json: @businesses
end
