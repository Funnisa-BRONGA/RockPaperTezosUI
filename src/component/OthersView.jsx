import React, { Component } from "react";
import { IMAGE_SOURCE_OTHERS } from "../resource/js/imageSource";
import "../css/form.css";
import ReactTooltip from 'react-tooltip';
import BuyNft from "./BuyNft";

class OthersView extends Component {
  constructor(props) {
    super(props);
  }

  demoCustomNftView() {
    this.props.history.push(`/demoCustomNftView`);
  }

  demoCustomWebsite(){
      this.props.history.push(`/demoCustomWebsite`);

  }
   demoDappView() {

      this.props.history.push(`/demoDappView`);

    }

  render() {
    const view = this.props.view;
    return (
      <div>
        <div className="topnav">
          <a className="active" href="#gap">
            GAP
          </a>
          <a href="https://oldnavy.gap.com/?ssiteID=GAP">OLDNAVY</a>
          <a href="https://bananarepublic.gap.com/?ssiteID=ON">BR</a>
          <a href="https://athleta.gap.com/?ssiteID=ON">ATHLETA</a>
          <div className={(`addProfileBt`, "customnft")}>
            <button
              name="demo"
              className="navbar_btn"
              onClick={() => this.demoDappView()
              }
            >
              Purchase NFT
              </button>
                      <button
                        name="demo"
                        className="navbar_btn"
onClick={() => window.open("https://www.w3schools.com/css/css_positioning.asp")}
                         >

                         Go to website

</button>

{/*             <button */}
{/*               name="demo" */}
{/*               className="profile_btn" */}
{/*               onClick={() => this.demoCustomWebsite()} */}
{/*                > */}
{/*                Go to website */}
{/*             </button> */}


          </div>
        </div>
        {/* <h1 align="center" className="p-3 mb-2 bg-secondary text-white">GAP</h1> */}
        <div className="container">
          <div className={`row`}>
          <ReactTooltip id="registerTip" place="top" effect="solid" place="right" clickable={true} getContent={function(address) {
                      return (
                          <BuyNft address={address}/>
                      )
                  }}>
          </ReactTooltip>

            <h1>{view}</h1>


            {IMAGE_SOURCE_OTHERS.map(function(image, imageIndex) {
              return (
                <div className={`column`}>
                  <div className={`content`}>
                    <img className= {`imgprd`} key={imageIndex} src={image.address}/>
                    <span className={`price`}> {image.price} </span>
                    <span className={`text`}> {image.text} </span>

{/*                     <button */}
{/*                         data-tip={image.address} */}
{/*                         data-for="registerTip" */}
{/*                         className="btn" */}
{/*                       > */}
{/*                         Buy */}
{/*                       </button> */}
                  </div>
                </div>

              );
            })}

          </div>
          <h1>The GAP NFT Collection</h1>

          <section>
            <p>Rock Paper Tezos is a collection of programmatically, randomly generated hoodies on the Tezos blockchain. Each and every one of these high quality hoodies are unique and designed by the top most people at GAP.</p>
          </section>

          <section>
            <p>The Rock Paper Tezos collection consists of 10 pieces. Each piece is a visual representation of thread and needle. When the sale is complete, the NFTs are updated to be a hoodie that is a programmatically chosen combination of “n” different factors e.g.  1. cotton ( sustainability score 0-100) 2. Color ( combination of rbyg ) 3. Logo variations 4. Drawstring  ( common – metal) 5. Fiber count , putting the possibilities into the hundreds. In addition, 1 super rare  hoodie is hidden within the collection.</p>
          </section>

        </div>
      </div>
    );
  }
}

export default OthersView;
