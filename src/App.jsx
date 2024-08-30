import NavigationBar from "./component/NavigationBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "./Data";
import Products from "./component/Products";
import { Route, Routes } from "react-router-dom";
import UrunDetaylari from "./component/UrunDetaylari";
import Home from "./Pages/Home";
import Sepet from "./Pages/Sepet";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/urundetaylari/:id" element={<UrunDetaylari />} />
        <Route path="/sepet" element={<Sepet />} />
      </Routes>
      
    </div>
  );
}

export default App;
