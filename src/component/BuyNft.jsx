import React, {Component} from "react";
import 'react-slideshow-image/dist/styles.css'
// import { IMAGE_SOURCE_OTHERS } from "../resource/js/imageSource";
import "../css/form.css";

class BuyNft extends Component {
    constructor(props) {
        super(props);
    }

  //   getInfoProduct(imgid) {
  //     let productDetails = null;
  //     console.log(imgid);
  //     for (let product of IMAGE_SOURCE_OTHERS) {
  //         if (product.id === imgid) {
  //             productDetails = product
  //             break;
  //         }
  //     }
  //     return productDetails;
  // }
    
    render() {
      // let infoProduct = this.getInfoProduct(this.props.imgid);
        return (
            <div >
                {/* {/* <h6> {imageDetails.price} </h6> */}
                <img className= {`imgpop`} src={this.props.address}/>

                <button className="column_similarProduct_btn">Add to Cart</button>
            </div>
        )
    }


}

export default BuyNft