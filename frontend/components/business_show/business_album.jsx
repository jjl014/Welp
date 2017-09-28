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
      return <div key={`image-${i}`}><img src={`${image.img_url}`}/></div>;
    });
    return(
      <div className="biz-album-wrapper">
        <Slider settings={
            {dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            accessibility: true}
        }>
          {images}
        </Slider>
      </div>
    );
  }
}
// <div className="biz-album h-box">
//   <div>
//     <img src={images[0].url || ""} alt="img1"/>
//   </div>
//   <div>
//     <img src={images[1].url || ""} id="img-2" alt="img2"/>
//   </div>
//   <div>
//     <img src={images[2].url || ""} alt="img3"/>
//   </div>
// </div>
