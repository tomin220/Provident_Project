import './USP.css';

const USP = () => {
    const usps = [
        { title: 'Manchester Architecture', icon: '🧱', detail: 'Iconic red brick design inspired by Manchester\'s heritage.' },
        { title: 'Private Open Spaces', icon: '🏡', detail: 'Exclusive gardens and terraces for every single Home.' },
        { title: 'Low-Density Living', icon: '👥', detail: 'An elite community limited to just 288 families.' },
        { title: 'Airport Proximity', icon: '✈️', detail: 'Strategically located just 15 minutes from KIAL.' },
        { title: '25+ Lifestyle Amenities', icon: '🎾', detail: 'A rich set of world-class leisure and sports facilities.' },
        { title: 'Sustainable Homes', icon: '♻️', detail: 'Eco-friendly design with major water and energy savings.' },
        { title: '12,000 sq.ft Clubhouse', icon: '🏛️', detail: 'The Atlas Convention Center - your premium social hub.' },
        { title: 'Nature-Centric', icon: '🌳', detail: 'Spread across 15 acres with 1550+ indigenous trees.' },
    ];

    return (
        <section className="usp section" id="usp">
            <div className="container">
                <div className="text-center mb-xl">
                    <span className="section-label">USP</span>
                    <h2 className="section-title">Why Provident Deansgate?</h2>
                    <p className="section-subtitle">
                        The perfect blend of English heritage, modern sustainability, and strategic location.
                    </p>
                </div>

                <div className="usp__grid">
                    {usps.map((item) => (
                        <div className="usp__card" key={item.title}>
                            <div className="usp__card-icon">{item.icon}</div>
                            <h3 className="usp__card-title">{item.title}</h3>
                            <p className="usp__card-detail">{item.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default USP;
