function Leaderboard() {
  return (
    // <!-- Leaderboard -->
    <div class="card leaderboard-card">
      <div class="card-header">
        <h2>Team Information</h2>
        <div class="hud-element"></div>
      </div>
      <div class="card-body">
        <div class="leaderboard-list">
          <div class="leaderboard-item rank-1">
            <div class="rank">#1</div>
            <div class="team-name">NeuralNinjas</div>
            <div class="role">Leader</div>
          </div>
          <div class="leaderboard-item">
            <div class="rank">#2</div>
            <div class="team-name">QuantumQuest</div>
            <div class="role">Team Member</div>
          </div>
          <div class="leaderboard-item">
            <div class="rank">#3</div>
            <div class="team-name">DataDynamos</div>
            <div class="role">Team Member</div>
          </div>
          <div class="leaderboard-item current-participant">
            <div class="rank">#4</div>
            <div class="team-name">CodeStorm</div>
            <div class="role">Team Member</div>
          </div>
          <div class="leaderboard-item">
            <div class="rank">#5</div>
            <div class="team-name">TechTitans</div>
            <div class="role">Team Member</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
