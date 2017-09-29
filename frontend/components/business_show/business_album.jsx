import React from 'react';
import Slider from 'react-slick';

export default class BusinessAlbum extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getImages(this.props.business.id);
  }

  render() {
    const images = this.props.images.map((image,i) => {
      return <div className="biz-image-wrapper" key={`image-${i}`}><img src={`${image.img_url}`}/></div>;
    });
    return(
      <div className="biz-album-super-container h-box">
        <div className="biz-album-wrapper">
          <Slider settings={
              {dots: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                accessibility: true}
              }>
              {images}
            </Slider>
          </div>
      </div>
    );
  }
}
