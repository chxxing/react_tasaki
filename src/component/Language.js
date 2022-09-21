import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const LANGUAGE = [
    { id: 0, name: "대한민국", link: "" },
    { id: 1, name: "日本", link: "https://www.tasaki.co.jp/" },
    { id: 2, name: "中國", link: "https://www.tasaki.com.cn/" },
    { id: 3, name: "ENGLISH", link: "https://www.tasaki-global.com/" }
]

const Select = styled.select`
    border: 1px solid #e3f0ea;
    background: transparent;
    font-size: 15px;
    padding: 5px 10px;
`

const Language = () => {
    const [lnk, setLnk] = useState();

    useEffect(() => {
        lnk && window.open(lnk);
    }, [lnk])

    return (
        <Select onChange={(e) => setLnk(e.target.value)}>
            {
                LANGUAGE.map(link => <option value={link.link} key={link.id}>{link.name}</option>)
            }
        </Select>
    )
}

export default Language;
