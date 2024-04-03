import React, { useEffect, useState } from 'react';
import Header from '../organism/header';
import MenuComponent from "../organism/menu";
import SideMenu from "../organism/sidemenu";

import BackgroundColorChanger from '../atoms/BackgroundColorChanger';

function LandingPage() {
  const [backgroundColor, setBackgroundColor] = useState(() => {
    // Check if there's a color stored in local storage, otherwise use default
    return localStorage.getItem('backgroundColor') || '#d9d9d9';
  });

  useEffect(() => {
    document.title = 'Landing Page';

    return () => {
      document.title = 'Default Title';
    };
  }, []);

  // Function to handle color change
  const handleColorChange = (color) => {
    setBackgroundColor(color);
    // Store the color in local storage
    localStorage.setItem('backgroundColor', color);
  };

  const colors = [
    'linear-gradient(45deg, #FFDDC1, #AEEEFF)',
    'linear-gradient(45deg, #C1FFC1, #FFF8A9)',
    'linear-gradient(45deg, #FFD700, #FFA07A)',
    'linear-gradient(45deg, #F0E68C, #FFDAB9)',
  ];

  return (
    <div style={{ height: '100vh', display: "flex", flexDirection: "column", overflow: 'hidden',backgroundColor:"gray" }}>
      <Header />
      <div style={{ display: 'flex', height: '-webkit-fill-available', overflow: 'hidden' }}>
        <div style={{ width: '85px', overflow: 'hidden', backgroundColor:"white" }}>
          <SideMenu />
        </div>
        <div style={{ width: '100%', marginRight:"-10px", backgroundColor: backgroundColor, overflow: 'hidden' }}>
          <div style={{  }}>
            <MenuComponent backgroundColor={backgroundColor} />
          </div>
     
          <BackgroundColorChanger colors={colors} onColorChange={handleColorChange} />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
