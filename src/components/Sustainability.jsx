import './Sustainability.css';

const Sustainability = () => {
    const initiatives = [
        {
            title: 'Water Conservation',
            icon: '💧',
            points: ['18% reduction in freshwater demand', 'Rainwater harvesting systems', '375+ lakh liters conserved annually']
        },
        {
            title: 'Energy Efficiency',
            icon: '☀️',
            points: ['Solar passive design in 91% homes', 'Solar-powered clubhouse', 'EV charging provisions']
        },
        {
            title: 'Waste Management',
            icon: '♻️',
            points: ['Organic waste converter (510kg/day)', 'Advanced STP water reuse', 'Reduced landfill impact']
        },
        {
            title: 'Air & Landscape',
            icon: '🍃',
            points: ['4 acres of green landscapes', '1550+ indigenous trees', 'Smart irrigation systems']
        }
    ];

    return (
        <section className="sustainability section noise-overlay" id="sustainability">
            <div className="container">
                <div className="sustainability__header">
                    <span className="section-label">Sustainability</span>
                    <h2 className="section-title">Luxury Aligned with Responsibility</h2>
                    <p className="sustainability__intro">
                        Provident Deansgate is built on a core philosophy of environmental
                        stewardship, ensuring that your home is as kind to the planet as
                        it is comfortable for you.
                    </p>
                </div>

                <div className="sustainability__grid">
                    {initiatives.map((item) => (
                        <div className="sustainability__card" key={item.title}>
                            <div className="sustainability__card-icon">{item.icon}</div>
                            <h3 className="sustainability__card-title">{item.title}</h3>
                            <ul className="sustainability__list">
                                {item.points.map((p, i) => (
                                    <li key={i}>{p}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sustainability;
