import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles.js';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Sponsors from './pages/Sponsors/Sponsors';
import Team from './pages/Team/Team';
import Gallery from './pages/Gallery/Gallery';
import ErrorPage from './pages/Error/Error';

const App = () => {
    <BrowserRouter>
            <GlobalStyles />
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/sponsors' element={<Sponsors />} />
                <Route path='/team' element={<Team />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>

            <Footer />
    </BrowserRouter>
}

export default App;
