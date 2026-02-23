import React, { useState } from 'react';
import EnquiryModal from './EnquiryModal';
import './Location.css';

const connectivity = [
    { destination: 'Kempegowda International Airport', time: '15 min' },
    { destination: 'KIADB SEZ', time: '30 min' },
    { destination: 'Kirloskar Business Park', time: '34 min' },
    { destination: 'Manyata Embassy Business Park', time: '37 min' },
    { destination: 'RMZ Mall', time: '35 min' },
    { destination: 'Nandi Hills', time: '48 min' },
];

const Location = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    return (
        <section className="location section" id="location">
            <div className="container">
                <div className="text-center">
                    <span className="section-label">Location</span>
                    <h2 className="section-title">Devanahalli, North Bengaluru</h2>
                    <p className="section-subtitle">
                        Strategically located on IVC Road, the epicentre of Bengaluru's next growth wave.
                    </p>
                </div>

                <div className="location__grid">
                    <div className="location__map-side">
                        <div
                            className="location__map-wrapper"
                            onClick={handleOpenModal}
                        >
                            <div className="location__map-container location__map--blurred">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.0!2d77.6!3d13.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA2JzAwLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Provident Deansgate Location"
                                ></iframe>
                            </div>
                            <div className="location__map-overlay">
                                <div className="location__map-overlay-content">
                                    <span className="location__map-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </span>
                                    <h4 className="location__map-overlay-title">Unlock Full Location Map</h4>
                                    <p className="location__map-overlay-text">Register to view exact location & surrounding infrastructure.</p>
                                    <button className="btn btn-primary">View Map Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="location__content-side">
                        <h3 className="location__sub-title">Connectivity Highlights</h3>
                        <div className="location__table-wrapper">
                            <table className="location__table">
                                <thead>
                                    <tr>
                                        <th>Destination</th>
                                        <th>Travel Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {connectivity.map((item) => (
                                        <tr key={item.destination}>
                                            <td>{item.destination}</td>
                                            <td><strong>{item.time}</strong></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="location__drivers">
                            <p><strong>Key Growth Drivers:</strong> IT Corridor Expansion, Airport Proximity, Tech Parks & SEZ, Improved Infrastructure.</p>
                        </div>
                    </div>
                </div>
            </div>

            <EnquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Location Information"
                subtitle="Unlock the exact project location and a detailed development map of North Bengaluru."
            />
        </section>
    );
};

export default Location;
