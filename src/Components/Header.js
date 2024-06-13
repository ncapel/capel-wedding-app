import React from 'react';

const weddingDate = new Date("2024-11-10T00:00:00");

function Header() {
    const now = new Date();
    const countDown = weddingDate.getTime()  - now.getTime();
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));

    return (
        <div className='text-center text-white' style={{
            marginTop: '230px'
        }}>
            <h1 className='mb-3' id='title'>Nicholas & Cheyenne</h1>
            <h5>November 10, 2024 • Hickory, NC</h5>
            <h5>{days + ' days to go!'.toUpperCase()}</h5>
        </div>
    );
};

export default Header;