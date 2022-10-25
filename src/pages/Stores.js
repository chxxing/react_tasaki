import { BsChevronRight } from "react-icons/bs";
import { useState } from 'react';

const Stores = ({ content, store }) => {
    const [strtab, setStrtab] = useState(0);
    const stTabHandler = (idx) => {
        setStrtab(idx);
    };

    return (
        <section className='Stores psc'>
            <div className="nav_bar">
                <div className="inner">
                    <span>홈<BsChevronRight />{content[5].title}</span>
                </div>
            </div>
            <div className='bgimg'>
                <h2>{content[5].title}</h2>
            </div>
            <div className="secPage">
                <ul className='st_tab'>
                    <div className="container">
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
                    </div>
                </ul>
                <div className="inner mainPage">
                    <strong>{store[strtab].area}</strong>
                    <table className="st_table">
                        <thead>
                            <tr>
                                <th>매장명</th>
                                <th>주소</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                store[strtab].location?.map((it, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td>{it.name}</td>
                                            <td>{it.address}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section >
    )
}

export default Stores
