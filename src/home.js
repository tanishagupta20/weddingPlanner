import React, { useState, useEffect } from 'react';
import Topnav from './TopNav/topnav.js';

function Home() {
    return (
        <div style={{ width: "calc(100% - 40px)", backgroundColor: "transparent", height: "100vh" }}>
            <Topnav />
        </div>
    )
}

export default Home;