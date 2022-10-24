import '../css/Pages.scss';
import { BsChevronRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Stores = ({ content, store }) => {
    const [strtab, setStrtab] = useState(0);
    const stTabHandler = (idx) => {
        setStrtab(idx);
    };
    return (
        <section className='Stores psc'>
            <figure>
                <h2>{content[7].title}</h2>
            </figure>
            <div className="nav_bar">
                <div className="inner">
                    <span>홈<BsChevronRight />{content[7].title}</span>
                </div>
            </div>
            <ul className='st_tab'>
                {
                    store.map((it, idx) => {
                        return (
                            <li
                                className={strtab === idx ? "on" : ""}
                                onClick={() => stTabHandler(idx)} key={it.id}>
                                {it.area}
                            </li>
                        )
                    })
                }
            </ul>
            <br />
            <div className="st_address">
                <p>{store[strtab].name}</p>
                <br />
                <span>{store[strtab].address}</span>
            </div>
        </section >
    )
}

export default Stores
