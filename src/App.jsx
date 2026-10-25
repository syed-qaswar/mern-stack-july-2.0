import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";

function App(){
  return(
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* defining individual routes */}
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App;