import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import './css/index.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./pages/Product";

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/products" Component={Product} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
