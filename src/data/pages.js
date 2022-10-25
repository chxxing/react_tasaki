const STORES = [
    {
        id: 1, area: "서울",
        location: [
            { name: "현대백화점 무역센터점", address: "서울특별시 강남구 테헤란로 517 현대백화점 무역센터점 2층" },
            { name: "현대백화점 본점", address: "서울특별시 강남구 압구정동 429 현대백화점 본점 2층" },
            { name: "현대백화점 목동점", address: "서울특별시 양천구 목동동로 257 현대백화점 목동점 2층" },
            { name: "에비뉴엘 본점", address: "서울특별시 중구 남대문로 81 에비뉴엘 본점 2층" },
            { name: "에비뉴엘 월드타워점", address: "서울특별시 송파구 신천동 29번지 에비뉴엘 월드타워 2층" },
            { name: "갤러리아 명품관 EAST", address: "서울특별시 강남구 압구정로 407 갤러리아백화점 명품관 EAST점 2층" },
        ]
    },
    {
        id: 2, area: "경기도",
        location: [
            { name: "현대백화점 판교점", address: "경기도 성남시 분당구 판교역로 146번길 20 현대백화점 판교점 2층" },
            { name: "갤러리아백화점 광교점", address: "경기도 수원시 영통구 광교호수공원로 320 갤러리아백화점 광교점 1층" },
            { name: "프리미엄아울렛 여주점", address: "경기도 여주시 명품로360 여주프리미엄아울렛 336호" },
        ]
    },
    {
        id: 3, area: "대구",
        location: [
            { name: "현대백화점 대구점", address: "대구광역시 중구 계산동 2가 200 현대백화점 대구점 2층" },
        ]
    },
    {
        id: 4, area: "부산",
        location: [
            { name: "에비뉴엘 부산본점", address: "부산 광역시 부산진구 가야대로 772 롯데 백화점 부산 본점 에비뉴엘 1층" },
        ]
    }
];

const NEWARRIVAL = [
    { id: 1, name: "danger signature", src: "/assets/images/new_img01.jpg" },
    { id: 2, name: "danger tribe", src: "/assets/images/new_img02.jpg" },
    { id: 3, name: "danger fang", src: "/assets/images/new_img03.jpg" },
    { id: 4, name: "danger scorpion", src: "/assets/images/new_img04.jpg" },
    { id: 5, name: "danger plus", src: "/assets/images/new_img05.jpg" },
    { id: 6, name: "danger", src: "/assets/images/new_img06.jpg" },
    { id: 7, name: "danger trap", src: "/assets/images/new_img07.jpg" },
    { id: 8, name: "danger fringe", src: "/assets/images/new_img08.jpg" },
    { id: 9, name: "danger spike", src: "/assets/images/new_img09.jpg" },
    { id: 10, name: "danger neo", src: "/assets/images/new_img010.jpg" },
    { id: 11, name: "danger diamonds", src: "/assets/images/new_img011.jpg" },
    { id: 12, name: "danger gulper", src: "/assets/images/new_img012.jpg" }
];

const BRIDAL = [
    { id: 1, name: "engagement ring", src: "/assets/images/bridal_img01.jpg" },
    { id: 2, name: "marriage ring", src: "/assets/images/bridal_img02.jpg" },
    { id: 3, name: "tiara collection", src: "/assets/images/bridal_img03.jpg" },
    { id: 4, name: "tasaki bridal", src: "/assets/images/bridal_img04.jpg" },
];

const JEWELLERYCLT = [
    { id: 1, name: "balance", src: "/assets/images/jewc_img01.jpg" },
    { id: 2, name: "refined rebellion", src: "/assets/images/jewc_img02.jpg" },
    { id: 3, name: "danger", src: "/assets/images/jewc_img03.jpg" },
    { id: 4, name: "abstract star", src: "/assets/images/jewc_img04.jpg" },
    { id: 5, name: "comet plus", src: "/assets/images/jewc_img05.jpg" },
    { id: 6, name: "cosmic / kinetic", src: "/assets/images/jewc_img06.jpg" }
];

const JEWELLERY = [
    { id: 1, name: "ring", src: "/assets/images/jew_img01.jpg" },
    { id: 2, name: "necklace", src: "/assets/images/jew_img02.jpg" },
    { id: 3, name: "pendant", src: "/assets/images/jew_img03.jpg" },
    { id: 4, name: "earrings", src: "/assets/images/jew_img04.jpg" },
    { id: 5, name: "bracelet", src: "/assets/images/jew_img05.jpg" },
    { id: 6, name: "others", src: "/assets/images/jew_img06.jpg" },
];

const COMPANY = [
    { id: 1, name: "진주 스토리", src: "/assets/images/about01.jpg" },
    { id: 2, name: "다이아몬드 스토리", src: "/assets/images/about02.jpg" },
    { id: 3, name: "SAKURAGOLD™", src: "/assets/images/about03.jpg" },
];

const NEWS = [
    { id: 1, title: "모조품에 관한 당사의 입장", date: "2018.05.09" },
    { id: 2, title: "TASAKI, 현대백화점 판교점 그랜드 오픈", date: "2022.10.20" },
    { id: 3, title: "TASAKI, 새로운 글로벌 광고 캠페인", date: "2022.06.23" },
    { id: 4, title: "TASAKI, 모나코 호텔 드 파리 몬테카를로에 1호점 오픈", date: "2021.06.01" },
    { id: 5, title: "TASAKI, 세 명의 아티스트와 새로운 광고 캠페인 시작 ", date: "2020.10.16" },
    { id: 6, title: "TASAKI, 갤러리아 광교점 그랜드 오픈", date: "2020.03.05" },
    { id: 7, title: "TASAKI Atelier, 크리에이티브 디렉터 프라발 구룽 Fall 2020 NYFW 패션쇼에서 공개", date: "2020.02.14" },
    { id: 8, title: "TASAKI, 새로운 광고 캠페인 시작", date: "2019.08.28" },
    { id: 9, title: "TASAKI, 에비뉴엘 월드타워점 리뉴얼 오픈", date: "2019.05.28" },
];

export { STORES, NEWARRIVAL, BRIDAL, JEWELLERYCLT, JEWELLERY, COMPANY, NEWS };