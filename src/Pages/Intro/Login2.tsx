import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../Components/Button';
import {promises} from "dns";
import {getCurrentUserInfo, login} from "../../api/login";
import {useRouter} from "../../hooks/useRouter";
import {useRecoilState} from "recoil";
import {IUser, LoginState, User} from "../../Atom/Atoms";
import {useCookies} from "react-cookie";

const IntroLogin2 = () => {
  const { routeTo } = useRouter();
  const [user, setUser] = useRecoilState<IUser>(User);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);

  const isLoggedInCk = async (): Promise<boolean>=> {
    // const userProfileResponse = await getCurrentUserInfo();
    // return userProfileResponse !== null
    let userProfileResponse;
    console.log('isLoggedIn',isLoggedIn)
    if (isLoggedIn) {
      userProfileResponse = true;
    } else {
      userProfileResponse = false;
    }
    return userProfileResponse
  }

  const loginSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // 로그인 여부 확인
    const isUserLoggedIn: boolean = await isLoggedInCk();
    if (isUserLoggedIn) {
      routeTo('/');
      return
    }

    const loginResult = await login({
      username: formData.get('username') as string,
      password: formData.get('password') as string
    });

    if (loginResult === 'fail') {
      alert('로그인 실패')
      setIsLoggedIn(false);
      return
    } else {
      setIsLoggedIn(true);
    }
    routeTo('/');
  }
  return (
      <>
        <Login>
          <LoginBox>
            <div className="font-bold text-[18px] mb-[20px]">로그인</div>
            <form onSubmit={loginSubmitHandler}>
              <div className="flex; flex-col">
                <StyledInput type="text" name="username"/>
                <StyledInput type="password" name="password" />
              </div>
              <Button className="w-full h-[40px] rounded-[5px] bg-[#2083F8] leading-[15px]" type="submit" value="Submit">submit</Button>
            </form>
          </LoginBox>
        </Login>
      </>
  );
};

const Login = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: auto;
  min-height: 100vh;
  background-color: #1367ca;
`;
const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 456px;
  background-color: #fff;
  border-radius: 8px;
  padding: 50px;
`;

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid #dcdcdd;
  background-color: #fff;
  padding: 10px 15px;
  display: block;
  margin-bottom: 5px
`;
// const StyledButton = styled.button`
//   border: 1px solid #dcdcdd;
//   background-color: #36f;
//   padding: 10px 15px;
//   color: #fff;
// `;
export default IntroLogin2;
