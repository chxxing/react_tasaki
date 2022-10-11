import { Link } from 'react-router-dom';

const Nav = ({ navcon }) => {
    return (
        <ul className="Gnb inner">
            {
                navcon.map(it => {
                    return (
                        <li key={it.id}>
                            <Link to={it.link}>{it.title}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Nav;
