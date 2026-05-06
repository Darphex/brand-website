export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      
      {/* Hero Section */}
      <section style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
          Darphex
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>
          Official Website
        </p>
      </section>

      {/* YouTube Section */}
      <section style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2>Latest Video</h2>
        <div style={{ marginTop: "1rem" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/watch?v=jIXjT5SSD0U"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Events Section */}
      <section style={{ textAlign: "center" }}>
        <h2>Upcoming Events</h2>
        <p style={{ marginTop: "1rem" }}>
          No events announced yet — stay tuned.
        </p>
      </section>

    </main>
  );
}