import { background } from "./assets";
import { NavBar, Footer } from "./components";
import { Home, Music, Album, Band } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <div className="bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="flex flex-col bg-black text-white min-h-screen bg-opacity-70">
        <header>
          <NavBar/>
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='/music' element={<Music />} />
            <Route path='/music/:id' element={<Album />} />
            <Route path='/band' element={<Band />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
