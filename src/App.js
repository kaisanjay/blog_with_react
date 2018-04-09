import React from "react";
import "./styles/foundation.min.css"

import './App.css';
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import MobileHeader from "./component/MobileHeader/MobileHeader"


class App extends React.Component {
  render() {
    return (
      <div class="off-canvas-content" data-off-canvas-content>
        <MobileHeader />
        <Header />
        <div class="grid-x grid-margin-x small-up-2 medium-up-3 large-up-4">
          <div class="cell">
            <img class="thumbnail" src="https://placehold.it/550x550" />
            <h5>My Site</h5>
          </div>
        </div>




          <hr />

          <Footer />

      </div>

             




          
            



      
    

    );
  }
}

export default App;
