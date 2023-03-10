import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import tw from 'tailwind-styled-components';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';

const Intro: React.FC = () => {
    const navigate = useNavigate();
    const todoListRegistration = () => {
        navigate('/TodoList');
    };
  return (
    <IntroWrap>
      <IntroHead className="mb-[20px]">
        <div className="text-[18px] font-bold p-[20px] indent-[20px]">βπ νμ°λ, μ€λλ νμ°¬ νλ£¨ λ³΄λ΄μΈμ!</div>
      </IntroHead>
      <IntroBody className="">
        <IntroBodyBox>
          <Todolist>
              <TodolistTitle>μ€λν μΌ</TodolistTitle>
              <TodoListBody>
                  <TodoListBodyInner>
                      <TodoListBodyText>μ€λ ν μΌμ μλ ₯ν΄λ³΄μΈμ</TodoListBodyText>
                      <TodoListButton onClick={todoListRegistration}>μ€λ ν μΌ λ±λ‘νλ¬κ°κΈ°</TodoListButton>
                  </TodoListBodyInner>
              </TodoListBody>
          </Todolist>

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
 bg-white w-[500px] h-[300px] flex
 rounded-t-lg  rounded-r-lg  rounded-b-lg  rounded-l-lg shadow
`;

const Todolist = tw.div`
    w-full flex flex-col
`
const TodoListBody = tw.div`
flex flex-col items-center h-full justify-center p-[20px] 
`
const TodoListBodyInner = tw.div`
    flex bg-[#F6F6F6] justify-center items-center w-full h-full flex flex-col
`

const TodolistTitle = tw.div`
    text-[18px] text-[#565F7C] font-bold h-[50px] leading-[25px] p-[10px]
`
const TodoListBodyText = tw.div`
   text-[14px] mb-5
`
const TodoListButton = tw.div`
    w-[120px] h-[24px] leading-[24px] rounded-[3px] cursor-pointer bg-blue-400 text-center text-white
`

export default Intro;
