import React, { useState } from "react";
import "./App.css";

const dishes = [
  {
    id: 1,
    name: "Royal Chicken Biryani",
    category: "Main Course",
    price: 349,
    tag: "BESTSELLER",
    description:
      "Aromatic basmati rice layered with tender chicken, saffron, and authentic Indian spices.",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    name: "Tandoori Chicken",
    category: "Starters",
    price: 399,
    tag: "CHEF'S SPECIAL",
    description:
      "Juicy chicken marinated in yogurt and traditional spices, roasted to perfection.",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    name: "Paneer Tikka",
    category: "Starters",
    price: 279,
    tag: "VEGETARIAN",
    description:
      "Smoky paneer cubes with peppers, herbs, and a rich, flavourful marinade.",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    name: "Butter Chicken",
    category: "Main Course",
    price: 369,
    tag: "FAVOURITE",
    description:
      "Tender chicken in a creamy tomato gravy finished with butter and aromatic spices.",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 5,
    name: "Hyderabadi Mutton Biryani",
    category: "Main Course",
    price: 449,
    tag: "SIGNATURE",
    description:
      "Traditional dum-cooked biryani with fragrant basmati rice and tender mutton.",
    image:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    name: "Crispy Samosa",
    category: "Starters",
    price: 129,
    tag: "CLASSIC",
    description:
      "Golden, crispy pastry filled with a delicious blend of spiced potatoes and peas.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 7,
    name: "Mango Lassi",
    category: "Drinks",
    price: 149,
    tag: "COOL & CREAMY",
    description:
      "A refreshing mango and yogurt drink with a smooth, creamy finish.",
    image:
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 8,
    name: "Fresh Lime Cooler",
    category: "Drinks",
    price: 99,
    tag: "REFRESHING",
    description:
      "A refreshing lime drink served chilled with mint and a splash of citrus.",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 9,
    name: "Strawberry Mojito",
    category: "Drinks",
    price: 169,
    tag: "CUSTOMER FAVOURITE",
    description:
      "A vibrant mocktail with strawberries, mint, lime, and sparkling refreshment.",
    image:
      "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 10,
    name: "Chocolate Brownie",
    category: "Desserts",
    price: 179,
    tag: "SWEET FINISH",
    description:
      "A rich chocolate brownie served as the perfect ending to your dining experience.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 11,
    name: "Gulab Jamun",
    category: "Desserts",
    price: 119,
    tag: "TRADITIONAL",
    description:
      "Soft golden dumplings soaked in fragrant sugar syrup.",
    image:
      "https://images.unsplash.com/photo-1666190092159-3b2e7e7e8c3f?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 12,
    name: "Classic Masala Chai",
    category: "Drinks",
    price: 69,
    tag: "WARM & COMFORTING",
    description:
      "Freshly brewed Indian tea infused with warming spices and milk.",
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=1000&q=85",
  },
];

