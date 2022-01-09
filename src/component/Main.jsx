import React, { Component } from "react";
import { Redirect } from 'react-router'
import DemoCustomNft from "./DemoCustomNft";
import DemoCustomWeb from "./DemoCustomWeb";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OthersView from "./OthersView";
import Dapp from "./Dapp";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "self"
    };
  }

  render() {
    return (
      <Router>
        <>
          <Route path='/'>
            <Redirect to="/nft" />
          </Route>
          <Switch>
            {/* <Route path="/" render={(props) => <OthersView {...props} />} /> */}
            <Route path="/demoCustomNftView" render={props => <DemoCustomNft {...props}/>} />
            <Route path="/demoDappView" render={props => <Dapp {...props} />}/>
             <Route path="/demoCustomWebsite" render={props => <DemoCustomWeb {...props}/>} />
            <Route path="/nft" render={props => <OthersView {...props} />}/>
          </Switch>
        </>
      </Router>
    );
  }
}

export default Main;
