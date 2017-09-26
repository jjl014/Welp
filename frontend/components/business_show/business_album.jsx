import React from 'react';

export default class BusinessAlbum extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className="biz-album h-box">
          <div>
            <h1>IMG1</h1>
          </div>
          <div>
            <h1 id="img-2">IMG2</h1>
          </div>
          <div>
            <h1>IMG3</h1>
          </div>
        </div>
      </div>
    );
  }
}
