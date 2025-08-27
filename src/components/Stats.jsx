function Stats() {
  return (
    // <!-- Hackathon Stats -->
    <div class="card stats-card">
      <div class="card-header">
        <h2>Event Statistics</h2>
        <div class="hud-element"></div>
      </div>
      <div class="card-body">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">30</div>
            <div class="stat-label">Participants</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">6</div>
            <div class="stat-label">Teams</div>
          </div>
          <div className="stat-item stat-promote">
            <div className="stat-number">
              Make your friends participate Now!
            </div>
          </div>
        </div>
        <div class="countdown">
          <div class="countdown-label">Time Remaining</div>
          <div class="countdown-value">16h 23m</div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
