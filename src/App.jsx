
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { useGlobalContext } from "./Components/utils/global.context";



function App() {
  const{state} = useGlobalContext()
  return (
      <div className={state.theme}>
          <Navbar/>

            <Routes>         
              <Route path="/" element={<Home/>}/>
              <Route path="/Contact" element={<Contact/>}/>
              <Route path="/Detail/:id" element={<Detail/>}/>
              <Route path="/Favs" element={<Favs/>}/>
            </Routes>

          <Footer/>

      </div>
  );
}

export default App;
