import React, { useState } from 'react';
import './FloorPlans.css';
import EnquiryModal from './EnquiryModal';

const plans = [
    {
        type: 'Garden Villament',
        description:
            'Manchester-inspired ground-level luxury with a private garden. Experience nature-integrated living with seamless indoor-outdoor transitions.',
        image: '/images/floorplan-garden.jpg',
        metrics: [
            { label: 'Saleable Area', value: '~1949 sq.ft' },
            { label: 'Carpet Area', value: '~1294 sq.ft' },
            { label: 'Private Garden', value: '~682 sq.ft' }
        ],
        features: ['Private garden access', 'Ground-level entry', '3 BHK + Garden'],
        badge: 'Spacious',
    },
    {
        type: 'Terrace Villament',
        description:
            'A sophisticated duplex living experience with a private rooftop terrace. Elevate your lifestyle with panoramic views and classic English charm.',
        image: '/images/floorplan-terrace.jpg',
        metrics: [
            { label: 'Saleable Area', value: '~2179 sq.ft' },
            { label: 'Carpet Area', value: '~1435 sq.ft' },
            { label: 'Terrace Area', value: '~369 sq.ft' }
        ],
        features: ['Private rooftop terrace', 'Duplex layout', '3 BHK + Terrace'],
        badge: 'Luxury',
    },
];

const FloorPlans = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (plan) => {
        setSelectedPlan(plan);
        setIsModalOpen(true);
    };

    return (
        <section className="floorplans section" id="floorplans">
            <div className="container">
                <div className="text-center">
                    <span className="section-label">Floor Plans</span>
                    <h2 className="section-title">Choose Your Villament</h2>
                    <p className="section-subtitle">
                        Two distinctive living experiences — both offering the sophistication of a
                        villa and the convenience of an apartment.
                    </p>
                </div>
                <div className="floorplans__grid">
                    {plans.map((plan) => (
                        <div className="floorplans__card" key={plan.type}>
                            {plan.badge && <span className="floorplans__badge">{plan.badge}</span>}
                            <div
                                className="floorplans__card-image"
                                onClick={() => handleOpenModal(plan)}
                                style={{ cursor: 'pointer' }}
                            >
                                <img src={plan.image} alt={`${plan.type} floor plan`} />
                                <div className="floorplans__card-image-overlay">
                                    <span>View Floor Plan</span>
                                </div>
                            </div>
                            <div className="floorplans__card-body">
                                <h3 className="floorplans__card-type">{plan.type}</h3>
                                <p className="floorplans__card-desc">{plan.description}</p>

                                <div className="floorplans__metrics">
                                    {plan.metrics.map((m) => (
                                        <div className="floorplans__metric" key={m.label}>
                                            <span className="floorplans__metric-val">{m.value}</span>
                                            <span className="floorplans__metric-label">{m.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <ul className="floorplans__card-features">
                                    {plan.features.map((f) => (
                                        <li key={f}>
                                            <span className="floorplans__check">✓</span> {f}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => handleOpenModal(plan)}
                                    className="btn btn-dark floorplans__card-btn"
                                >
                                    Request Brochure
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <EnquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={selectedPlan ? `Enquire for ${selectedPlan.type}` : "Floor Plan Inquiry"}
                subtitle="Download the high-resolution floor plan and pricing details instantly."
            />
        </section>
    );
};

export default FloorPlans;
