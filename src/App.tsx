import { background } from "./assets";
import { NavBar, Footer, ErrorBoundary } from "./components";
import { MusicPlayer } from "./components/MusicPlayer";
import { MusicPlayerProvider } from "./state/MusicPlayerContext/Provider";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "./components/ScrollToTop";
// import { GoToTop } from "./components/GoToTop";

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary
        fallback={
          <div className="text-red-500 p-4">Critical error! Please refresh.</div>
        }
      >
        <ErrorBoundary
          fallback={
            <div className="text-gray-300 text-center p-4">
              MusicPlayer is unavailable.
            </div>
          }
        >
          <MusicPlayerProvider>
            <BrowserRouter>
              <ScrollToTop />
              <div
                className="bg-cover bg-fixed bg-center"
                style={{ backgroundImage: `url(${background})` }}
              >
                <div className="flex flex-col bg-black text-white min-h-screen bg-opacity-70">
                  <header>
                    <ErrorBoundary
                      fallback={
                        <div className="text-gray-300 p-4">
                          Navigation failed to load.
                        </div>
                      }
                    >
                      <NavBar />
                    </ErrorBoundary>
                  </header>
                  <main className="flex-grow">
                    <AppRoutes />
                  </main>
                  {/* <GoToTop /> */}
                  <ErrorBoundary
                    fallback={
                      <div className="text-gray-500 text-center p-4">
                        Music player error.
                      </div>
                    }
                  >
                    <MusicPlayer />
                  </ErrorBoundary>
                  <ErrorBoundary
                    fallback={
                      <div className="text-gray-300 p-4">
                        Footer not available.
                      </div>
                    }
                  >
                    <Footer />
                  </ErrorBoundary>
                </div>
              </div>
            </BrowserRouter>
          </MusicPlayerProvider>
        </ErrorBoundary>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;