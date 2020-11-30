import { Component, Fragment } from  'react';
import axios from 'axios';
class PictureGenerator extends Component {
  constructor() {
    super();
    this.state = {
      picture: [{}],
      altText: '',
      pictureRecieved: false
    }
  }
getRandomImage = () => {

  axios({
        method: 'GET',
        url: 'https://api.unsplash.com/photos/random',
        responseType: 'json',
        params: {
          client_id: '-j_epipWtt2oE7lw_so3EUbm0Uvo0n0OaR--12TsBMw',
          orientation: 'squarish',
          dpr: 2,
          ar: 'w=380%26ar=1:1%26fit=crop'
        }
      }).then((apiResponse) => {
        console.log(apiResponse)
        if (apiResponse.data.urls.regular) {
          this.setState({
            pictureRecieved: true,
            picture: apiResponse.data.urls.regular,
            altText: apiResponse.data.alt_description
          })
        } else {
          return console.error('Looks like our image host is having a creative block. Try again later.')
        }
      })
 }
  render() {
    console.log(this.state)
    const { pictureRecieved, picture, altText } = this.state;
    return (
      <Fragment>
        <h1>Worth a Thousand</h1>
        <img className="selectImgContainer" src={picture} alt={altText}/>
        {pictureRecieved === true ? '' : 'Start looking for inspiration'}
        <button onClick={this.getRandomImage}>Differnet Inspiration</button>
      </Fragment>
    )
  }
}

export default PictureGenerator;