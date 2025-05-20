export const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <h5>// CONTACT US</h5>
                <h2>If You Have Any Query, Please Contact Us</h2>

                {/* Contact Form */}
                <form className="contact-form">
                    <div className="input-group">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                    </div>
                    <input type="text" placeholder="Subject" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit" className="btn-send">Send Message</button>
                </form>
            </div>
        </section>
    );
};