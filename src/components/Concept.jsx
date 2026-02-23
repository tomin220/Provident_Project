import './Concept.css';

const Concept = () => {
    return (
        <section className="concept section" id="concept">
            <div className="container">
                <div className="concept__lifestyle">
                    <div className="text-center mb-xl">
                        <span className="section-label">Project Concept</span>
                        <h2 className="section-title">The English Way of Life</h2>
                        <p className="concept__main-desc">
                            Inspired by Manchester's urban charm, Provident Deansgate combines
                            cobbled streets, Victorian design elements, and lush gardens to create
                            a space of timeless elegance.
                        </p>
                    </div>

                    <div className="concept__pillars">
                        <div className="concept__pillar">
                            <div className="concept__pillar-icon">🕰️</div>
                            <h3>Timeless Elegance</h3>
                            <p>A perfect balance between heritage architecture and modern luxury living.</p>
                        </div>
                        <div className="concept__pillar">
                            <div className="concept__pillar-icon">🏘️</div>
                            <h3>Community Culture</h3>
                            <p>Designed for collective celebrations and meaningful neighborhood interactions.</p>
                        </div>
                        <div className="concept__pillar">
                            <div className="concept__pillar-icon">⚖️</div>
                            <h3>Work-Leisure Balance</h3>
                            <p>Thoughtfully planned spaces that cater to both professional needs and personal relaxation.</p>
                        </div>
                    </div>
                </div>

                <div className="concept__architecture">
                    <div className="concept__arch-grid">
                        <div className="concept__arch-image">
                            <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80" alt="Manchester inspired architecture" />
                        </div>
                        <div className="concept__arch-content">
                            <span className="section-label">Architecture & Design</span>
                            <h2 className="section-title">Manchester-Inspired<br />Red Brick Homes</h2>
                            <p className="concept__arch-desc">
                                Every detail at Deansgate is a tribute to Victorian design sensibility,
                                from the intricate masonry to the iconic street-side aesthetics.
                            </p>
                            <ul className="concept__elements">
                                <li>
                                    <span className="element-icon">🔔</span>
                                    <span>Clock Tower Entrance</span>
                                </li>
                                <li>
                                    <span className="element-icon">🏮</span>
                                    <span>Victorian Lamp Posts</span>
                                </li>
                                <li>
                                    <span className="element-icon">🛤️</span>
                                    <span>Cobblestone Walkways</span>
                                </li>
                                <li>
                                    <span className="element-icon">🌳</span>
                                    <span>Landscaped Community Streets</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Concept;
