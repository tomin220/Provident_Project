import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import './EnquiryForm.css';

const EnquiryForm = ({ title = "Enquire Now", subtitle = "Register your interest for exclusive offers." }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: null, message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        try {
            const { error } = await supabase
                .from('enquiries')
                .insert([
                    {
                        name: formData.name,
                        phone: formData.phone,
                        email: formData.email,
                        message: formData.message,
                        project: 'Provident Deansgate',
                        source: window.location.pathname
                    }
                ]);

            if (error) throw error;

            setStatus({ type: 'success', message: 'Thank you! Your enquiry has been received.' });
            setFormData({ name: '', phone: '', email: '', message: '' });
        } catch (error) {
            console.error('Supabase error:', error);
            setStatus({ type: 'error', message: 'Something went wrong. Please try again or call us directly.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="enquiry-form-container">
            <div className="enquiry-form__header">
                <h3 className="enquiry-form__title">{title}</h3>
                <p className="enquiry-form__subtitle">{subtitle}</p>
            </div>
            <form className="enquiry-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name*"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number*"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address*"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <textarea
                        name="message"
                        placeholder="Message (Optional)"
                        value={formData.message}
                        onChange={handleChange}
                        rows="2"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className={`btn btn-primary btn-full ${isSubmitting ? 'btn--loading' : ''}`}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Details'}
                </button>

                {status.message && (
                    <div className={`form-status form-status--${status.type}`}>
                        {status.message}
                    </div>
                )}

                <p className="form-disclaimer">
                    By clicking submit, you agree to our privacy policy and terms.
                </p>
            </form>
        </div>
    );
};

export default EnquiryForm;
