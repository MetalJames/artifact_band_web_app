import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./components";
import { Home, Music, Album, Band } from "./pages";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path=""
                element={
                    <ErrorBoundary fallback={<div className="text-gray-400 text-center p-4">Home page failed to load.</div>}>
                        <Home />
                    </ErrorBoundary>
                }
            />
            <Route
                path="/music"
                element={
                    <ErrorBoundary fallback={<div className="text-gray-400 text-center p-4">Music page failed to load.</div>}>
                        <Music />
                    </ErrorBoundary>
                }
            />
            <Route
                path="/music/:id"
                element={
                    <ErrorBoundary fallback={<div className="text-gray-400 text-center p-4">Album page failed to load.</div>}>
                        <Album />
                    </ErrorBoundary>
                }
            />
            <Route
                path="/band"
                element={
                    <ErrorBoundary fallback={<div className="text-gray-400 text-center p-4">Band page failed to load.</div>}>
                        <Band />
                    </ErrorBoundary>
                }
            />
        </Routes>
    );
};