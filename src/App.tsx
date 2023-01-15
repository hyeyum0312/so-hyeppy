import { useRecoilState } from "recoil";
import { IUser, user } from "./atom";
import Enter from "./Enter";
import './index.css';
import React from 'react';



export default function App() {
    const [LoginUser, setLoginUser] = useRecoilState<IUser>(user);

    return (
        <div>
            <Enter/>

            {/*<p>userName: {LoginUser.name}</p>*/}
            {/*<p>userId: {LoginUser.id}</p>*/}
            {/*<p>userPwd: {LoginUser.pwd}</p>*/}
        </div>
    );
}