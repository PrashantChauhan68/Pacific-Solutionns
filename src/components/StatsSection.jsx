import React from "react";
import { Users, Sparkles, Laptop } from "lucide-react";

export default function AboutStats() {
  const stats = [
    { id: 1, icon: <Users size={55} />, number: "50+", title: "Happy Clients" },
    { id: 2, icon: <Sparkles size={55} />, number: "100+", title: "Projects Completed" },
    { id: 3, icon: <Laptop size={55} />, number: "50+", title: "Team Members" },
  ];

  return (
    <>
      <style>
        {`
        .stats-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 90px;
          margin-top: 0px;
          margin-bottom:50px;
          padding: 10px;
          flex-wrap: wrap;
        }

        .stat-card {
          background: #ffffff;
          width: 400px;
          padding: 45px 35px;
          border-radius: 20px;
          text-align: center;
          border: 2px solid #e6e6e6;
          transition: all 0.35s ease;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }

        .stat-card:hover {
          transform: translateY(-10px);
          background: #e9f3ff;
          border-color: #3b82f6;
          box-shadow: 0 12px 30px rgba(0,0,0,0.18);
        }

        .stat-icon {
          margin-bottom: 20px;
          color: #3b82f6;
        }

        .stat-number {
          font-size: 50px;
          font-weight: 800;
          margin: 0;
          color: #1265d8ff;
        }

        .stat-title {
          margin-top: 10px;
          font-size: 20px;
          color: #4b5563;
          font-weight: 500;
        }
      `}
      </style>

      <div className="stats-wrapper">
        {stats.map((item) => (
          <div key={item.id} className="stat-card">
            <div className="stat-icon">{item.icon}</div>
            <h2 className="stat-number">{item.number}</h2>
            <p className="stat-title">{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

