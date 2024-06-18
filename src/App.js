import React from 'react';
import NavBar from './Components/Nav';
import Header from './Components/Header';
import Story from './Components/OurStory';
import WeddingInfo from './Components/Info';
import venueImage from './assets/img/warehouse18.jpg'

function App() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <Story/>
      <WeddingInfo imgPath={venueImage}/>
    </div>
  );
}

export default App;
