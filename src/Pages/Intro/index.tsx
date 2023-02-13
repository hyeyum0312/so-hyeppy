import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import tw from 'tailwind-styled-components';

const Intro: React.FC = () => {
  return (
    <IntroWrap>
      <IntroHead className="mb-[20px]">
        <div className="text-[18px] font-bold p-[20px] indent-[20px]">‍😃 so hyeppy님, 오늘도 힘찬 하루 보내세요!</div>
      </IntroHead>
      <IntroBody className="">
        <IntroBodyBox className="flex items-center justify-center">
          <div className="text-[30px] font-bold text-center">뭘 넣으면 좋을까?</div>
        </IntroBodyBox>
      </IntroBody>
    </IntroWrap>
  );
};

const IntroWrap = tw.div`
 w-full h-[100vh] bg-[#F9F9F9]
`;
const IntroHead = tw.div`
 w-full h-[60px] bg-white shadow flex items-center 
`;

const IntroBody = tw.div`
 flex items-center justify-center p-[20px]
`;

const IntroBodyBox = tw.div`
 bg-white w-full h-[178px]
 rounded-t-lg  rounded-r-lg  rounded-b-lg  rounded-l-lg shadow
`;

export default Intro;
