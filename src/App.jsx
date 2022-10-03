import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Description from "./components/Description";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Nav/>
        <Slider/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="category/:type" element={<Category/>}/>
        </Routes>
        <Description/>
      </BrowserRouter>
    </div>
  );
}

export default App;
