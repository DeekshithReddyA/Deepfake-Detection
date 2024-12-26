import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Dataset from './Components/Dataset';
import Model from './Components/Model';
import UploadImage from './Components/UploadImage';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
<>
<Analytics />
<Sidebar />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/model' element={<UploadImage />} />
  <Route path='/dataset' element={<Dataset />} />
</Routes>
</>
  );
}

export default App;