const categories = [
  "All",
  "Starters",
  "Main Course",
  "Drinks",
  "Desserts",
];

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedDish, setSelectedDish] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [reservation, setReservation] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
  });
  const [reservationMessage, setReservationMessage] = useState("");

  const filteredDishes =
    activeCategory === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === activeCategory);

  const handleReservationChange = (event) => {
    const { name, value } = event.target;

    setReservation((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleReservationSubmit = (event) => {
    event.preventDefault();

    setReservationMessage(
      `Thank you, ${reservation.name}! Your reservation request has been received. Please contact the restaurant to confirm your booking.`
    );
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="luxury-site">
      {/* NAVIGATION */}
      <header className="luxury-nav">
        <a
          href="#home"
          className="brand"
          aria-label="The Spice Table home"
          onClick={closeMobileMenu}
        >
          <span className="brand-symbol">S</span>
          <span className="brand-copy">
            <strong>THE SPICE TABLE</strong>
            <small>AN EXTRAORDINARY TASTE</small>
          </span>
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

        <nav className={mobileMenuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#home" onClick={closeMobileMenu}>Home</a>
          <a href="#story" onClick={closeMobileMenu}>Our Story</a>
          <a href="#menu" onClick={closeMobileMenu}>Menu</a>
          <a href="#visit" onClick={closeMobileMenu}>Visit Us</a>
          <a
            href="#reservation"
            className="nav-reservation"
            onClick={closeMobileMenu}
          >
            Reserve a Table <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        {/* CINEMATIC HERO */}
        <section className="cinema-hero" id="home">
          <div className="hero-background">
            <img
              className="hero-backdrop"
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=90"
              alt=""
              fetchPriority="high"
            />
          </div>

          <div className="hero-shade" />
          <div className="hero-light" />
          <div className="hero-grain" />

          <div className="hero-content">
            <div className="hero-kicker">
              <span className="gold-line" />
              AN EXPERIENCE BEYOND DINING
            </div>

            <h1 className="hero-title">
              A Taste of
              <br />
              <em>Something</em>
              <br />
              Extraordinary.
            </h1>

            <p className="hero-description">
              Discover the art of Indian cuisine, where timeless traditions
              meet bold flavours and every plate tells a story.
            </p>

            <div className="hero-actions">
              <a href="#menu" className="gold-button">
                Explore Our Menu <span>↗</span>
              </a>

              <a href="#story" className="text-button">
                Discover Our Story <span>↓</span>
              </a>
            </div>

            <div className="hero-bottom">
              <div className="hero-location">
                <span className="location-dot" />
                <span>MADE WITH PASSION · SERVED WITH LOVE</span>
              </div>

              <a href="#menu" className="scroll-indicator">
                SCROLL TO DISCOVER <span>↓</span>
              </a>
            </div>
          </div>

          <div className="hero-side-label">THE ART OF INDIAN DINING</div>
        </section>

        {/* INTRODUCTION */}
        <section className="intro-section" id="story">
          <div className="section-eyebrow">
            <span className="gold-line" />
            WELCOME TO THE SPICE TABLE
          </div>

          <h2>
            Not just a meal.
            <br />
            <em>A moment to remember.</em>
          </h2>

          <p>
            From the first aroma of freshly ground spices to the final
            unforgettable bite, we create dining experiences that bring
            people together.
          </p>

          <div className="intro-signature">A passion for flavour.</div>
        </section>

        {/* FOOD MENU */}
        <section className="menu-section" id="menu">
          <div className="menu-heading">
            <div className="section-eyebrow">
              <span className="gold-line" />
              PREPARED WITH PASSION
            </div>

            <h2>
              The Art of <em>Flavour.</em>
            </h2>

            <p>
              Thoughtfully crafted dishes, authentic ingredients, and
              flavours that stay with you long after the last bite.
            </p>
          </div>

          <div className="menu-filters" aria-label="Filter menu">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={
                  activeCategory === category
                    ? "filter-button active"
                    : "filter-button"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="luxury-dish-grid">
            {filteredDishes.map((dish, index) => (
              <article
                className="luxury-dish"
                key={dish.id}
                style={{ "--dish-index": index }}
              >
                <button
                  className="dish-image-button"
                  type="button"
                  onClick={() => setSelectedDish(dish)}
                  aria-label={`View ${dish.name} details`}
                >
                  <div className="luxury-dish-photo">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src =
                          "https://placehold.co/900x700/17110b/e8c783?text=THE+SPICE+TABLE";
                      }}
                    />

                    <div className="dish-image-overlay" />

                    <span className="dish-tag">{dish.tag}</span>

                    <span className="dish-view">
                      VIEW DISH <span>↗</span>
                    </span>
                  </div>
                </button>

                <div className="dish-details">
                  <div className="dish-category">{dish.category}</div>

                  <div className="dish-title-row">
                    <h3>{dish.name}</h3>
                    <span className="dish-price">₹{dish.price}</span>
                  </div>

                  <p>{dish.description}</p>

                  <button
                    className="dish-link"
                    type="button"
                    onClick={() => setSelectedDish(dish)}
                  >
                    Discover this dish <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="menu-bottom">
            <span>FRESH INGREDIENTS · AUTHENTIC FLAVOURS</span>
            <a href="#reservation">
              Your table awaits <span>↗</span>
            </a>
          </div>
        </section>

        {/* CINEMATIC FEATURE */}
        <section className="manifesto">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=85"
            alt="A beautifully presented restaurant dining experience"
            loading="lazy"
          />

          <div className="manifesto-overlay" />

          <div className="manifesto-copy">
            <div className="section-eyebrow">
              <span className="gold-line" />
              MORE THAN FOOD
            </div>

            <h2>
              Made for
              <br />
              <em>the moments</em>
              <br />
              that matter.
            </h2>

            <p>
              Good food brings people together. Great food turns an ordinary
              evening into an extraordinary memory.
            </p>

            <a href="#reservation" className="gold-button">
              Make It a Moment <span>↗</span>
            </a>
          </div>
        </section>

        {/* RESERVATION */}
        <section className="reservation-section" id="reservation">
          <div className="reservation-intro">
            <div className="section-eyebrow">
              <span className="gold-line" />
              YOUR TABLE AWAITS
            </div>

            <h2>
              An evening
              <br />
              <em>worth savouring.</em>
            </h2>

            <p>
              Gather your favourite people, leave the ordinary behind, and
              let us take care of the rest.
            </p>

            <div className="reservation-note">
              <span>✳</span> Every occasion deserves something special.
            </div>
          </div>

          <form
            className="reservation-panel"
            onSubmit={handleReservationSubmit}
          >
            <div className="reservation-panel-heading">
              <span className="section-eyebrow">BOOK YOUR EXPERIENCE</span>
              <h3>Reserve a Table</h3>
              <p>Tell us a little about your visit.</p>
            </div>

            <div className="form-group">
              <label htmlFor="reservation-name">Full Name</label>
              <input
                id="reservation-name"
                name="name"
                type="text"
                placeholder="Your name"
                value={reservation.name}
                onChange={handleReservationChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="reservation-email">Email Address</label>
              <input
                id="reservation-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={reservation.email}
                onChange={handleReservationChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="reservation-date">Date</label>
                <input
                  id="reservation-date"
                  name="date"
                  type="date"
                  min={new Date().toLocaleDateString("en-CA")}
                  value={reservation.date}
                  onChange={handleReservationChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="reservation-time">Time</label>
                <select
                  id="reservation-time"
                  name="time"
                  value={reservation.time}
                  onChange={handleReservationChange}
                  required
                >
                  <option value="">Choose time</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                  <option value="7:00 PM">7:00 PM</option>
                  <option value="8:00 PM">8:00 PM</option>
                  <option value="9:00 PM">9:00 PM</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="reservation-guests">Number of Guests</label>
              <select
                id="reservation-guests"
                name="guests"
                value={reservation.guests}
                onChange={handleReservationChange}
                required
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
                <option value="7+">7+ Guests</option>
              </select>
            </div>

            <button className="gold-button reservation-submit" type="submit">
              Request Reservation <span>↗</span>
            </button>

            {reservationMessage && (
              <p className="reservation-message" role="status">
                {reservationMessage}
              </p>
            )}

            <small className="reservation-disclaimer">
              This demo form does not send a booking to a restaurant server.
            </small>
          </form>
        </section>

        {/* VISIT US */}
        <section className="visit-section" id="visit">
          <div className="visit-content">
            <div className="section-eyebrow">
              <span className="gold-line" />
              COME EXPERIENCE IT
            </div>

            <h2>
              We saved
              <br />
              you a <em>seat.</em>
            </h2>

            <p>
              Great flavours, warm hospitality, and an atmosphere worth
              coming back for.
            </p>

            <a href="#reservation" className="gold-button">
              Plan Your Visit <span>↗</span>
            </a>
          </div>

          <div className="visit-details">
            <div>
              <span className="visit-label">FIND US</span>
              <p>THE SPICE TABLE</p>
              <p>Enter your restaurant address here</p>
            </div>

            <div>
              <span className="visit-label">OPENING HOURS</span>
              <p>Monday – Sunday</p>
              <p>12:00 PM – 10:00 PM</p>
            </div>

            <div>
              <span className="visit-label">GET IN TOUCH</span>
              <p>Replace with your contact number</p>
              <p>Replace with your restaurant email</p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="luxury-footer">
        <a href="#home" className="brand footer-brand">
          <span className="brand-symbol">S</span>
          <span className="brand-copy">
            <strong>THE SPICE TABLE</strong>
            <small>AN EXTRAORDINARY TASTE</small>
          </span>
        </a>

        <p>Crafted with passion. Served with soul.</p>

        <a href="#home" className="back-to-top">
          BACK TO TOP ↑
        </a>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} THE SPICE TABLE</span>
          <span>AN EXPERIENCE BEYOND DINING</span>
        </div>
      </footer>

      {/* DISH DETAILS MODAL */}
      {selectedDish && (
        <div
          className="dish-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedDish(null);
            }
          }}
        >
          <div
            className="dish-modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-dish-title"
          >
            <button
              type="button"
              className="modal-close"
              aria-label="Close dish details"
              onClick={() => setSelectedDish(null)}
            >
              ✕
            </button>

            <img
              src={selectedDish.image}
              alt={selectedDish.name}
              className="modal-dish-image"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src =
                  "https://placehold.co/900x700/17110b/e8c783?text=THE+SPICE+TABLE";
              }}
            />

            <div className="modal-dish-info">
              <span className="section-eyebrow">
                {selectedDish.category}
              </span>

              <h2 id="modal-dish-title">{selectedDish.name}</h2>

              <p>{selectedDish.description}</p>

              <div className="modal-dish-bottom">
                <span>₹{selectedDish.price}</span>
                <a
                  href="#reservation"
                  className="gold-button"
                  onClick={() => setSelectedDish(null)}
                >
                  Reserve a Table <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;