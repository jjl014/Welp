import React from 'react';

export default class BusinessAlbum extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const images = this.props.images;
    const defaultImg = "https://res.cloudinary.com/jun/image/upload/v1506632111/business_large_square_r7gscl.png";
    let src1 = defaultImg, src2 = defaultImg, src3 = defaultImg;
    if (images.length > 0 ) {
      debugger;
      if (images[0]) src1 = images[0].url;
      if (images[1]) src2 = images[1].url;
      if (images[2]) src3 = images[2].url;
    }
    return(
      <div>
        <div className="biz-album h-box">
          <div>
            <img src={src1} alt="img1"/>
          </div>
          <div>
            <img src={src2} id="img-2" alt="img2"/>
          </div>
          <div>
            <img src={src3} alt="img3"/>
          </div>
        </div>
      </div>
    );
  }
}
