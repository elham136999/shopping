import "./App.css";
import ProductList from "./ProductList";
import Navbar from "./Navbar";
import CartItems from "./CartItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/cartitem' element={<CartItems />} />
        </Routes>
        <Routes>
          <Route path='/' element={<ProductList></ProductList>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
