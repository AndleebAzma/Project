
import './App.css';
import FoodMenuBar from './components/FoodMenuBar';
import Home from './components/Home';

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/menu" element={<FoodMenuBar/>}></Route>

        {/* <Route path="/header" element={< />}></Route> */}

        {/* <Route path="/registerUser" element={<Registration />}></Route> */}
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
