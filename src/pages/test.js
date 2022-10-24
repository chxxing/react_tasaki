// import React, { useState } from 'react';
// import Content1 from './Content1';
// import Content2 from './Content2';

// const Tabs = () => {
//     const tabTitle = ['메뉴1', '메뉴2'];
//     const tab = { 0: <Content1 />, 1: <Content2 /> };
//     const [activeTab, setActiveTab] = useState(0);
//     const onClickTab = (idx) => {
//         setActiveTab(idx);
//     };

//     return (
//         <>
//             <div>
//     	  //탭메뉴
//                 {tabTitle.map((title, idx) => {
//                     return (
//                         <span
//                             key={idx}
//                             onClick={() => onClickTab(idx)}
//                         >
//                             {title}
//                         </span>
//                     );
//                 })}
//             </div>
//             <div>
//           //해당 콘텐츠
//                 {tab[activeTab]}
//             </div>
//         </>
//     );
// };

// export default Tabs;

// ------------------------------

// export const Tab = () => {
//     const [currentTab, setCurrentTab] = useState(0);
  
//     const menuArr = [
//       { name: 'Tab1', content: 'Tab menu ONE' },
//       { name: 'Tab2', content: 'Tab menu TWO' },
//       { name: 'Tab3', content: 'Tab menu THREE' },
//     ];
  
//     const selectMenuHandler = (index) => {
//       setCurrentTab(index);
//     };
  
//     return (
//       <>
//         <div>
//           <TabMenu>
//             {menuArr.map((ele, index)=>{
//               return (
//                 <li
//                 key={index}
//                 className={currentTab === index ? "submenu focused" : "submenu"}
//                 onClick={()=> selectMenuHandler(index)}
//               >
//                 {ele.name}
//               </li>
//                 )
//             })}
  
//           </TabMenu>
//           <Desc>
//             <h1>{menuArr[currentTab].content}</h1>
//             <p>바뀌는거 맞습니다..</p>
//           </Desc>
//         </div>
//       </>
//     );
//   };