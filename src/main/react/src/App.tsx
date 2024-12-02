import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import Academics from "./pages/Academics.tsx";
import FutureCareer from "./pages/FutureCareer.tsx";
import AcademicsBeyondHCC from "./pages/AcademicsBeyondHCC.tsx";
import EmergingTechnologies from "./pages/EmergingTechnologies.tsx";
import Cites from "./pages/Cites.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/academics" element={<Academics />} /> // TODO
                <Route path="/beyondhcc" element={ <AcademicsBeyondHCC /> } />
                <Route path="/career" element={<FutureCareer />} />
                <Route path="/tech" element={<EmergingTechnologies />} /> // TODO
                <Route path="/cites" element={<Cites />} /> // TODO
            </Routes>
        </Router>
    );
}

export default App;