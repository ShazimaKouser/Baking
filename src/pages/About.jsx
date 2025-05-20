import { NavLink } from "react-router-dom";

export const About = () => {
  return (
    <>
    <section className="about-section">
      <div className="about-container">
        {/* Left Side Images */}
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

        {/* Right Side Text Content */}
        <div className="about-content">
          <h5>// ABOUT US</h5>
          <h2>We Bake Every Item From The Core Of Our Hearts</h2>
          <p>
            Our bakery is dedicated to crafting the finest baked goods with love
            and passion. We use only high-quality ingredients to ensure
            mouthwatering flavors and perfect textures in every bite.
          </p>
          <p>
            Whether it's a fresh croissant for breakfast or a custom cake for a
            special occasion, we bring you the best of the baking world.
          </p>

          {/* Features */}
          <div className="about-features">
            <p>✔️ Quality Products</p>
            <p>✔️ Online Order</p>
            <p>✔️ Custom Products</p>
            <p>✔️ Home Delivery</p>
          </div>

          {/* Button */}
          <NavLink to="/Service" className="btn-read-more">
            Read More
          </NavLink>
        </div>
      </div>
    </section>
    </>
  );
};

