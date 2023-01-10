import { Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Toaster } from 'react-hot-toast';
const App = () =>{
    return(
        <div className="container">
            <Toaster/>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </div>
    )
};
export default App;