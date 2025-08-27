function Schedule() {
  return (
    // <!-- Schedule -->
    <div class="card schedule-card">
      <div class="card-header">
        <h2>Schedule</h2>
        <div class="hud-element"></div>
      </div>
      <div class="card-body">
        <div class="schedule-list">
          <div class="schedule-item completed">
            <div className="schedule-head">
              <div class="schedule-time">15 Sep - 1 Oct, 2025</div>
              <div class="schedule-status">✓</div>
            </div>
            <div class="schedule-event">Stage 1 - Idea Submission</div>
          </div>
          <div class="schedule-item active">
            <div className="schedule-head">
              <div class="schedule-time">Oct 2, 2025</div>
              <div class="schedule-status">●</div>
            </div>
            <div class="schedule-event">
              Stage 2 - Online Technical Screening
            </div>
          </div>
          <div class="schedule-item upcoming">
            <div className="schedule-head">
              <div class="schedule-time">Oct 3, 2025</div>
              <div class="schedule-status">○</div>
            </div>
            <div class="schedule-event finale">Stage 3 - Grand Finale</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
