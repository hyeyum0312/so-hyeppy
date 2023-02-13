import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Intro from './Pages/Intro';
import Login from './Pages/Intro/Login';
import HyeyeonPage from './Pages/Hyeyeon';
import HyeyeonLogin from './Pages/Hyeyeon/Login';
import './Styles/tailwind.css';
import { CookiesProvider } from 'react-cookie';
import Attendance from './Pages/Attendance';

const App = () => {
    return (
        <CookiesProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Intro />} />
                        <Route path="/Hyeyeon" element={<HyeyeonPage />} />
                        <Route path="/Attendance" element={<Attendance />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/Hyeyeon/login" element={<HyeyeonLogin />} />
                </Routes>
            </BrowserRouter>
        </CookiesProvider>
    );
};

export default App;
