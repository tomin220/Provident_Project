import React from 'react';
import './EnquiryModal.css';
import EnquiryForm from './EnquiryForm';

const EnquiryModal = ({ isOpen, onClose, title, subtitle }) => {
    if (!isOpen) return null;

    return (
        <div className="enquiry-modal-overlay" onClick={onClose}>
            <div className="enquiry-modal-content" onClick={e => e.stopPropagation()}>
                <button className="enquiry-modal-close" onClick={onClose}>&times;</button>
                <EnquiryForm
                    title={title || "Request More Information"}
                    subtitle={subtitle || "Please fill in the details below and we'll get back to you shortly."}
                />
            </div>
        </div>
    );
};

export default EnquiryModal;
