import { NavBar, Home, Footer, Music, Album } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <div className="flex flex-col bg-black text-white min-h-screen">
      <header>
        <NavBar/>
      </header>
      <main className="flex-grow">
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/music' element={<Music />} />
          <Route path='/music/:id' element={<Album />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
