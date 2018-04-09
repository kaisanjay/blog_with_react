import React from "react";
import "./styles/foundation.min.css"

import './App.css';
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import MobileHeader from "./component/MobileHeader/MobileHeader"
import Welcome from "./component/Welcome/Welcome";


class App extends React.Component {
  render() {
    return (
      <div class="off-canvas-content" data-off-canvas-content>
        <MobileHeader />
        <Header />
        <Welcome />




          <hr />

          <Footer />

      </div>

             




          
            



      
    

    );
  }
}

export default App;
