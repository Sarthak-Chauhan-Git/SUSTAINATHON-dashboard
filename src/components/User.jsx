function User() {
  return (
    <div class="card profile-card">
      <div class="card-header">
        <h2>Participant Profile</h2>
        <div class="hud-element"></div>
      </div>
      <div class="card-body">
        <div class="profile-info">
          <div class="profile-avatar">
            <div class="avatar-ring"></div>
            <span class="avatar-text">S</span>
          </div>
          <div class="profile-details">
            <h3>Sarthak Chauhan</h3>
            <p class="participant-id">ID: HACK2025001</p>
            <div class="detail-row">
              <span class="label">Email:</span>
              <span class="value">sarthak.chauhan@ug.sharda.ac.in</span>
            </div>
            <div class="detail-row">
              <span class="label">University:</span>
              <span class="value">Tech University</span>
            </div>
            <div class="detail-row">
              <span class="label">Team:</span>
              <span class="value team-name">CodeStorm</span>
            </div>
            <div class="detail-row">
              <span class="label">Role:</span>
              <span class="value">Full-Stack Developer</span>
            </div>
            <div className="profile-log">
              <button className="btn logout  countdown">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
