import React from 'react';

function NavBar() {
    const navList = [
        'Home',
        'Our Story',
        'Meet the Team',
        'Wedding Info',
        'RSVP',
        'Registry'
    ];

    const navItems = navList.map((listItem,i) =>
    <li key={'nav_li_'+i} className='nav-item'>
    <a href={listItem.replaceAll(' ','')} className='nav-link text-white link'>{listItem}</a>
    </li>);

    return (
        <nav className='navbar navbar-expand-lg'>
            <ul className='navbar-nav mx-auto mt-5'>{navItems}</ul>
        </nav>
    );
};

export default NavBar;