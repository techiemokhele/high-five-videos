import React from 'react';
import { CallToActionComponent, FooterComponent, HeaderComponent } from './components';

function App() {
  const handleExploreNow = () => {
    console.log("handle explore now button pressed");
  };

  return (
    <div className="flex flex-col h-full bg-black gap-10">
      <HeaderComponent />
      <CallToActionComponent
        firstTitle="Explore a world of"
        secondTitle="Unique Edits"
        firstDescription="Subscribe to HIVE and gain access to a library of unique and beautiful fully edited videos"
        secondDescription='contributed by video editors from all around the world!!'
        buttonAction={handleExploreNow}
      />
      <FooterComponent />
    </div>
  );
}

export default App;
