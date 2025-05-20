import { NavLink } from "react-router-dom";

export const Service = () => {
    return (
        <>
            <section className="services-section">
                <div className="services-container">
                    {/* Left Side Text Content */}
                    <div className="services-content">
                        <h5>// OUR SERVICES</h5>
                        <h2>Freshly Baked, Just for You!</h2>
                        <p>
                            We take pride in baking fresh, high-quality products every day. From artisan breads to custom cakes,
                            we use only the finest ingredients to bring you the best flavors. Whether you're craving something
                            sweet or savory, we've got the perfect treat for you!
                        </p>

                        {/* Features Grid */}
                        <div className="services-grid">
                            <div className="service-item">
                                <img src="/icons/bread.png" alt="Quality Breads" className="service-icon" />
                                <div>
                                    <h3>Artisan Breads</h3>
                                    <p>Handcrafted with care, our breads are made using traditional baking methods for the perfect crust and soft inside.</p>
                                </div>
                            </div>

                            <div className="service-item">
                                <img src="/icons/cake.png" alt="Custom Cakes" className="service-icon" />
                                <div>
                                    <h3>Custom Cakes</h3>
                                    <p>Celebrate special moments with beautifully designed cakes, made just the way you like them!</p>
                                </div>
                            </div>

                            <div className="service-item">
                                <img src="/icons/cofee.png" alt="Bakery Café" className="service-icon" />
                                <div>
                                    <h3>Bakery Café</h3>
                                    <p>Enjoy fresh pastries, croissants, and a cup of coffee in our cozy bakery café.</p>
                                </div>
                            </div>

                            <div className="service-item">
                                <img src="/icons/delivery.png" alt="Delivery Service" className="service-icon" />
                                <div>
                                    <h3>Home Delivery</h3>
                                    <p>Order your favorite baked goods online and get them delivered fresh to your doorstep!</p>
                                </div>
                            </div>
                        </div>

                        {/* Button */}
                        <NavLink to="/" className="btn-read-more">
                            Explore Our Menu
                        </NavLink>
                    </div>

                    {/* Right Side Images */}
                    
                    <div className="about-images">
                        <img
                            src="/images/bake.webp"
                            alt="Croissant"
                            className="croissant-img"
                        />
                        <img
                            src="/images/bread.webp"
                            alt="Bread"
                            className="bread-img"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

