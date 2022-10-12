import { Link } from 'react-router-dom';
import { BsCart, BsSearch, BsGeoAlt, BsPerson, BsHeart } from "react-icons/bs";
import Language from './Language';
import Nav from './Nav';
import '../css/Header.scss';

const Header = ({ content }) => {
    return (
        <header className='Header'>
            <div className="container">
                <ul className="leftMenu">
                    <li><Link to='/'><BsSearch /></Link></li>
                    <li><Link to='/stores'><BsGeoAlt /></Link></li>
                    <li><Link to='/'><BsPerson /></Link></li>
                    <li><Link to='/'><BsHeart /></Link></li>
                    <li><Link to='/'><BsCart /></Link></li>
                </ul>
                <h1>
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="" />
                    </Link>
                </h1>
                <ul className="rightMenu">
                    <li><Link to='/board'>문의하기</Link></li>
                    <li><Language /></li>
                </ul>
            </div>
            <nav>
                <Nav navcon={content} />
            </nav>
        </header>
    )
}

export default Header;
