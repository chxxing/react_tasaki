import React from 'react';

const MENU = [
    {
        id: 1, title: "NEW ARRIVAL", link: "#!", submenu: [
            { stitle: "Balance", link: "#!" },
            { stitle: "Refined Rebellion", link: "#!" },
            { stitle: "Danger", link: "#!" },
            { stitle: "Abstract Star", link: "#!" },
            { stitle: "Comet Plus", link: "#!" },
            { stitle: "Cosmic / Kinetic", link: "#!" }
        ]
    },
    {
        id: 2, title: "JEWELLERY", link: "#!", submenu: [
            { stitle: "Ring", link: "#!" },
            { stitle: "Necklace", link: "#!" },
            { stitle: "Pendant", link: "#!" },
            { stitle: "Earrings", link: "#!" },
            { stitle: "Bracelet", link: "#!" },
            { stitle: "Other", link: "#!" },
            { stitle: "TASAKI Atelier", link: "#!" }
        ]
    },
    {
        id: 3, title: "BRIDAL", link: "#!", submenu: [
            { stitle: "Engagement Ring", link: "#!" },
            { stitle: "Marriage Ring", link: "#!" },
            { stitle: "Tiara Collection", link: "#!" },
            { stitle: "TASAKI Bridal", link: "#!" }
        ]
    },
    {
        id: 4, title: "TIMEPIECES", link: "#!", submenu: [
            { stitle: "Buoy", link: "#!" },
            { stitle: "Cove", link: "#!" },
            { stitle: "Abstract Star", link: "#!" },
            { stitle: "Comet Plus", link: "#!" },
            { stitle: "Odessa", link: "#!" },
            { stitle: "Cluster", link: "#!" },
            { stitle: "Serpentine", link: "#!" },
            { stitle: "Refined Rebellion", link: "#!" }
        ]
    },
    {
        id: 5, title: "OTHERS", link: "#!", submenu: [
            { stitle: "Men's Small Leather Goods", link: "#!" },
            { stitle: "Men's Collection 'ARMORY'", link: "#!" }
        ]
    },
    {
        id: 6, title: "ABOUT TASAKI", link: "#!", submenu: [
            { stitle: "TASAKI의 퀄리티", link: "#!" },
            { stitle: "기업정보", link: "#!" },
            { stitle: "회사소개", link: "#!" },
            { stitle: "경영이념", link: "#!" },
            { stitle: "채용정보", link: "#!" },
        ]
    },
    {
        id: 7, title: "NEWS", link: "#!", submenu: [
            { stitle: "news", link: "#!" }
        ]
    }
]

const Menu = () => {
    return (
        <nav className='Gnb'>
            <ul className='menu'>
                {
                    MENU.map((it) => (
                        <li key={it.id}>
                            <a href={it.link}>{it.title}</a>
                            <ul className='submenu'>
                                {
                                    it.submenu.map((smenu, idx) => (
                                        <li key={idx}><a href={smenu.link}>{smenu.stitle}</a></li>
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Menu;
