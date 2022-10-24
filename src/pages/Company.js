import '../css/Pages.scss';
import { BsChevronRight } from "react-icons/bs";

const Company = ({ content }) => {
    return (
        <section className='Company psc'>
            <figure>
                <h2>{content[5].title}</h2>
            </figure>
            <div className="nav_bar">
                <div className="inner">
                    <span>홈<BsChevronRight />{content[5].title}</span>
                </div>
            </div>
        </section>
    )
}

export default Company
