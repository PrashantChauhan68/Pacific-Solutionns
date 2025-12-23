import React, { useRef, useEffect, useState } from 'react';
import InternshipBanner from '../components/internshipBanner';
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import Studentfeedback from '../components/Studentfeedback';
import "../index.css";

function Internship() {

  const scrollRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      company: "Arrise Solutions",
      name: "Aliya Rathore",
      role: "Business Analyst",
      location: "Mohali",
      image: "https://www.shiwansh.com/images/jay.jpg",
      message: "The business analytics training helped me transition into my role at Arrise Solutions."
    },
    {
      id: 2,
      company: "Infotech pvt ltds",
      name: "Pooja Garg",
      role: "Software Developer",
      location: "Mohali",
      image: "https://www.shiwansh.com/images/vikrant.jpg",
      message: "The mentorship and projects were instrumental in my placement at Infotech pvt ltds."
    },
    {
      id: 3,
      company: "Pristyne care solt",
      name: "Pooja Garg",
      role: "Software Developer",
      location: "Mohali",
      image: "https://www.shiwansh.com/images/anuja.jpg",
      message: "The mentorship and projects were instrumental in my placement at Pristyne care solt."
    },
    {
      id: 4,
      company: "Doodle Tech DEV",
      name: "Pooja Garg",
      role: "Software Developer",
      location: "Mohali",
      image: "https://www.shiwansh.com/images/indulekha.jpg",
      message: "The mentorship and projects were instrumental in my placement at Doodle Tech DEV."
    },
    {
      id: 5,
      company: "Infosys pvt ltd",
      name: "Raj Kumar",
      role: ".Net Fullstack Developer",
      location: "Mohali",
      image: "https://www.shiwansh.com/images/ravi.jpg",
      message: "Went from learning the basics to becoming a .NET developer at Shiwansh Solutions."
    },
  ];

  const scrollingList = [...testimonials, ...testimonials];

  // Auto scroll
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
      }
    }, 20);

    return () => clearInterval(interval);
  }, [paused]);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft -= 300;
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft += 300;
  };

  return (
    <div>
      <InternshipBanner />

      <div style={{ padding: "50px 20px", background: "#f7f9fb" }}>
        <h1 style={{ textAlign: "center", fontSize: "42px", fontWeight: "700", marginBottom: "10px" }}>
          Trained <span style={{ color: "#2563eb" }}>&</span> Transformed
        </h1>

        <p style={{ textAlign: "center", color: "#7b8995", marginBottom: "40px", fontSize: "18px" }}>
          Success stories from our talented alumni
        </p>

        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
          <button className="arrow-btn" onClick={scrollLeft}>
            <ChevronLeft size={30} />
          </button>
          <button className="arrow-btn" onClick={scrollRight}>
            <ChevronRight size={30} />
          </button>
        </div>

        <div className="scroll-container" ref={scrollRef}>
          <div className="scroll-row">
            {scrollingList.map((item, index) => (
              <div
                key={index}
                className="testimonial-card"
                onMouseEnter={() => setPaused(true)}   // pause when cursor is on card
                onMouseLeave={() => setPaused(false)}  // resume when cursor leaves
              >
                <div className="company-badge">{item.company}</div>

                <div className="avatar-wrapper">
                  <img src={item.image} alt={item.name} />
                </div>

                <h3>{item.name}</h3>
                <p className="designation">{item.role}</p>

                <div className="location">
                  <MapPin size={16} /> {item.location}
                </div>

                <div className="quote-box">
                  <span className="quote">“</span>
                  <p>{item.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Studentfeedback />
    </div>
  );
}

export default Internship;





