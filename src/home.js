import React, { useState, useEffect } from 'react';
import Topnav from './TopNav/topnav.js';
import Slideshow from './Slideshow/slideshow.js';
import WedAbout from './About/about.js';

function Home() {
    return (
        <div style={{ width: "calc(100% - 40px)", backgroundColor: "transparent", height: "100vh" }}>
            <Topnav />
            <Slideshow />
            <WedAbout />
        </div>
    )
}

export default Home;