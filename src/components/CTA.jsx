import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import './CTA.css';

const CTA = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
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
                        project: 'Provident Deansgate',
                        source: 'Footer CTA'
                    }
                ]);

            if (error) throw error;

            setStatus({ type: 'success', message: 'Thank you! We will contact you soon.' });
            setFormData({ name: '', phone: '', email: '' });
        } catch (error) {
            console.error('Supabase error:', error);
            setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="cta section" id="contact">
            <div className="cta__overlay" />
            <div className="container cta__inner">
                <span className="cta__label">Start Your Journey</span>
                <h2 className="cta__title">
                    Ready to Experience<br />Deansgate Living?
                </h2>
                <p className="cta__subtitle">
                    Schedule a personal site visit or connect with our property consultants
                    to learn more about Provident Deansgate.
                </p>
                <form className="cta__form" onSubmit={handleSubmit}>
                    <div className="cta__form-row">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="cta__input"
                            aria-label="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            className="cta__input"
                            aria-label="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="cta__input"
                            aria-label="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={`btn btn-primary cta__btn ${isSubmitting ? 'btn--loading' : ''}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Request Pricing & Details'}
                    </button>
                </form>

                {status.message && (
                    <div className={`cta__status cta__status--${status.type}`}>
                        {status.message}
                    </div>
                )}

                <p className="cta__disclaimer">
                    By submitting, you agree to receive updates about Provident Deansgate.
                </p>
            </div>
        </section>
    );
};

export default CTA;
