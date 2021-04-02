import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <Link
                to="/about"
            >About</Link>
            <Link
                to="/terms"
            >Terms and Conditions</Link>
            <a
                target="_blank"
                href="https://forms.gle/Mj9bmPAiQRHFyP7c9" rel="noreferrer"
            >Feedback</a>
        </div>
    )
}

export default Footer
