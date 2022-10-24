import '../css/Pages.scss';
import { BsChevronRight } from "react-icons/bs";

const Company = ({ content }) => {
    return (
        <section className='Company psc'>
            <div className="nav_bar">
                <div className="inner">
                    <span>홈<BsChevronRight />{content[3].title}</span>
                </div>
            </div>
            <div className='bgimg'>
                <h2>{content[3].title}</h2>
            </div>

        </section>
    )
}

export default Company
