import React from 'react';
import { CallToActionComponent, FooterComponent, HeaderComponent, SubscribeComponent } from './components';


function App() {
  const handleExploreNow = () => {
    console.log("handle explore now button pressed");
  };

  const handleSubscribe = () => {
    console.log("handle subscribe button pressed");
  };

  return (
    <div className="flex flex-col h-full bg-black">
      <HeaderComponent />
      <div>
        <CallToActionComponent
          firstTitle="Explore a world of"
          secondTitle="Unique Edits"
          firstDescription="Subscribe to HIVE and gain access to a library of unique and beautiful fully edited videos"
          secondDescription='contributed by video editors from all around the world!!'
          buttonAction={handleExploreNow}
        />
      </div>
      <div>
        <SubscribeComponent
          avatar="./assets/images/avatar.png"
          firstTitle="Get only the"
          secondTitle="Best"
          firstDescription="Subscribe to HIVE and gain access to a library of unique and beautiful fully edited videos contributed by video editors from all around the world!!"
          buttonAction={handleSubscribe}
        />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
