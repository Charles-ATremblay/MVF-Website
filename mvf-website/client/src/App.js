import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles.js';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Sponsors from './pages/Sponsors/Sponsors';
import Projects from './pages/Projects/Projects';
import Team from './pages/Team/Team';
import TeamDetails from './pages/Team/TeamDetails';
import ErrorPage from './pages/Error/Error';

const App = () => {
    return(
    <BrowserRouter>
            <GlobalStyles />
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/sponsors' element={<Sponsors />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/team' element={<Team />} />
                <Route path='/team/:teamId' element={<TeamDetails />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>

            <Footer />
    </BrowserRouter>
    );
}

export default App;
