import Header from "./components/Header";
import Teaminfo from "./components/Teaminfo";
import Schedule from "./components/Schedule";
import Stats from "./components/Stats";
import "./app";
import Rules from "./components/Rules";
import User from "./components/User";

function Dashboard() {
  return (
    <div class="dashboard bg-gray-900 text-gray-100">
      <div className="grid-container">
        <Header></Header>
        <main class="main-content">
          <div class="tab-content active" id="overview">
            <div class="dashboard-grid">
              <User></User>
              <Stats></Stats>
              <Schedule></Schedule>
              <Teaminfo></Teaminfo>
              <Rules></Rules>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
