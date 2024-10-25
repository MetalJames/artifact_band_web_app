import { NavBar, Home, Footer, Music } from "./components";
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
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
