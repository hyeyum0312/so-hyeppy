import React from 'react';
import {atom, useRecoilState} from "recoil";
import {IUser, LoginState, User} from "./atom";


// 컴포넌트에서 아톰을 사용하기 위해 export를 사용해 내보냅니다.
export const userLogin = atom({
    key: "userLogin",
    default: 0
})

function Enter() {
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
    const [user, setUser] = useRecoilState<IUser>(User);

    const onChange = (event:any) => {
        setIsLoggedIn(event.target.value);


    };

    const api = (reqUser : IUser) =>{
        //api
        if(reqUser.id === 'admin' && reqUser.pwd === 'pw'){

            return true;
        }else{
            return false;
        }
    }

    const onClick = () => {
        if(api(user)){
            //페이지 이동
        }
    };

    console.log('isLoggedIn',LoginState)
    return (
     <>
         <div className="enter_wrap">
            <input className="enter_input" placeholder="아이디를 입력하세요" onChange={onChange}/>
             <input className="enter_input" placeholder="비밀번호를 입력하세요"/>
             <button className="enter_btn" onClick={onClick}>로그인</button>
         </div>
     </>
    )
}
export default Enter;