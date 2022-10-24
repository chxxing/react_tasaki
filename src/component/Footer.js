import { Link } from "react-router-dom";
import company from '../data/profile';
import '../css/Footer.scss';

const Footer = ({ content, sns }) => {
    return (
        <footer className="Footer">
            <div className="top">
                <div className="container">
                    <ul className="Fnb">
                        {
                            content.map(con => {
                                return (
                                    <li key={con.id}>
                                        <Link to={con.link}>{con.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul className="sns">
                        {
                            sns.map(it => {
                                return (
                                    <li key={it.id}>
                                        <Link to={it.link}>{it.icon}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <ul>
                        <li>
                            <Link to='/'>{company.number}</Link>
                        </li>
                        <li>
                            <Link to='javascript:void(0)' onClick={() => window.location = 'mailto:tasakiinfo@tasaki.co.kr'}>{company.mail}</Link>
                        </li>
                        <li>
                            <Link to='/'>{company.copyright}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
