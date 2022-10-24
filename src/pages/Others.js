import '../css/Pages.scss';
import { BsChevronRight } from "react-icons/bs";

const Others = ({ content }) => {
    return (
        <section className='Others psc'>
            <figure>
                <h2>{content[4].title}</h2>
            </figure>
            <div className="nav_bar">
                <div className="inner">
                    <span>홈<BsChevronRight />{content[4].title}</span>
                </div>
            </div>
        </section>
    )
}

export default Others;
