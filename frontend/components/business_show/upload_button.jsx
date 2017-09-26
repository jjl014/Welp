/* global cloudinary:false */

import React from 'react';

export default class UploadButton extends React.Component {
  constructor(props) {
    super(props);
  }

  upload() {
    return (e) => {
      e.preventDefault();
      cloudinary.openUploadWidget(
        window.cloudinary_options,
        (error, images) => {
          if (error === null) {
            //upload successful
          }
        }
      );
    };
  }

  render() {
    return (

      <div>
        <button onClick={this.upload()}>Add Photo</button>
      </div>
    );
  }

}
