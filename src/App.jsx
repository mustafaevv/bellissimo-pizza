import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Slider from "./components/Slider";

import Home from "./pages/Home";
import Combo from "./pages/Combo";
import Pizza from "./pages/Pizza";
import Snack from "./pages/Snack";
import Drinks from "./pages/Drinks";
import Salad from "./pages/Salad";
import Dessert from "./pages/Dessert";
import Sauce from "./pages/Sauce";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Nav/>
        <Routes>
          <Route path="combo" element={<Combo/>}/>
          <Route path="pizza" element={<Pizza/>}/>
          <Route path="snack" element={<Snack/>}/>
          <Route path="drinks" element={<Drinks/>}/>
          <Route path="salad" element={<Salad/>}/>
          <Route path="dessert" element={<Dessert/>}/>
          <Route path="sauce" element={<Sauce/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
        <Slider/>
      </BrowserRouter>
    </div>
  );
}

export default App;
