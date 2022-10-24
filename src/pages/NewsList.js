import '../css/Pages.scss';
import { BsChevronRight } from "react-icons/bs";

const NewsList = ({ content }) => {
    return (
        <section className='Newslist psc'>
            <div className="nav_bar">
                <div className="inner">
                    <span>홈<BsChevronRight />{content[4].title}</span>
                </div>
            </div>
            <div className='bgimg'>
                <h2>{content[4].title}</h2>
            </div>

        </section>
    )
}

export default NewsList;
