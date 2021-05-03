import React from 'react';

const Header = (props) => (
    <header className="header">
        <div className="wrapper"> 
            <span className="header-title"> {props.subtitle}</span>
        </div>
    </header>
);

export default Header;