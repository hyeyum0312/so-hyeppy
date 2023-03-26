import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {CookiesProvider} from 'react-cookie';
import './Styles/tailwind.css';
import Layout from './Layout';
import Intro from './Pages/Intro';
import Attendance from './Pages/Attendance/index';
import TodoList from "./Pages/TodoList/index";
import IntroLogin from "./Pages/Intro/Login";
import IntroLogin2 from "./Pages/Intro/Login2";
import 'react-datepicker/dist/react-datepicker.css';

const App = () => {
    return (
        <CookiesProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path="/" element={<Intro/>}/>
                        <Route path="/Attendance" element={<Attendance/>}/>
                        <Route path="/TodoList" element={<TodoList/>}/>
                        <Route path="/my-work" element={<Attendance/>}/>
                    </Route>
                    <Route path="/IntroLogin" element={<IntroLogin/>}/>
                    <Route path="/IntroLogin2" element={<IntroLogin2/>}/>
                </Routes>
            </BrowserRouter>
        </CookiesProvider>
    );
};

export default App;
