import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const MENUDATA = [
    { id: 1, title: "NEW ARRIVAL", link: "/newarrival" },
    { id: 2, title: "JEWELLERY", link: "/jewellery" },
    { id: 3, title: "BRIDAL", link: "/bridal" },
    { id: 4, title: "TIMEPIECES", link: "/timepieces" },
    { id: 5, title: "OTHERS", link: "/others" },
    { id: 6, title: "ABOUT TASAKI", link: "/about" },
    { id: 7, title: "NEWS", link: "/news" },
    { id: 8, title: "STORES", link: "/stores" },
];

const MAINSLIDER = [
    { id: 1, title: "TASAKI Atelier <Radiant>", des: "마법처럼 매혹적인 블루 터콰이즈를 통해 눈부신 아름다움,\n순수하고 맑은 파란빛을 통해 시시각각 변하는 구름의 신비로운 모습을 재해석하였다.", link: "/jewellery" },
    { id: 2, title: "TASAKI Danger", des: "날렵한 가시와 송곳니 디테일로 식충 식물, 전갈, 상어와 같은\n위험한 생명체 속에 숨겨진 신비롭고 아름다운 매력을 담아냈습니다.\n다이아몬드가 세팅된 화려한 디자인으로 탄생한\n신비로운 세계 속 숨겨진 데인저의 매력을 직접 경험해 보세요.", link: "/newarrival" },
    { id: 3, title: "TASAKI Bridal", des: "TASAKI의 브라이덜 링 주얼리는 최고의 품질과 뛰어난 장인 정신을 자랑하며\n순수한 다이아몬드의 광택으로 영원한 사랑과 기쁨을 축복합니다", link: "/bridal" },
];

const NEWS = [
    { id: 1, title: "TASAKI 새로운 글로벌 광고 캠페인", date: "2022.06.23", link: "/news" },
    { id: 2, title: "TASAKI, 모나코 호텔 드 파리 몬테카를로에 1호점 오픈", date: "2021.06.01", link: "/news" },
    { id: 3, title: "모조품에 관한 당사의 입장", date: "2018.05.09", link: "/news" }
];

const FOOTER = [
    { id: 1, title: "사이트맵", link: "/" },
    { id: 2, title: "개인정보 처리방침", link: "/" },
    { id: 3, title: "소셜 미디어(SNS)정책", link: "/" },
    { id: 4, title: "ABOUT OUR PRODUCTS", link: "/" },
    { id: 5, title: "브라우저 요구사항", link: "/" }
];

const SNS = [
    { id: 1, icon: <BsFacebook />, link: "https://www.facebook.com/TASAKI.KOREA" },
    { id: 2, icon: <BsInstagram />, link: "https://www.instagram.com/tasaki_intl/" },
    { id: 3, icon: <BsYoutube />, link: "https://www.youtube.com/user/TASAKIJAPAN" }
];

export { MENUDATA, MAINSLIDER, NEWS, FOOTER, SNS };