import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
const SideNav = () => {
    return (
        <>
            <SideNavWrap>여기는 사이드</SideNavWrap>
        </>
    );
};



const SideNavWrap = tw.div`
  w-[300px] h-[calc(100vh + 50px)]] bg-[#F8F8F8]
`;

export default SideNav;
