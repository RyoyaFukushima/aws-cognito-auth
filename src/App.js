import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { SignUp } from './pages/signup';
import { Signin } from './pages/sigin';
import { Confirm } from './pages/confirm';
import { Signed } from './pages/signed';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<SignUp />} />
      <Route path="confirm" element={<Confirm/>}/>
      <Route path="signin" element={<Signin/>}/>
      <Route path="signed" element={<Signed/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
