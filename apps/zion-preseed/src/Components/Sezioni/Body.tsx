import { Routes, Route } from 'react-router';
import Chart from '../Compositori/Chart';
import LandingPage from '../Pagine/LandingPage';
import Membership from '../Pagine/Membership';
import ProvaBackground from '../Pagine/Pagine di Prova/ProvaBackground';
import TokenShop from '../Pagine/TokenShop';
import TuttiGliElementi from '../TuttiGliElementi';

export default function Body() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      {/* <Route path='/membership' element={<Membership />} /> */}
      {/* <Route path='/token_shop' element={<TokenShop />} /> */}
      {/* <Route path='tutti_gli_elementi' element={<TuttiGliElementi />} /> */}
      {/* <Route path='background' element={<ProvaBackground />} /> */}
      {/* <Route path='chart' element={<Chart />} /> */}
    </Routes>
  );
}
