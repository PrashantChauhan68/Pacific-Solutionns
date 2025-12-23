import React from "react";

const ServicesCards = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Custom websites and modern web applications built for performance.",
      icon: "💻",
    },
    {
      title: "Mobile Apps",
      desc: "Cross-platform mobile apps that deliver seamless user experiences.",
      icon: "📱",
    },
    {
      title: "Cloud Solutions",
      desc: "Scalable cloud services to power your business operations.",
      icon: "☁️",
    },
    {
      title: "SaaS Development",
      desc: "End-to-end SaaS platforms engineered to scale.",
      icon: "📦",
    },
    {
      title: "UI/UX Designing",
      desc: "Modern UI designs focused on user engagement.",
      icon: "🎨",
    },
    {
      title: "Digital Marketing",
      desc: "Grow your brand with targeted digital marketing strategies.",
      icon: "📣",
    },
  ];

  return (
    <div style={{ padding: "80px 20px", background: "#f5f7fb" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {services.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#ffffff",
              borderRadius: "22px",
              padding: "36px 40px",
              minHeight: "320px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              transition: "all 0.35s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.04)";
              e.currentTarget.style.boxShadow =
                "0 32px 64px rgba(0,0,0,0.14)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(0,0,0,0.08)";
            }}
          >
            <div style={{ fontSize: "52px" }}>{item.icon}</div>

            <h3
              style={{
                fontSize: "24px",
                fontWeight: "600",
                margin: "20px 0 12px",
                color: "#111",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.7",
                color: "#555",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCards;
