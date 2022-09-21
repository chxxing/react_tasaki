import React from 'react'
import Language from './Language';
import Menu from './Menu';

const Header = () => {
    return (
        <header className='Header'>
            <div className="container">
                <div className="menuIcon">
                    <a href="#!"><i className="bi-search"></i></a>
                    <a href="#!"><i className="bi-geo-alt"></i></a>
                    <a href="#!"><i className="bi-person"></i></a>
                    <a href="#!"><i className="bi-heart"></i></a>
                    <a href="#!"><i className="bi-cart"></i></a>
                </div>
                <h1>
                    <a href="./">
                        <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="" />
                    </a>
                </h1>
                <div className="language">
                    <Language />
                </div>
            </div>
            <Menu />
        </header>

    )
}

export default Header;
