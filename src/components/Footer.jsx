import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function Footer() {

  const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'Cloud Solutions',
    'Digital Marketing'
  ];


  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Home', path: '/' },
    { name: 'News', path: '/news' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-grid">

          {/* COMPANY INFO */}
          <div className="footer-column">
            <h2 className="footer-logo">
              <span className="logo-blue">Pacific</span> Solutions
            </h2>

            <p className="footer-tagline">
              Transforming businesses through innovative digital solutions and cutting-edge technology.
            </p>

            {/* SOCIAL ICONS */}
            <div className="social-icons">

              {/* WhatsApp */}
              <a
                href="https://wa.me/8091196496"
                className="social-icon"
                aria-label="WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.84.5 3.56 1.37 5.05L2 22l5.17-1.35A10 10 0 1012 2zm0 18c-1.62 0-3.17-.43-4.53-1.25l-.32-.19-3.07.8.82-2.98-.21-.34A8.07 8.07 0 014 12a8 8 0 118 8zm4.06-6.44c-.22-.11-1.29-.64-1.49-.71-.2-.07-.34-.11-.48.11-.14.22-.55.71-.68.86-.12.14-.25.16-.46.06a5.53 5.53 0 01-2.68-2.28c-.2-.35-.2-.62-.14-.73.06-.11.17-.18.26-.27.09-.09.14-.15.2-.26.06-.11.04-.2-.01-.3-.05-.09-.86-2.1-1.19-2.98-.32-.79-.64-.69-.87-.69-.22 0-.5-.03-.77-.03-.28 0-.62.09-.92.43-.3.34-1.21 1.18-1.21 2.88 0 1.7 1.24 3.34 1.41 3.57.17.22 2.42 3.83 6.1 5.29.3.12.54.18.73.24.3.1.56.08.77.05.23-.03.74-.3.85-.6.11-.3.11-.55.07-.6-.04-.06-.13-.1-.34-.19z" />
                </svg>
              </a>



              {/* Instagram */}
              <a href='https://www.instagram.com/shiwanshsolutions/' className="social-icon" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757
  0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3
  3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654
  1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0
  2a3 3 0 110 6 3 3 0 010-6zm4.5-3a1.5 1.5 0 110 3
  1.5 1.5 0 010-3z"/>
                </svg>

              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/shiwansh-solutions/" className="social-icon" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.9-2.2
  4.1 0 4.8 2.7 4.8 6.2V24h-4v-7.8c0-1.9 0-4.3-2.6-4.3s-3 2.1-3 4.2V24h-4V8z"/>
                </svg>

              </a>
            </div>
          </div>

          {/* SERVICES */}
          <div className="footer-column">
            <h3 className="footer-heading">SERVICES</h3>

            <ul className="footer-links">
              {services.map((item, index) => {
                const path = "/" + item.toLowerCase().replace(/ /g, "-");
                return (
                  <li key={index}>
                    <Link to={path}>{item}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* COMPANY */}
          <div className="footer-column">
            <h3 className="footer-heading">COMPANY</h3>

            <ul className="footer-links">
              {company.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>


          {/* CONTACT */}
          <div className="footer-column">
            <h3 className="footer-heading">CONTACT US</h3>

            <ul className="footer-contact">

              {/* Address */}
              <li>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>B-116, Modeltown, Sector 126, Mohali - 140308</span>
              </li>

              {/* Phone */}
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 
        19.79 19.79 0 0 1-8.63-3.07 
        19.5 19.5 0 0 1-6-6 
        19.79 19.79 0 0 1-3.07-8.67 
        A2 2 0 0 1 4.11 2h3 
        a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 
        2 2 0 0 1-.45 2.11L8.09 9.91 
        a16 16 0 0 0 6 6l1.27-1.27 
        a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 
        A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91 987654321</span>
              </li>

              {/* Email */}
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12
         a2 2 0 0 1-2 2H4
         a2 2 0 0 1-2-2V6
         c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>hr@pacific.com</span>
              </li>

            </ul>
          </div>


        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <p>© 2025 Shiwansh Solutions. All rights reserved.</p>
          <p className="developer-credit">@Developed By: Prashant Chauhan</p>
        </div>

      </div>
    </footer>
  );
}


