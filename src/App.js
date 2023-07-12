import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Step from './components/Forms/Step';
import LandingPage from './Pages/LandingPage'
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Step />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// terms and conditions 
// https://merchant.razorpay.com/policy/MCC5D3iUj6bcpn/privacy
// privacy policy
// https://merchant.razorpay.com/policy/MCC5D3iUj6bcpn/terms
//https://merchant.razorpay.com/policy/MCC5D3iUj6bcpn/privacy

//contact us
//https://merchant.razorpay.com/policy/MCC5D3iUj6bcpn/contact_us