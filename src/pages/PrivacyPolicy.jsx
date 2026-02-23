import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-page">
            <header className="privacy-header">
                <div className="container">
                    <Link to="/" className="back-link">
                        <motion.span
                            whileHover={{ x: -5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            ← Back to Home
                        </motion.span>
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Privacy Policy
                    </motion.h1>
                    <p className="last-updated">Last Updated: February 23, 2026</p>
                </div>
            </header>

            <main className="privacy-content container">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <section>
                        <h2>1. Introduction</h2>
                        <p>
                            Welcome to <strong>Provident Deansgate</strong>. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section>
                        <h2>2. Data Collection</h2>
                        <p>
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                        </p>
                        <ul>
                            <li><strong>Identity Data:</strong> Includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> Includes email address and telephone numbers.</li>
                            <li><strong>Technical Data:</strong> Includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
                            <li><strong>Usage Data:</strong> Includes information about how you use our website, products and services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. How We Use Your Data</h2>
                        <p>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul>
                            <li>To register you as a new customer and provide information about <strong>Provident Deansgate</strong>.</li>
                            <li>To manage our relationship with you which will include notifying you about changes to our terms or privacy policy.</li>
                            <li>To deliver relevant website content and advertisements to you and measure or understand the effectiveness of the advertising we serve to you.</li>
                            <li>To use data analytics to improve our website, products/services, marketing, customer relationships and experiences.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. RERA Compliance</h2>
                        <p>
                            In compliance with the Real Estate (Regulation and Development) Act, 2016 (RERA), all data collected through this portal is used strictly for project-related communication and documentation. We ensure that our data practices align with the transparency requirements set forth by the Karnataka RERA authority.
                        </p>
                    </section>

                    <section>
                        <h2>5. Data Security</h2>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>
                    </section>

                    <section>
                        <h2>6. Third-Party Links</h2>
                        <p>
                            This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
                        </p>
                    </section>

                    <section>
                        <h2>7. Contact Us</h2>
                        <p>
                            If you have any questions about this privacy policy or our privacy practices, please contact our data privacy manager in the following ways:
                        </p>
                        <p>
                            Email address: <strong>support@winstoneprojects.com</strong><br />
                            Postal address: Provident Housing Limited, Bengaluru, Karnataka.
                        </p>
                    </section>
                </motion.div>
            </main>

            <footer className="privacy-footer">
                <div className="container">
                    <p>© 2026 Provident Deansgate. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default PrivacyPolicy;
