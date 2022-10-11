import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const LANGUAGE = [
    { id: 0, name: "한국/한국어", link: "/" },
    { id: 1, name: "日本語", link: "https://www.tasaki.co.jp/" },
    { id: 2, name: "繁体中文", link: "https://www.tasaki.com.cn/" },
    { id: 3, name: "ENGLISH", link: "https://www.tasaki-global.com/" }
]

const Select = styled.select`
    border: none;
    background: transparent;
    font-size: 15px;
    padding: 5px 0;
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
