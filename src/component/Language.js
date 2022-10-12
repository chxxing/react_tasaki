import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { BsChevronDown } from "react-icons/bs";

const LANGUAGE = [
    { id: 0, name: "한국/한국어", link: "/" },
    { id: 1, name: "日本語", link: "https://www.tasaki.co.jp/" },
    { id: 2, name: "繁体中文", link: "https://www.tasaki.com.cn/" },
    { id: 3, name: "ENGLISH", link: "https://www.tasaki-global.com/" }
]

const SelectBox = styled.div`
    position: relative;
    width: 110px;
`

const Select = styled.select`
    width: inherit;
    height: inherit;
    background: transparent;
    border: none;
    padding: 5px 0px 5px 15px;
    appearance: none;
    cursor: pointer;
`
const Span = styled.span`
    position: absolute;
    top: 2px;
    right: 0;
    font-size: 13px;
`

const Language = () => {
    const [lnk, setLnk] = useState();

    useEffect(() => {
        lnk && window.open(lnk);
    }, [lnk])

    return (
        <SelectBox>
            <Select onChange={(e) => setLnk(e.target.value)}>
                {
                    LANGUAGE.map(link => <option value={link.link} key={link.id}>{link.name}</option>)
                }
            </Select>
            <Span><BsChevronDown /></Span>
        </SelectBox>
    )
}

export default Language;
