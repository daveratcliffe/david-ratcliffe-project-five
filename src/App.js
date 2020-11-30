import './App.css';
import { Component, Fragment } from 'react';
import firebase from './firebase.js';
import PictureGenerator from './PictureGenerator'
class App extends Component {
  render() {
    // console.log(this.state);
    return (
      <Fragment>
        <PictureGenerator />
        {/* <img className="selectImgContainer" src={this.state.picture} alt=""/>
        <button onClick={this.picture}>New Image</button> */}
      </Fragment>
    )
  }
}
export default App;
//initialize state within our constructor lifecycle method
  //to keep track of the data which is changing within our application
  //AKA the art response we are waiting on from our API call
  // constructor() {
    // super();
  //   this.state = {
  //     picture: ''
  //   }
  // }
  //use axios to make a call to the API
  //we will make this call in the componentDidMount method
  //because we need a page to EXIST before we defecate on that page
  // componentDidMount() {

  //     axios({
  //       method: 'GET',
  //       url: 'https://api.unsplash.com/photos/random',
  //       responseType: 'json',
  //       params: {
  //         client_id: '-j_epipWtt2oE7lw_so3EUbm0Uvo0n0OaR--12TsBMw',
  //         orientation: 'squarish',
  //         dpr: 2,
  //         ar: 'w=380%26ar=1:1%26fit=crop'
  //       }
  //     }).then((artApiResponse) => {
  //       console.log(artApiResponse.data.urls.regular);
  //       //use the setState method to take the response from the API and save it in the artwork property in state
  //       this.setState({
  //         picture: artApiResponse.data.urls.regular
  //       })
  //     })
  
  // }
