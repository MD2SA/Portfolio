import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css"

export default function App() {
    return (
        <BrowserRouter>
            <div className="background">
                {/* Optional: Add a subtle gradient overlay */}
                <div className="overlay"></div>
            </div>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

