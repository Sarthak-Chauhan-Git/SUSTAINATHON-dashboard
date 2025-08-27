function Header() {
  return (
    <header class="header">
      <div class="header-content">
        <div class="logo">
          <div class="logo-icon">
            <img className="logo-icon" src="logo.png" alt="LOGO"></img>
          </div>
          <h1>SUSTAINATHON 2025</h1>
        </div>
        <h3 style={{ letterSpacing: "10px" }}>
          HACK THE LIMIT'S, BUILD THE IMPOSSIBLE!
        </h3>
        <div class="header-status">
          <div class="status-indicator online"></div>
          <span>ACTIVE</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
