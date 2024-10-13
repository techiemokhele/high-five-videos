import React from 'react';
import { CallToActionComponent, ContributorComponent, FooterComponent, HeaderComponent, SubscribeComponent, TopLandingComponent } from './components';


function App() {
  const handleContributor = () => {
    console.log("handle contributor button pressed");
  };

  const handleExploreNow = () => {
    console.log("handle explore now button pressed");
  };

  const handleSubscribe = () => {
    console.log("handle subscribe button pressed");
  };

  return (
    <div className="flex flex-col h-full bg-black">
      <div className="flex flex-col">
        <HeaderComponent />
        <div className="border-t-[0.2px] border-gray-2"></div>
        <TopLandingComponent />
      </div>

      <div className="flex flex-col">
        <ContributorComponent
          avatar="./assets/images/avatar.png"
          firstTitle="Turn"
          firstSubTitle="Your Work"
          secondTitle="into"
          secondSubTitle="Revenue"
          firstDescription="Subscribe to HIVE and gain access to a library of unique and beautiful fully edited videos contributed by video editors from all around the world!!"
          buttonAction={handleContributor}
        />
      </div>

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
