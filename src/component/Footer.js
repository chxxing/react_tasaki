const FOOTER = [
    { id: 1, title: "사이트맵", link: "" },
    { id: 2, title: "개인정보 처리방침", link: "" },
    { id: 3, title: "소셜 미디어(SNS)정책", link: "" },
    { id: 4, title: "ABOUT OUR PRODUCTS", link: "" },
    { id: 5, title: "브라우저 요구사항", link: "" }
]
const SNS = [
    { id: 1, icon: "bi-facebook", link: "https://www.facebook.com/TASAKI.KOREA" },
    { id: 2, icon: "bi-instagram", link: "https://www.instagram.com/tasaki_intl/" },
    { id: 3, icon: "bi-youtube", link: "https://www.youtube.com/user/TASAKIJAPAN" }
]

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="top">
                <div className="container">
                    <ul className="Fnb">
                        {
                            FOOTER.map((con) => {
                                return (
                                    <li key={con.id}><a href={con.link}>{con.title}</a></li>
                                )
                            })
                        }
                    </ul>
                    <div className="sns">
                        {
                            SNS.map((el) => {
                                return (
                                    <a href={el.link} target="_blank" key={el.id}><i className={el.icon}></i></a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <ul>
                        <li><a href="#!">Copyright &copy; TASAKI &amp; Co.,Ltd. All rights reserved.</a></li>
                        <li><a href="#!">사업자등록번호: 126-86-02610.</a></li>
                        <li><a href="mailto:tasakiinfo@tasaki.co.kr">tasakiinfo@tasaki.co.kr</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
