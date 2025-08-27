function Rules() {
  return (
    // <!-- Notifications -->
    <div class="card" id="notifications-card" style={{ gridColumn: "span 2" }}>
      <div class="card-header">
        <h2>Rules and Guidlines</h2>
        <div class="hud-element"></div>
      </div>
      <div class="card-body">
        <div className="team-name" style={{ fontSize: "1.25rem" }}>
          Evaluation Framework
        </div>
        <ul className="value">
          <li>
            <strong>Innovation:</strong> fresh and creative idea
          </li>
          <li>
            <strong>Technical proficiency:</strong> how well it works
          </li>
          <li>
            <strong>Problem-solving:</strong> clarity in addressing issue
          </li>
          <li>
            <strong>Presentation:</strong> how you pitch it
          </li>
          <li>
            <strong>Practical relevance:</strong> real-world impact
          </li>
        </ul>
        <div className="team-name" style={{ fontSize: "1.25rem" }}>
          Format & Rewards
        </div>
        <ul className="value">
          <li>
            <strong>24-hour sprint:</strong> idea → prototype in a day
          </li>
          <li>
            <strong>Rewards:</strong>{" "}
            <span style={{ color: "#f09a41" }}>₹3+ lakh</span>, incubation, seed
            funding, internships, PPOs, recognition
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rules;
