/* global cloudinary:false */

import React from 'react';

export default class UploadButton extends React.Component {
  constructor(props) {
    super(props);
  }

  upload() {
    const cloudinaryOptions = {cloud_name: 'jun', upload_preset: 'icdmqplr'};
    return (e) => {
      e.preventDefault();
      cloudinary.openUploadWidget(
        cloudinaryOptions,
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
        <button onClick={this.upload()}>Add Photo</button>
      </div>
    );
  }

}
