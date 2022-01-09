import "../css/point.css";
import React, { Component } from "react";

class CustomWeb extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <iframe
          className="customnft"
          width="100%"
          height="700px"
          src="https://www.w3schools.com/css/css_positioning.asp"
          frameborder="0"
          allowvr="yes"
          allow="vr; xr; accelerometer; magnetometer; gyroscope; autoplay;"
          allowfullscreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          onmousewheel=""
          scrolling="no"
          style={{ overflow: "hidden" }}
        ></iframe>
      </div>
    );
  }
}

export default CustomWeb;
