import React, { useState, useEffect } from "react";
import heroImage from "../assets/imz.jpeg";
import DigitalAgencyHero from "../components/Digitalscreen";
import ClientFeedback from "../components/ClientFeedsback";
import ProjectsSection from "../components/ProjectSection";
import {
  Code2,
  Smartphone,
  Cloud,
  Layers,
  Palette,
  Megaphone,
} from "lucide-react";

// Online project images
const project5 =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80";
const project6 =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80";
const project7 =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80";
const project8 =
  "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1400&q=80";

function Home() {
  const sliderImages = [heroImage, project5, project6, project7, project8];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Web Development",
      desc: "Custom websites and modern web applications built with modern technologies for optimal performance.",
      icon: <Code2 size={28} color="#2563eb" />,
    },
    {
      title: "Mobile Apps",
      desc: "Cross-platform mobile applications that deliver seamless user experiences.",
      icon: <Smartphone size={28} color="#2563eb" />,
    },
    {
      title: "Cloud Solutions",
      desc: "Scalable cloud infrastructure and services to power your business operations.",
      icon: <Cloud size={28} color="#2563eb" />,
    },
    {
      title: "SaaS Development",
      desc: "Custom software-as-a-service solutions tailored to your business needs.",
      icon: <Layers size={28} color="#2563eb" />,
    },
    {
      title: "UI/UX Designing",
      desc: "Intuitive and engaging user interfaces designed for optimal user experience.",
      icon: <Palette size={28} color="#2563eb" />,
    },
    {
      title: "Digital Marketing",
      desc: "Comprehensive digital strategies to grow your online presence and reach.",
      icon: <Megaphone size={28} color="#2563eb" />,
    },
  ];

  return (
    <div>
      <DigitalAgencyHero />

      {/* SERVICES SECTION */}
      <div style={{ padding: "80px 20px", background: "#f9fbff" }}>
        <div style={{ textAlign: "center", marginBottom: "12px" }}>
          <span
            style={{
              background: "#eef2ff",
              color: "#2563eb",
              padding: "8px 20px",
              borderRadius: "12px",
              fontWeight: 600,
            }}
          >
            OUR SERVICES
          </span>
        </div>

        <h1
          style={{
            textAlign: "center",
            fontSize: "40px",
            fontWeight: 800,
            marginBottom: "12px",
          }}
        >
          Comprehensive Digital Solutions
        </h1>

        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
            color: "#6b7280",
            marginBottom: "60px",
          }}
        >
          We provide end-to-end technology services to help your business grow
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            maxWidth: "1450px",
            margin: "0 auto",
          }}
        >
          {services.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "36px",
                minHeight: "280px",
                boxShadow: "0 10px 30px rgba(37, 19, 234, 0.06)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 50px rgba(63, 11, 252, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0,0,0,0.06)";
              }}
            >
              {/* ICON BOX */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  background: "#eef2ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                {item.icon}
              </div>

              <h3 style={{ fontSize: "1.2rem", fontWeight: 550 }}>
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: "16px",
                  color: "#6b7280",
                  marginTop: "12px",
                  lineHeight: 1.6,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <ProjectsSection/>
      
      <br></br>
      <br></br>

      <ClientFeedback />
    </div>
  );
}

export default Home;



