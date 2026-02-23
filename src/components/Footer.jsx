import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                {/* Contact Information */}
                <div className="footer__contact-bar">
                    <div className="footer__contact-item">
                        <span className="footer__contact-icon">📞</span>
                        <a href="tel:18602584444">1860 258 4444</a>
                    </div>
                    <div className="footer__contact-item">
                        <span className="footer__contact-icon">🌐</span>
                        <a href="https://www.providenthousing.com" target="_blank" rel="noopener noreferrer">
                            www.providenthousing.com
                        </a>
                    </div>
                    <div className="footer__contact-item">
                        <span className="footer__contact-icon">✉️</span>
                        <a href="mailto:support@winstoneprojects.com">support@winstoneprojects.com</a>
                    </div>
                </div>

                {/* RERA & Legal Information */}
                <div className="footer__legal">
                    <p className="footer__rera">
                        <strong>PRM/KA/RERA/1250/303/PR/041123/006373</strong> | RERA Website: <a href="https://rera.karnataka.gov.in/" target="_blank" rel="noopener noreferrer">https://rera.karnataka.gov.in/</a>
                        <br />
                        Owned and developed by <strong>Provident Housing Limited</strong> (A 100% subsidiary of Puravankara Limited)
                    </p>

                    <div className="footer__disclaimers">
                        <p className="footer__disclaimer">
                            Disclaimer: Changes may be made during the development and standard fittings and specifications are subject to change without notice. The images used in this website are for indicative purposes only and represent the Manchester-inspired theme of the project. This website does not constitute an offer and/or contract. All specifications and details are subject to approval.
                        </p>
                    </div>

                </div>

                {/* Copyright */}
                <div className="footer__bottom">
                    <p>© {year} Provident Deansgate. All rights reserved. | Developed by Provident Housing Limited</p>
                    <div className="footer__bottom-links">
                        <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer" className="footer__link">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
