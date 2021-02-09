import React from "react";
import '../../css/app.css';
import CardsUser from "../cardsUser/index";
import StoriesBar from "../sotriesBar/index";

function HomePage() {


  return (
    <div className="App">

      <StoriesBar/>
      <CardsUser/>
      
    </div>
  );
}

export default HomePage;
