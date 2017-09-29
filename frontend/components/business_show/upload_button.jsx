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
            this.props.postImage(images[0].url);
          }
        }
      );
    };
  }

  render() {
    return (
      <div>
        <button className="btn-upload" onClick={this.upload()}><i className="fa fa-camera" aria-hidden="true"></i> Add Photo</button>
      </div>
    );
  }

}
