import '../css/Pages.scss';
import { BsChevronRight } from "react-icons/bs";

const NewsList = ({ content }) => {
    return (
        <section className='Newslist psc'>
            <figure>
                <h2>{content[6].title}</h2>
            </figure>
            <div className="nav_bar">
                <div className="inner">
                    <span>홈<BsChevronRight />{content[6].title}</span>
                </div>
            </div>
        </section>
    )
}

export default NewsList;
