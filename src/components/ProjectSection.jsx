import React from "react";
import "../index.css";

const projects = [
  {
    title: "Victoria's Secret",
    subtitle: "For E-commerce",
    desc: "Global lingerie and apparel retailer featuring the new Lacie collection with innovative stretch lace technology.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=80",
    livelink:"//www.victoriassecret.com/in/",
  },
  {
    title: "CMS Software",
    subtitle: "For Construction Company",
    desc: "A powerful software to manage operations, records, and workflows for construction businesses. Handle daily tasks—built to streamline workflows and control costs..",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      livelink:"https://dbkinfra.com/",
  },
  {
    title: "Travel Booking",
    subtitle: "Tour Website",
    desc: "Complete travel booking platform with destinations and packages.",
    image:
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1400&q=80",
      livelink:"https://www.fortegra.com/",
  },
  {
    title: "EdTech Platform",
    subtitle: "Online Learning",
    desc: "Interactive learning platform with video courses and dashboards.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
      livelink:"https://www.adek.gov.ae/",
  },
  {
    title: "Restaurant Website",
    subtitle: "Food Business",
    desc: "Online menu, booking, and food delivery system.",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=80",
      livelink:"https://biancarestaurant.com.au/",
  },
  {
    title: "Real Estate Portal",
    subtitle: "Property Listing",
    desc: "Property listings with filters, maps, and inquiry system.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
      livelink:"https://www.caresmartz360.com/",
  },
];

export default function ProjectsSection() {
  return (
    <section className="projects-section">
      

        {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="project-title">PROJECT SHOWCASE</h1>
        
        <p className="project-desc">
          <span className="line left-line"></span>
          Showcasing our expertise in <span className="highlight">software development</span> and <span className="highlight">website Development</span> through real client projects that deliver innovation, performance, and measurable results.
          <span className="line right-line"></span>
        </p>
      </div>
      


      <div className="projects-grid">
        {projects.map((item, index) => (
          <div className="project-card" key={index}>
            {/* IMAGE */}
            <div
              className="project-image"
              style={{
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                img.style.transform = "scale(1.12)";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                img.style.transform = "scale(1)";
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
              />

              {/* DARK OVERLAY */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.15))",
                  pointerEvents: "none",
                }}
              />

              {/* TITLE ON IMAGE */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  color: "#fff",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "22px",
                    fontWeight: "700",
                  }}
                >
                  {item.title}
                </h3>
                <span
                  style={{
                    fontSize: "14px",
                    opacity: 0.85,
                  }}
                >
                  {item.subtitle}
                </span>
              </div>

              <a
  href={item.livelink}
  target="_blank"
  rel="noopener noreferrer"
  className="live-badge"
>
  Live
</a>
            </div>

            {/* DESCRIPTION */}
            <div className="project-content">
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

