import { NavBar, Home, Footer, Music, Album } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <header>
        <NavBar/>
      </header>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/music' element={<Music />} />
        <Route path='/music/:id' element={<Album />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
