import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import LandingPage from './pages/LandingPage.tsx';
import DataExplorer from './pages/DataExplorer.tsx';
import UserMessage from './pages/UserMessage.tsx';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/data-explorer" element={<DataExplorer />} />
                <Route path="/user-message" element={<UserMessage />} />
            </Routes>
        </Router>
    );
};

export default App;
