import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import company from '../data/profile';

const FOOTER = [
    { id: 1, title: "사이트맵", link: "/" },
    { id: 2, title: "개인정보 처리방침", link: "/" },
    { id: 3, title: "소셜 미디어(SNS)정책", link: "/" },
    { id: 4, title: "ABOUT OUR PRODUCTS", link: "/" },
    { id: 5, title: "브라우저 요구사항", link: "/" }
]
const SNS = [
    { id: 1, icon: "BsFacebook", link: "https://www.facebook.com/TASAKI.KOREA" },
    { id: 2, icon: "BsInstagram", link: "https://www.instagram.com/tasaki_intl/" },
    { id: 3, icon: "BsYoutube", link: "https://www.youtube.com/user/TASAKIJAPAN" }
]

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="top">
                <div className="container">
                    <ul className="Fnb">
                        {
                            FOOTER.map(con => {
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
                            SNS.map(it => {
                                return (
                                    <li key={it.id}>
                                        <Link to={it.link}><{it.icon} /></Link>
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
                            <Link to='/'>{company.copyright}</Link>
                        </li>
                        <li>
                            <Link to='/'>{company.number}</Link>
                        </li>
                        <li>
                            <Link to='javascript:void(0)' onClick={() => window.location = 'mailto:tasakiinfo@tasaki.co.kr'}>{company.mail}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
