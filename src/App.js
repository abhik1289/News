import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './page/LoginPage';
import SignUp from './components/Auth/SignUp';
import ForgotPage from './page/ForgotPage';
import ChangePwdPage from './page/ChangePwdPage';
import GoogleSuccess from './components/Auth/SocialMedia/Google/GoogleSuccess';
import GoogleFailure from './components/Auth/SocialMedia/Google/GoogleFailure';
import FacebookSuccess from './components/Auth/SocialMedia/Facebook/FacebookSuccess';
import FacebookFailure from './components/Auth/SocialMedia/Facebook/FacebookFailure';

import HomePage from './page/HomePage';
import ProfilePage from './page/ProfilePage';
import AboutPage from './page/AboutPage';
import CategoryPage from './page/CategoryPage';
import VerifyPage from './page/VerifyPage';
import Text from './page/Text';
import OtpPage from './page/OtpPage';





function App() {


  return (
    <Routes>
      {/* <Route element={noAccessLogin}> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/google/success" element={<GoogleSuccess />} />
        <Route path="/google/failure" element={< GoogleFailure />} />
        <Route path="/facebook/success" element={<FacebookSuccess />} />
        <Route path="/facebook/failure" element={< FacebookFailure />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/passwordChange" element={<ChangePwdPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about_us" element={<AboutPage />} />
        <Route path="/business" element={<CategoryPage />} />
        <Route path="/entertainment" element={<CategoryPage />} />
        <Route path="/health" element={<CategoryPage />} />
        <Route path="/science" element={<CategoryPage />} />
        <Route path="/sports" element={<CategoryPage />} />
        <Route path="/technology" element={<CategoryPage />} />
        <Route path="/active/:token" element={<VerifyPage />} />
        <Route path="/otpPage/:email" element={<OtpPage />} />

      {/* </Route> */}
      <Route path="/" element={<HomePage />} />

    </Routes>
  );
}

export default App;


