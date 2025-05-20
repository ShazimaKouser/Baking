import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer className="section-footer">
                <div className="footer-container container">
                    <div className="content_1">
                        <p>
                            Welcome to Bake Bliss, <br />
                            your ultimate destination for
                            <br />
                            delicious baked goods!
                        </p>
                        <img
                            src="https://i.postimg.cc/Nj9dgJ98/cards.png"
                            alt="Payment Methods"
                        />
                    </div>

                    <div className="content_2">
                        <h4>Quick Links</h4>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/Service">Services</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>

                    <div className="content_3">
                        <h4>Experience</h4>
                        <NavLink to="/about">Our Story</NavLink>
                        <NavLink to="/tips">Baking Tips</NavLink>
                        <NavLink to="/offers">Special Offers</NavLink>
                        <NavLink to="/reviews">Customer Reviews</NavLink>
                    </div>

                    <div className="content_4">
                        <h4>Newsletter</h4>
                        <p>
                            Be the first to know about new
                            <br />
                            recipes, discounts & more!
                        </p>
                        <div className="f-mail">
                            <input type="email" placeholder="Your Email" />
                            <i className="bx bx-envelope"></i>
                        </div>
                        <hr />
                    </div>
                </div>

                <div className="f-design">
                    <div className="f-design-txt">
                        <p>Design and Code by Baking Delights</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

// export default Footer;
