import React from 'react';
import { Link } from 'react-router-dom';
import './Fallback.css';
import Footer from './Footer';

function Fallback() {
    return (
        <div className="fallback">
            <h1>Sorry {`:(`}</h1>
            <p>The page, you are looking for is not available.</p>
            <Link
                to="/"
            >Go to home</Link>
            <Footer />
        </div>
    )
}

export default Fallback
