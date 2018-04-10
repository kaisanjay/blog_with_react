import React from "react";
import "./styles/foundation.min.css"
import "./styles/custom.css"

import './App.css';
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import MobileHeader from "./component/MobileHeader/MobileHeader"
import Welcome from "./component/Welcome/Welcome";


class App extends React.Component {
  state={
    appName: "Banana"
  };
  render() {
    return (
      <div className="off-canvas-content" data-off-canvas-content>
        <MobileHeader name={this.state.appName}/>
        <Header name={this.state.appName} />
        <Welcome />




          <hr />

          <Footer />

      </div>

             




          
            



      
    

    );
  }
}

export default App;
