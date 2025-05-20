import './contact.css';
import contactImg from '../assets/image.svg'; 

export default function ContactUs() {
  return (
    <section className="contact-section dark-theme" id="contact">
      <div className="contact-container">
        <div className="contact-image">
          <img src={contactImg} alt="Contact Us" />
        </div>
        <div className="contact-form-box">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
