import { background } from "./assets";
import { NavBar, Footer } from "./components";
import { MusicPlayer } from "./components/MusicPlayer";
import { MusicPlayerProvider } from "./state/MusicPlayerContext/Provider";
import { Home, Music, Album, Band } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <MusicPlayerProvider >
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
          <MusicPlayer />
          <Footer />
        </div>
      </div>
      </BrowserRouter>
    </MusicPlayerProvider>
  )
}

export default App
