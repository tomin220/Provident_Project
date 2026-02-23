import React, { useState, useEffect } from 'react';
import './EnquirySidebar.css';
import EnquiryModal from './EnquiryModal';

const EnquirySidebar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show sidebar only after scrolling 400px (past hero main content)
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={`enquiry-sidebar ${isVisible ? 'enquiry-sidebar--visible' : ''}`}>
                <button
                    className="enquiry-sidebar__button"
                    onClick={() => setIsModalOpen(true)}
                >
                    <span className="enquiry-sidebar__icon">📩</span>
                    <span className="enquiry-sidebar__text">Enquire Now</span>
                </button>
            </div>

            <EnquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Personalized Consultation"
                subtitle="Share your requirements and our property experts will guide you to your dream home."
            />
        </>
    );
};

export default EnquirySidebar;
