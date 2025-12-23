import React, { useEffect, useState } from "react";

function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const API_KEY = "633f1520537a4548890bc6e49b54e8f9"; 
  const pageSize = 200;
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=633f1520537a4548890bc6e49b54e8f9`;

  const truncateText = (text, wordLimit) => {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  const fetchNews = async () => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)

      if (data.articles && data.articles.length > 0) {
        setArticles((prev) => [...prev, ...data.articles]);
      } else {
        setError("No more articles or API limit reached");
      }
    } catch (err) {
      console.error("Error fetching news:", err);
      setError("Failed to fetch news");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div style={{ padding: "20px", background: "#f5f5f5" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px", fontSize: "2rem" }}>
        Latest Blogs
      </h1>

      {/* CARD GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "25px",
          padding: "20px",
        }}
      >
        {articles.map((article, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              background: "rgba(255, 255, 255, 0.9)",
              borderRadius: "18px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
            }}
          >
            {/* IMAGE */}
            {article.urlToImage ? (
              <img
                src={article.urlToImage}
                alt={article.title}
                onError={(e) => (e.target.style.display = "none")}
                style={{
                  width: "100%",
                  height: "170px",
                  objectFit: "cover",
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "170px",
                  background: "#eaeaea",
                }}
              ></div>
            )}

            {/* CONTENT */}
            <div style={{ padding: "18px", flexGrow: 1 }}>
              <h3
                style={{
                  margin: "0 0 12px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "#333",
                  lineHeight: "1.4",
                  height: "50px",
                  overflow: "hidden",
                }}
              >
                {truncateText(article.title, 12)}
              </h3>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#555",
                  lineHeight: "1.5",
                  height: "60px",
                  overflow: "hidden",
                  opacity: 0.85,
                }}
              >
                {truncateText(article.description, 20) ||
                  "No description available."}
              </p>
            </div>

            {/* READ MORE BUTTON */}
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "12px",
                background: "linear-gradient(135deg, #2a8cff, #0a66c2)",
                color: "#fff",
                textAlign: "center",
                textDecoration: "none",
                fontWeight: "500",
                letterSpacing: "0.5px",
                borderTop: "1px solid #eee",
              }}
            >
              Read More →
            </a>
          </div>
        ))}
      </div>

      {/* Loading */}
      {loading && (
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>Loading...</h2>
      )}

      {/* Load More */}
      {!loading && !error && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            style={{
              padding: "12px 24px",
              background: "#53b018",
              color: "white",
              fontSize: "1rem",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Load More
          </button>
        </div>
      )}

      {/* Error */}
      {error && (
        <h2 style={{ textAlign: "center", marginTop: "20px", color: "red" }}>
          {error}
        </h2>
      )}
    </div>
  );
}

export default News;

