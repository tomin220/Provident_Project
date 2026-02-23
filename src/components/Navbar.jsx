import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './Navbar.css';
import Magnet from './ui/Magnet';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Floor Plans', href: '#floorplans' },
    { label: 'Location', href: '#location' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <motion.div className="navbar__progress" style={{ scaleX }} />
            <div className="navbar__inner container">
                <Magnet padding={20}>
                    <a href="#" className="navbar__logo">
                        <div className="navbar__logo-brand-icon">
                            <div className="navbar__logo-brand-square"></div>
                        </div>
                        <div className="navbar__logo-text">
                            <span className="navbar__logo-name">Provident</span>
                            <span className="navbar__logo-sub">Deansgate</span>
                        </div>
                    </a>
                </Magnet>

                <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="navbar__link"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li className="navbar__links-cta">
                        <a href="#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
                            Enquire Now
                        </a>
                    </li>
                </ul>

                <Magnet padding={20}>
                    <a href="#contact" className="btn btn-primary navbar__cta-desktop">
                        Enquire Now
                    </a>
                </Magnet>

                <button
                    className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
