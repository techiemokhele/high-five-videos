import React from 'react';

import { HeaderComponent, FooterComponent } from './components';

function App() {
  return (
    <div className="flex flex-col h-full bg-black gap-10">
      <HeaderComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
